
const boton = document.getElementById(" agregar ");
const lista = document.getElementById(" lista ");

boton.addEventListener("click",function (){
    const texto = prompt("introduce aqui un elemento:");
    const lista = document.getElementById("lista");
    
      if (texto && texto.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = texto;
        lista.appendChild(li);
      }
    });    

    