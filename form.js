//acessar o botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");

//executa os códigos ao clicar no botão
    botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    //acessa o formulario
var formulario = document.querySelector("#form-adiciona");
var paciente = BuscaValoresFormulario(formulario);
var pacienteTr = CriarTr(paciente);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);

formulario.reset();
});


function BuscaValoresFormulario(formulario){
 
    //captura os valores digitados
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcularImc(formulario.peso.value, formulario.altura.value)  
     }

return paciente;
};

    function CriarTr(paciente){
//criar a tag,  <tr>
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


//adicionar as tags na tela do usuario
    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"));   

    return pacienteTr;
};

function criarTd(dado, classe){
   const td = document.createElement("td");

   td.textContent = dado;
   td.classList.add(classe);

   return td;
};