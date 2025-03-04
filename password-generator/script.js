let resultEl = document.getElementById('result');
let clipboardEl = document.getElementById('clipboard');

// copy to clipboard
clipboardEl.addEventListener('click', () => {
    let password = resultEl.innerText;
  if (!password) {
    return;
  }
  navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!')
})

// validation for password length
function checkLength() {
    let lengthEl = parseInt(document.getElementById('length').value);
    // to clear error text if any
    document.getElementById("lengthError").innerText = "";
    let isValid = true;
    if (lengthEl < 1 || lengthEl > 20) {
        document.getElementById("lengthError").innerText = "Please enter number between 1 and 20";
        isValid = false;
    }
    if (!isValid) {
        return;
    }
}

// password generate function
function generatePassword() {
    let uppercaseEl = document.getElementById('uppercase');
    let lowercaseEl = document.getElementById('lowercase');
    let numbersEl = document.getElementById('numbers');
    let symbolsEl = document.getElementById('symbols');
    let lengthEl = parseInt(document.getElementById('length').value);

    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charset = "";
    if (lowercaseEl.checked) charset += lowercase;
    if (uppercaseEl.checked) charset += uppercase;
    if (numbersEl.checked) charset += numbers;
    if (symbolsEl.checked) charset += specialChars;
    
    let password = "";
    if (charset === "") {
        password = "";
    }

    for (let i = 0; i < lengthEl; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];       
    }
    
    document.getElementById("result").innerText = password;
}
