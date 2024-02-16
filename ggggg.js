//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
    })
}
    
//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();
    if(usuario == "admin" && senha == "123456"){
    window.location = "login do negocio la.html";
    logado = 1;
    }
    if(usuario == "admin" && senha !== "123456"){
    alert("Senha Incorreta");
    }

    if(usuario !== "admin" && senha == "123456"){
    alert("Nome de Usuário Incorreto");
    }

    if(usuario == "admin" && senha == "123456"){
        alert("Bem-Vindo de Volta")
    }

}

