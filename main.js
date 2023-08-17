import hamburgerBtn from "./hamburger-btn";
import playVideo from "./play-video"
import setActiveSection from "./set-active-section";
import setResume from "./set-resume";

document.addEventListener("DOMContentLoaded",e=>{
  playVideo();
  hamburgerBtn();
  setActiveSection();
  setResume();
});