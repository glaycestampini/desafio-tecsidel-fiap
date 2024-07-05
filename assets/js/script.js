document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'teste' && password === 'teste') {
        window.location.href = '../assets/pages/inicio.html'; // Redireciona para a tela inicial
    } else {
        alert('Usuário ou senha incorretos'); // Mostra uma mensagem de erro
    }
});
