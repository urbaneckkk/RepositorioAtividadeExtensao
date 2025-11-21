const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (!username || !password) {
        errorMessage.textContent = 'Preencha todos os campos!';
        return;
    }

    window.location.href = '../../index.html';
});
