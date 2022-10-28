# About Me
 * **Name** : Himanshu Goyal
 * **University** : Indian Institute of Technology (Indian school of mines) , Dhanbad
 * **Department** : Bachelor's of technology in Electrical Engineering
 * **Email** : 20je0420@ee.iitism.ac.in / goyalhimanshu424@gmail.com
 * **Phone** : +91-74129 72658
 * **Addmission Number** : 20JE0420

# Gesture Recognition
It is a ML technique that determine hand gestures from a hand pose model.
The points on hands are commonly referred to as **landmarks**.
These handpose model that's being used is provided by **Tensorflow.JS** and detects 20 different points in our hand.
This could be used to control computer input sign language and for active gameplay.

## How it works
1. Webcam stream inside of front-end React app.
2. Handpose from tensorflow.js use to make detections from live video stream.
3. Draw keypoints and lines on canvas.
4. Using fingerpose to determine gesture and control flow.


## Steps 
 1. installing dependencies
 ```
 npm i @tensorflow/tfjs @tensorflow-models/handpose
 npm i react-webcam
 npm i fingerpose
 ```
 2. Developing landing page in App.js.
 3. Importing these dependencies in VideoStream.js for later use.
 4. Setting up webcam and canvas in VideoStream.js. 
 5. Now making the function handpose to run detectHand function at interval of 100 ms.
 6. In detectHand function we are detecting hand with the following function `estimateHands()`.
 7. Now for drawing dots and line on canvas we making an new file `utils.js` in src folder. 
 8. So in `utils.js` we are looping through every predictions and then looping through every landmark which is basically a point having proerties like (x,y,z).
 9. Updating detect function for gesture handling. 
 10. Setup of hook and emoji object. 
 11. Adding emoji display to the screen.
