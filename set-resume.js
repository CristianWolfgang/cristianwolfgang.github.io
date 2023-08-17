const setResume = ()=>{
    let lang = "es";
    const aDownload = document.getElementById("download-resume");
    document.addEventListener("click",e=>{
        if(e.target.matches(".btn-lang")){
            e.target.textContent = lang.toUpperCase();
            aDownload.href = "/resume-"+lang+".pdf";
            lang = lang==="es"?"en":"es";

        }
    });
};
export default setResume;