const btn1 = document.querySelector(".buttons button:nth-child(1)");
const btn2 = document.querySelector(".buttons button:nth-child(2)");
const btn3 = document.querySelector(".buttons button:nth-child(3)");
const toastBox = document.getElementById("toastBox");

const successMsg = `<i class="fa-solid fa-circle-check" style="color:green"></i> Enviado Correctamente`;
const errorMsg = `<i class="fa-solid fa-circle-xmark" style="color:red""></i> Por favor solucione el error!`;
const invalidMsg = `<i class="fa-solid fa-circle-exclamation" style="color:orange"></i> Entrada invalida, intente nuevamente`;


function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes("error")){
        toast.classList.add("error");
    }

    if(msg.includes("invalida")){
        toast.classList.add("invalid");
    }

    setTimeout(() => {
       toast.remove(); 
    }, 6000);
}