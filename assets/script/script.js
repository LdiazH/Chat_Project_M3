//mensajes leidos


const contactName = document.getElementsByClassName("chat-soporte__contact");

const chat = document.getElementsByClassName("chat-soporte__contactos__perfiles");
for (let i = 0; i < chat.length;i++){
    chat[i].addEventListener('click',function(){
        contactName[i].classList.remove('bold');

    })
}
for (let i = 0; i < contactName.length; i++) {
    contactName[i]
  }

  //boton ocultar / desplegar mensaje

var bloqueMensajes = document.getElementById("mensajes");
var display = 0;
 
function hideShow(){
    if(display == 1){
        bloqueMensajes.style.display = "flex";
        display = 0;
    }else{
        bloqueMensajes.style.display ="none";
        display = 1;
    }

}

//Prevent default btn send and btn buscar

var form = document.getElementById("formChat");
form.addEventListener("submit",function(event){
    event.preventDefault();
});

var buscar = document.getElementById("buscarChat");
buscar.addEventListener("submit",function(event){
    event.preventDefault();
});





