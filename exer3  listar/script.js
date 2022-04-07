

function enviar(){
var txt= document.getElementById("texto");
let txt1 = document.getElementById("p");

txt1.innerHTML=  txt.value;
  
}

let list=document.querySelector("#meuUl")

 function listar(){
   
    var itens = document.createElement("li");
    itens.innerHTML = document.getElementById("textoLista").value;
    var itens =list.appendChild(itens);
    document.getElementById("textoLista").value = "";
     

}

