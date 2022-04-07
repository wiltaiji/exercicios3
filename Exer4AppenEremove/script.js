var texto=document.getElementById("corpo")

var linha= document.createElement("p");
var outraLinha =document.createElement("p")
linha.innerText="esse eh um parágrafo";
outraLinha.innerText="segundo parágrafo";

document.body.appendChild(linha);
document.getElementById("corpo").appendRemove(outraLinha)


 