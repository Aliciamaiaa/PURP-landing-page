var Setadireita = window.document.getElementById("setadireita");
var Leonardo = window.document.getElementById("leonardo");
var Samantha = window.document.getElementById("samantha");
var Bruna = window.document.getElementById("bruna"); 
var Setaesquerda = window.document.getElementById("setaesquerda"); 

function RolarParaDireita() { 
    Leonardo.style.display = "none";
    Bruna.style.display = "flex";
    Setadireita.style.display = "none";
    Setaesquerda.style.display = "flex"; 
}

function RolarParaEsquerda() {
    Leonardo.style.display = "flex";
    Bruna.style.display = "none";
    Setadireita.style.display = "flex";
    Setaesquerda.style.display = "none"; 

}