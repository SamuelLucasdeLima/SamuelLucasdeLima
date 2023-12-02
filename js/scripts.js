function limparCampos() {
    document.getElementById("loginForm").reset();
}

function abrirCadastro() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("cadastro").style.display = "block";
}

function fecharCadastro() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("cadastroForm").reset();
}
