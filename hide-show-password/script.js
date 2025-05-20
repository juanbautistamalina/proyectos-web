const eyeicon = document.getElementById("eyeicon");
const container = document.querySelector(".input-box");
const password = document.getElementById("password");


eyeicon.addEventListener("click", ()=>{
    if(password.getAttribute("type") === "password"){
        password.setAttribute("type", "text");
        eyeicon.setAttribute("src", "./img/eye-open.png");
    }else{
        password.setAttribute("type", "password");
        eyeicon.setAttribute("src", "./img/eye-close.png");
    }
})

