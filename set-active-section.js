const setActiveSection = ()=>{
    window.addEventListener("hashchange",e=>{
        const section = location.hash || "#";
        const element = document.querySelector(".nav__list a[href='"+ section  +"']"),
        prevElement = document.querySelector(".nav__list a.active");
        prevElement.classList.remove("active");
        element.classList.add("active");
    });
};
export default setActiveSection;