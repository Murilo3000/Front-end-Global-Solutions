 function isEmailValid(){
     const email=document.getElementById("emailForm").value;
     if (!email){
         return false;
     } 
     return validateEmail(email);
}
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
function home(){
    if (isEmailValid()){
        window.open("../index.html")
    }
    else{
        alert("Preencha todos os dados corretamente")
    }
}
function usuario(){
    const usuario = document.getElementById('us').value
    const senha = document.getElementById('passwordForm').value
    if (usuario=="Admin" && senha=="123456"){
        alert("Bem vindo admin")
        window.open('https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021')
    } 
    else if(!usuario || !senha){
        alert("Preencha todos os campos")
    }
    else{
        alert("Informações incorretas, tente novamente")
    }
}

const rootElement = document.documentElement
function trocaDark_index(){
    rootElement.style.setProperty('--cor-font1','#3A3A3A');
    rootElement.style.setProperty('--cor-background','#404040')
    rootElement.style.setProperty('--cor-font2','white');
}
function indexLight(){
    rootElement.style.setProperty('--cor-font1','white');
    rootElement.style.setProperty('--cor-background','white')
    rootElement.style.setProperty('--cor-font2','#3A3A3A');
}
function trocaDark_forms(){
    rootElement.style.setProperty('--cor-font1','#3A3A3A');
    rootElement.style.setProperty('--cor-background','#404040')
    rootElement.style.setProperty('--cor-font2','white')
}
function trocaLight_forms(){
    rootElement.style.setProperty('--cor-font1','white');
    rootElement.style.setProperty('--cor-background','white')
    rootElement.style.setProperty('--cor-font2','#3A3A3A');
}