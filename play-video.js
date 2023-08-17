const playVideo = function () {
    document.addEventListener("click", event => {
        if (event.target.matches(".play-btn")) {
            const video = event.target.previousElementSibling;
            video.onended=e=>{
                event.target.style="";
            }
            if (video.paused) {
                video.play();
                event.target.style="opacity:0;";
            } else {
                video.pause();
                
                event.target.style="";
            }
        }
    })
}
export default playVideo;