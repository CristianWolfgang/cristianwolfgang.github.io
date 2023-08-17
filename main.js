import hamburgerBtn from "./hamburger-btn.js";
import playVideo from "./play-video.js"
import setActiveSection from "./set-active-section.js";
import setResume from "./set-resume.js";

document.addEventListener("DOMContentLoaded",e=>{
  playVideo();
  hamburgerBtn();
  setActiveSection();
  setResume();
});