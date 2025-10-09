//muda o nome do titulo e do subtitulo
var subtitulo = document.querySelector(".subtitulo");
var titulo = document.querySelector(".titulo");
subtitulo.textContent = "Meus Pacientes";
titulo.textContent = "Raizer Nutrição";

//acessando a tag tr de Paulo
var pacientes = document.querySelectorAll(".paciente");

//loop para contar com todos os pacientes
for(var i = 0; i < pacientes.length; i = i++){
    var paciente = pacientes[i];

//acessando o peso e a altura
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//imc conta
var imc = calcularImc(peso,altura);

//Variaveis com valor true
var pesoValido = true;
var alturaValido = true; 

if(pesoValido && alturaValido){
    //acessando o imc
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = calcularImc(peso,altura);
};

//define se o peso ou altura está invalida
if(peso <= 0 || peso >= 1000 ){
    var pesoValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add(".campo-invalido");
};
if(altura <= 0 || altura >= 3.00){
    var alturaValido = false;
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add(".campo-invalido");
};
};

function calcularImc(peso,altura){
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

