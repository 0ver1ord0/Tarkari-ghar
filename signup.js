function register() {
    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessages = '';

    if (first === '' || last === '') {
        errorMessages += 'Please enter your name<br>';
    }

    var numberPattern = /^[0-9]+$/;
    if (!numberPattern.test(number) || number === '') {
        errorMessages += 'Please enter a valid number<br>';
    }

    var emailPattern = /^[a-zA-Z]+[0-9]*@[a-zA-Z]+\.[a-zA-Z]+$/;
    if (!emailPattern.test(email) || email === '') {
        errorMessages += 'Please enter a valid email<br>';
    }

    var passwordPattern = /^[a-zA-Z0-9]{6,}$/;
    if (!passwordPattern.test(password) || password === '') {
        errorMessages += 'Please enter a valid password (at least 6 characters)<br>';
    }

    if (errorMessages !== '') {
        document.getElementById('error-messages').innerHTML = errorMessages;
        return;
    }

    document.getElementById('error-messages').innerHTML = 'Registration successful!';
}