const hoja=document.getElementById("primenu");
const signo=document.getElementById("signo");
const hojo=document.getElementById("segunu");
const rpta=document.getElementById("calcular");
const hojadice=document.getElementById("respuesta");



function calcular(){
    const operacion = signo.value;
    const pri=parseFloat(hoja.value);
    const segu=parseFloat(hojo.value);

   if(operacion == "x"){
 let resultado;
 switch(operacion){
    case "x":
        resultado =pri*segu;
        break;
 }
 hojadice.innerText ="= la respuesta es :" + resultado;
 }else{
    hojadice.innerText ="no se puede calcular";
 }
   
}