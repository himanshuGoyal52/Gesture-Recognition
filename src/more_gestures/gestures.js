import * as fp from 'fingerpose';

// my defined gesture (yoo)
const yooGesture = new fp.GestureDescription('yoo');

// thumb
yooGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
yooGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.5);
yooGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.5);
yooGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);
yooGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);

// index
yooGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
yooGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.5);
yooGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);
yooGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);

// middle
yooGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
yooGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalDown, 1.0);
yooGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalDownRight, 0.5);
yooGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalDownLeft, 0.5);

// ring
yooGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
yooGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalDown, 1.0);
yooGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalDownRight, 0.5);
yooGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalDownLeft, 0.5);

// pinky
yooGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
yooGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.5);
yooGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0);
yooGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);


const pointGesture = new fp.GestureDescription('point');


// thumb
pointGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
pointGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
pointGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.5);
pointGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.5);

// index
pointGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
pointGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
pointGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);
pointGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.5);
pointGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.5);
pointGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalDownLeft, 0.5);
pointGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalDownRight, 0.5);

// middle
pointGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
pointGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalRight, 1.0);
pointGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 1.0);
pointGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalDownRight, 0.5);
pointGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalDownLeft, 0.5);
pointGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.5);
pointGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.5);

// ring
pointGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
pointGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalRight, 1.0);
pointGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalLeft, 1.0);
pointGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalDownRight, 0.5);
pointGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalDownLeft, 0.5);
pointGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 0.5);
pointGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 0.5);

// pinky
pointGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
pointGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalRight, 1.0);
pointGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalLeft, 1.0);
pointGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 0.5);
pointGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.5);
pointGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownRight, 0.5);
pointGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownLeft, 0.5);

export  {yooGesture , pointGesture };