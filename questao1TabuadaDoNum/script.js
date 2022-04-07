let num;
num=prompt("digite um numero para mostrar a tabuada");

if(!num){  // condicional se estiver vazio
    alert ("digite um número")
}
 
         // fazer outra condicional para se for string


else {  // senao , depois de todos condição fazer a conta
document.write("A tabuada do "+ num  +"<br>");

for(var a =0 ; a<=10 ;a++ ){
    let mult = num*a;
    document.write("<br>")
    document.write(num +"x"+a +"=" +mult); 
    document.write("<br>")
    
}
}
