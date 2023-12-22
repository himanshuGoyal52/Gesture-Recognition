import React from 'react'
import { useState , useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import WebCam from 'react-webcam';
import { drawHand } from './utils';

import * as fp from 'fingerpose';
import victory from './img/victory.png';
import thumbs_up from './img/thumb.png';
import { yooGesture , pointGesture} from './more_gestures/gestures';
import yoo from './img/yoo.png'
import point from './img/point.png'
import { Link } from 'react-router-dom';


export default function VideoStream() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji , setEmoji] = useState(null);
  const images = {thumbs_up : thumbs_up , victory : victory , yoo : yoo , point : point};

  const Handpose = async () => {
    // loadin the media pipe model
    const model = await handpose.load();
    console.log('Handpose model loaded...');
    // loop and detect hands 
    setInterval(()=>{
      detectHand(model);
    },100)

  }

  const detectHand = async (model) => {
    // check data is available
    if( typeof webcamRef.current !== 'undefined' && 
        webcamRef.current !== null && 
        webcamRef.current.video.readyState === 4 
      ){

        // get video properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        // set video height and width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        // set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        // make detections
        const hand = await model.estimateHands(video);
        // console.log(hand);

        /// gesture detection
        if(hand.length > 0){
          const GE = new fp.GestureEstimator([
            fp.Gestures.VictoryGesture,
            fp.Gestures.ThumbsUpGesture,
            yooGesture,
            pointGesture
          ])

          const gesture = GE ? await GE.estimate(hand[0].landmarks , 8) : '';
          // console.log(gesture);
          if(gesture.gestures !== undefined && gesture.gestures.length > 0){
            const confidence = gesture.gestures.map((prediction) => prediction.score);
            const maxConfidence = confidence.indexOf(Math.max.apply(null,confidence));
            setEmoji(gesture.gestures[maxConfidence].name);
            // console.log(emoji);
          }
        }

        // draw mesh
        const ctx = canvasRef.current.getContext("2d");
        drawHand(hand,ctx);

      }
  }

  Handpose();

  return (
    <div className="App">
      <Link style={{padding : '10px 36px'}} to='/' className="backArrow"><i className='bx bx-arrow-back'></i></Link>
      <header className="App-header">
      {emoji !== null ? <img className='emojiHolder' src={images[emoji]} alt="emoji" style={{
          marginLeft : 'auto',
          marginRight : 'auto',
          // left : 400,
          // bottom : 500,
          zIndex : 150,
          padding : '8rem',
          right : 0,
          textAlign : 'center',
          height : 100,
        }} /> : "" }
        <WebCam ref={webcamRef} 
        style={{
          position : 'absolute' ,
          marginLeft : 'auto',
          marginRight : 'auto',
          left : 0,
          right : 0,
          textAlign : 'center',
          zIndex : 9,
          width : 640,
          height : 480,
          }} 
        />
        <canvas 
          ref={canvasRef}
          style={{
            position : 'absolute' ,
            marginLeft : 'auto',
            marginRight : 'auto',
            left : 0,
            right : 0,
            textAlign : 'center',
            zIndex : 9,
            width : 640,
            height : 480,
          }}
        />
        
      </header>
    </div>
  );
}