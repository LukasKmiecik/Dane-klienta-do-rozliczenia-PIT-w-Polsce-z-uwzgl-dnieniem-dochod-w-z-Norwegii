function sprawdzEmail(email) {
    // Wzorzec dla adresu e-mail
    var wzorzecEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return wzorzecEmail.test(email);
}

var emailInput = document.getElementById('p4');

emailInput.addEventListener('blur', function() {
    var email = this.value;
    if (!sprawdzEmail(email)) {
        alert('Nieprawidłowy adres e-mail!');
        // Wyczyść pole wejściowe
        this.value = '';
    }
});