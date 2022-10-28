
// points for fingers 
const fingerJoints = {
    thumb : [0,1,2,3,4],
    indexFinger : [0,5,6,7,8],
    middleFinger : [0,9,10,11,12],
    ringFinger : [0,13,14,15,16],
    pinky : [0,17,18,19,20],
}


// drawing function
export const drawHand = (predictions , ctx) => {
    if(predictions.length > 0){
        // looping through each prediction
        predictions.forEach((prediction)=>{
            // Grab landmarks
            const landmarks = prediction.landmarks;

            // here making lines
            // loop through fingers
            for(let j=0 ; j<Object.keys(fingerJoints).length ; j++){
                let finger = Object.keys(fingerJoints)[j];
                // loop through pair of joints
                for(let k=0 ; k<fingerJoints[finger].length-1 ; k++ ){
                    // Get pairs of joints
                    const firstJointIndex = fingerJoints[finger][k];
                    const secondJointIndex = fingerJoints[finger][k+1];

                    // Draw Path
                    ctx.beginPath();
                    ctx.moveTo(
                        landmarks[firstJointIndex][0],
                        landmarks[firstJointIndex][1],
                    );
                    ctx.lineTo(
                        landmarks[secondJointIndex][0],
                        landmarks[secondJointIndex][1],
                    )
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 4;
                    ctx.stroke()

                }
            }
            

            // loop through landmarks and draw em
            for(let i=0 ; i<landmarks.length ; i++){
                // Get x point 
                let x = landmarks[i][0];
                // Get y point 
                let y = landmarks[i][1];

                // start drawing
                ctx.beginPath();
                ctx.arc(x,y,5,0,3*Math.PI);

                // set line color
                ctx.fillStyle = 'red';
                ctx.fill();
            }
        });
    }
};

