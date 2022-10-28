import React from 'react';
import logo from './img/logo.png';
import './App.css';

import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <div className="container-fluid page-container">
        <div className="content">
        <div className="img">
          <img src= {logo} alt="" />
            <span>By Himanshu Goyal</span>
          <div className='social'>
            <a href='https://github.com/himanshuGoyal52' ><i className='bx bxl-github'></i></a>
            <a href='https://www.linkedin.com/in/himanshu-goyal-a971941bb/' ><i className='bx bxl-linkedin' ></i></a>
            <a href='https://www.instagram.com/happy_vgoyal/' ><i className='bx bxl-instagram'></i></a>
          </div>
        </div>
            <div className="header">
                <h3>Gesture <br/><span style={{fontWeight : "bold"}}>Recognition</span> <br/>is here.</h3>
            </div>
            <div className="text">
                <p>Technique that allows you to determine hand gestures from a hand pose model. This could be used to control computer input sign language and for active gameplay.</p>
            </div>
            <div className="buttons">
            <Link style={{padding : '10px 34px'}} to='/gesture' className="btn btn-primary">Try Out!</Link>
            <a href='https://drive.google.com/drive/folders/1cnZfB_aQ7I6xq4Wo5k1W80DSs3QEWIO2?usp=sharing'><button  className="btn btn-primary">Learn more</button></a>
            </div>
        </div>
        <div className="image">

        </div>

    </div>
    </>
  )
}

export default App;