let signupBtn = document.getElementById("signupBtn")
    let signinBtn = document.getElementById("signinBtn")
    let nameField = document.getElementById("nameField")
    let title = document.getElementById("title")

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
    
    aboutBtn.onclick = function() {
        if (aboutText.style.display === "none" || aboutText.style.display === "") {
            aboutText.style.display = "block"; // Display the text
        } else {
            aboutText.style.display = "none"; // Hide the text
        }
    };

    let contactBtn = document.getElementById("contactBtn");
 
    let contactText = document.getElementById("contactText")
    
    contactBtn.onclick = function() {
        if (contactText.style.display === "none" || contactText.style.display === "") {
            contactText.style.display = "block"; 
        } else {
            contactText.style.display = "none"; 
        }
    };
    

    function showLogin() {
        var emailInput = document.querySelector('#signupBox input[type="email"]');
        var passwordInput = document.querySelector('#signupBox input[type="password"]');
        
        if (emailInput === '' || passwordInput === '') {
            alert('Please fill in the sign-in fields first.');
            return;
        }

        var formBox = document.getElementById('signupBox');
        formBox.innerHTML = ''; // Remove form elements
    
        // Display welcome message
        var welcomeMessage = document.createElement('div');
        welcomeMessage.innerHTML = '<h1>Welcome, User! '  + '</h1><p>You have successfully entered the vault.</p>';
        formBox.appendChild(welcomeMessage);
    
        // Create and append additional input fields
        var additionalFields = document.getElementById('additionalFields');
        additionalFields.style.display = 'block';
        formBox.appendChild(additionalFields);
    }
    