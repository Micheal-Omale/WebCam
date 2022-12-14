const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');


const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);


webcam.start()
  .then(result => {
    console.log('webCam activated!')
  })
  .catch(err => {
    console.log(err)
  });
  

function takeSnap() {
 let picture = webcam.snap();
 document.querySelector('a').href = picture;
}