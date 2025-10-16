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
});

function BuscaValoresFormulario(formulario){
 
    //captura os valores digitados
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.peso.value,
        gordura: formulario.gordura.value,
        imc: CarcularImc(formulario.peso.value, formulario.altura.value)
    }

return paciente;
}

    function CriarTr(){
//criar a tag,  <tr>
    var pacienteTr = document.createElement("tr");

//criar a tag <td>
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

//adicionando os valores
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

//adicionar as tags na tela do usuario
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);   

};