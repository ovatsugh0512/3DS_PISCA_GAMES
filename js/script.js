function verificarLogin() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if(login ==="ovatsugh" && senha ==="2099"){
        alert("Seja bem-vinde!!!");
        window.location.href ="games.html";
    } else{
        alert("Algo de errado não está certo!");
    }

    login = document.getElementById("login").value = '';
    senha = document.getElementById("senha").value = '';
};