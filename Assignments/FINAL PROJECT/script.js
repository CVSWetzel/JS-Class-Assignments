document.getElementById('generate-btn').addEventListener('click', function() {
    var passwordLength = parseInt(document.getElementById('password-length').value);
    var includeUppercase = document.getElementById('include-uppercase').checked;
    var includeLowercase = document.getElementById('include-lowercase').checked;
    var includeNumbers = document.getElementById('include-numbers').checked;
    var includeSpecial = document.getElementById('include-special').checked;

    // Validate password length
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert('Please enter a valid password length (between 8 and 128 characters).');
        return;
    }

    // Validate at least one character type is selected
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecial) {
        alert('Please select at least one character type.');
        return;
    }

    var charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSpecial) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    var password = '';
    for (var i = 0; i < passwordLength; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementById('password').value = password;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    var passwordTextarea = document.getElementById('password');
    
    // Select the text inside the textarea
    passwordTextarea.select();
    passwordTextarea.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the selected text to the clipboard
    document.execCommand('copy');
    
    // Deselect the text
    passwordTextarea.setSelectionRange(0, 0);
    
    // Provide feedback to the user
    alert('Password copied to clipboard!');
});
