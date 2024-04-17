let signupBtn = document.getElementById("signupBtn")
    let signinBtn = document.getElementById("signinBtn")
    let nameField = document.getElementById("nameField")
    

    signinBtn.onclick = function(){
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signupBtn.classList.add("disable")
        signinBtn.classList.remove("disable")
    }

    signupBtn.onclick = function(){
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Register";
        signupBtn.classList.remove("disable")
        signinBtn.classList.add("disable")
    }

    let aboutBtn = document.getElementById("aboutBtn");
    let aboutText = document.getElementById("aboutText")
    let VaultStoreBtn = document.getElementById("VaultStoreBtn");
    
    contactBtn.onclick = function() {
        toggleElement(contactText);

    aboutBtn.onclick = function() {
        toggleElement(aboutText); 
S
    }};
    
    function toggleElement(element) {
        if (element.style.display === "none" || element.style.display === "") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
    

    function showLogin() {
        var emailInput = document.querySelector('#signupBox input[type="email"]');
        var passwordInput = document.querySelector('#signupBox input[type="password"]');
        
        if (emailInput === '' || passwordInput === '') {
            alert('Please fill in the sign-in fields first.');
            return;
        }

        var formBox = document.getElementById('signupBox');
        formBox.innerHTML = ''; 
    
        
        var welcomeMessage = document.createElement('div');
        welcomeMessage.innerHTML = '<h1>Welcome, User!'  + '</h1><p>You have successfully entered the vault.</p>';
        formBox.appendChild(welcomeMessage);
    
        
        var additionalFields = document.createElement('div');
        additionalFields.innerHTML = `
            <input type="text" id="websiteInput" placeholder="Enter the website name">
            <input type="text" id="passwordInput2" placeholder="Enter the password">
            <input type="text" id="notesInput" placeholder="Enter additional notes">
        `;
        formBox.appendChild(additionalFields);



       
    }
    

    function saveInputValues(){
        let websiteInput = document.getElementById("websiteInput");
        let passwordInput = document.getElementById("passwordInput2");
        let notesInput = document.getElementById("notesInput");

        localStorage.setItem('websiteName', websiteInput.value);
        localStorage.setItem('password', passwordInput.value);
        localStorage.setItem('notes', notesInput.value);
    }

    function loadInputValuesToStore(){
        let websiteInput = document.getElementById("websiteInput");
        let passwordInput = document.getElementById("passwordInput2");
        let notesInput = document.getElementById("notesInput");
    
        websiteInput.value = localStorage.getItem('websiteName') || '';
        passwordInput.value = localStorage.getItem('password') || '';
        notesInput.value = localStorage.getItem('notes') || '';
    }
    
    document.getElementById("websiteInput").addEventListener('input', saveInputValues);
    document.getElementById("passwordInput2").addEventListener('input', saveInputValues);
    document.getElementById("notesInput").addEventListener('input', saveInputValues);

    document.addEventListener('DOMContentLoaded', loadInputValuesToStore);