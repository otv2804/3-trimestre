//muda o nome do titulo e do subtitulo
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Meus Pacientes";
var cabeçalho = document.querySelector(".titulo");
cabeçalho.textContent = "Raizer Nutrição";

//acessando a tag tr de Paulo
var paciente = document.querySelectorAll(".paciente");

for(var i = 0; i < paciente.length; i = i++){

//acessando o peso e a altura
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//imc conta
var imc = peso / (altura * altura);

//Variaveis com valor true
var pesoValido = true;
var alturaValido = true; 

if(pesoValido && alturaValido){
    //acessando o imc
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc;
}

//define se o peso ou altura está invalida
if(peso <= 0 || peso >= 1000 ){
    console.log("Peso Inválido");
    var pesoValido = false;
    tdImc.textContent = "Peso Inválido";
};
if(altura <= 0 || altura >= 3.00){
    console.log("Altura Inválida");
    var alturaValido = false;
    tdImc.textContent = "Altura Inválida";
};

}
