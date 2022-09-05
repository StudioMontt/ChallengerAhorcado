function codificar(){
    
    var oracion = document.getElementById("codificado").value;
    var oracion=oracion.replace(/e/mgi, "enter");
    var oracion=oracion.replace(/i/mgi, "imes");
    var oracion=oracion.replace(/a/mgi, "ai");
    var oracion=oracion.replace(/o/mgi, "ober");
    var oracion=oracion.replace(/u/mgi, "ufat");
    document.getElementById("decodificado").innerHTML = oracion;
    document.getElementById("muneco").style.display = "none";
    document.getElementById("resultado").style.display = "show";
    document.getElementById("resultado").style.display = "inherit";
}

function decodificar(){

    var oracion = document.getElementById("codificado").value;
    var oracion=oracion.replace(/enter/mgi, "e");
    var oracion=oracion.replace(/imes/mgi, "i");
    var oracion=oracion.replace(/ai/mgi, "a");
    var oracion=oracion.replace(/ober/mgi, "o");
    var oracion=oracion.replace(/ufat/mgi, "u");
    document.getElementById("decodificado").innerHTML = oracion;
    document.getElementById("muneco").style.display = "none";
    document.getElementById("resultado").style.display = "show";
    document.getElementById("resultado").style.display = "inherit";
}

function copiar(){
    var copiado=document.querySelector("#decodificado");
    copiado.select();
    document.execCommand("copy");
    document.getElementById("codificado").innerHTML = "";
    document.getElementById("decodificado").innerHTML = "";
}

var click1=document.querySelector("#botonCodif");
var click2=document.querySelector("#botonDecodif");
var click3=document.querySelector("#botonCopiar");

click1.onclick=codificar;
click2.onclick=decodificar;
click3.onclick=copiar;
