/*Acessando o DOM*/
let nome = window.document.getElementById('nome')/*recebendo uma variavel do tipo nome que recebe o elemento pelo id nome */
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

/*Validação do Campo Nome*/
function validaNome(){
    /*Criando a varavel txtNome da div*/
    let txtNome = document.querySelector("#txtNome")

    /*Validando o campo Nome se tem mais de 3 letras */
    if (nome.value.length < 3){
        /*colocando um valor na DIV txtNome */
       txtNome.innerHTML = "Nome Inválido!"
       txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = "green"
        nomeOk = true /*Validando o nome */
    }
}
/*Vaidação do campo Email */
function validaEmail(){
    /*Criando a varavel txtEmail da div*/
    let txtEmail = document.querySelector("#txtEmail")

    /*Validando o campo de email se possui "@" com o metodo indexOf*/
    if(email.value.indexOf('@') == -1){
        txtEmail.innerHTML = "E-mail Inválido!"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail Válido!"
        txtEmail.style.color = "green"
        emailOk = true /*Validando o email */
    }
}
/*Função para não escrever mais que 100 caracteres no campo Assunto */
function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "<h1>Texto muito grande, digite no maximo 100 caractres!</h1>"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "none"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true /*Validando o assunto */
    }
}
/*Função para enviar o formulário*/
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulario enviado com sucesso!")
    }else{
        alert("Preencha o formulário corretamente antes de enviar!")
    }

/*Função para dar um zoom no mapa*/
function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}
function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}



/*
tipos de acesso ao DOM:
    por Tag: getElementByTagName()
    por Id: getElementById()
    por Nome: getElementByName()
    por Classe: getElementsByClassName()
    por Seletor: querySelector()
    Por seletor é a melhor pratica de se acessar o DOM

    todas as variaveis tem que ser declaradas usando o let
*/