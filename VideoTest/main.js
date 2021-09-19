videoArea = document.getElementById("video-area"); //Just a div for videos to be placed in

const myVideo = document.createElement('video');

//getting user's media devices
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    addVideoStream(myVideo, stream) // calling the addVideoStream function
})


//Creating a the video and putting it on the videoArea div
function addVideoStream(video, stream){
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoArea.appendChild(video);
}