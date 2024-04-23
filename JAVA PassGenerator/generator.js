function generatePassword() {
    const length = 12; // Set the length of the password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"; // Define characters to include in the password
    let password = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    return password;
}

document.getElementById("generateBtn").addEventListener("click", function() {
    const password = generatePassword();
    document.getElementById("passwordDisplay").value = password;
});