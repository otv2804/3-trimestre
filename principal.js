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
var imc = peso / (altura * altura);

//Variaveis com valor true
var pesoValido = true;
var alturaValido = true; 

if(pesoValido && alturaValido){
    //acessando o imc
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc.toFixed(2);
}

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

}

//evento click em subtitulo
subtitulo.addEventListener('click', mostraMensagem);

function mostraMensagem(){
    alert("este elemento foi clicado");
}

//acessar o botão
var botaoadicionar = document.querySelector("#adicionar-paciente");

//executa os códigos ao clicar no botão
    botaoadicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    //acessa o formulario
var formulario = document.querySelector("#fora-adiciona");

//captura os valores digitados
var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

//criar a tag,  <tr>
var pacienteTr = document.createElement("tr")

//criar a tag <td>
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

//adicionando os valores
nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = imc;

});