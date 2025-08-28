//muda o nome do titulo e do subtitulo
var pacientes = document.querySelector(".subtitulo");
pacientes.textContent = "Meus Pacientes";
var cabeçalho = document.querySelector(".titulo");
cabeçalho.textContent = "Raizer Nutrição";

//acessando a tag tr de Paulo
var paciente = document.querySelector("#primeiro_paciente");

//acessando o peso e a altura
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


//acessando e fazendo o imc
var imc = peso / (altura * altura);
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

if(peso < 0 || peso > 1000 ){
    alert("Peso Inválido")
};
if(altura < 0 || altura > 3.00){
    alert("Altura Inválida")
};