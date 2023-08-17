const hamburgerBtn = ()=>{
    const navBar = document.getElementById("navbar"),
    hamburgerBtn = document.getElementById("hamburger-btn");
    document.addEventListener("click",e=>{
        if(e.target.matches(".hamburger") || e.target.matches(".hamburger *")){
            
            hamburgerBtn.classList.toggle("is-active");
            navBar.classList.toggle("display");
            
        }
    })
};
export default hamburgerBtn;