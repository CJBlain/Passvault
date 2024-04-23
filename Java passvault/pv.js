let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let aboutBtn = document.getElementById("aboutBtn");
let aboutText = document.getElementById("aboutText");
let contactBtn = document.getElementById("contactBtn");

signinBtn.onclick = function() {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
};

signupBtn.onclick = function() {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Register";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
};

contactBtn.onclick = function() {
    toggleElement(contactText);
};


aboutBtn.onclick = function() {
    toggleElement(aboutText);
};

function toggleElement(element) {
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}





function toggleInformationDisplay() {
    let container = document.getElementById('signupBox');
    let infoDisplay = container.querySelector('.infoDisplay');

    if (infoDisplay) {
        container.removeChild(infoDisplay);
    } else {
        infoDisplay = document.createElement('div');
        infoDisplay.textContent = 'Enter the name of the Website, the corresponding Password and additional notes that you would like to store, afterwards press the To See Passwords button to see stored passwords';
        infoDisplay.className = 'infoDisplay';
        container.appendChild(infoDisplay);
    }
}

function showLogin() {
    var emailInput = document.querySelector('#signupBox input[type="email"]');
    var passwordInput = document.querySelector('#signupBox input[type="password"]');

    if (emailInput.value === '' || passwordInput.value === '') {
        alert('Please fill in the sign-in fields first.');
        return;
    }

    var formBox = document.getElementById('signupBox');
    formBox.innerHTML = '';

    var welcomeMessage = document.createElement('div');
    welcomeMessage.innerHTML = '<h1>Welcome, User!</h1><p>You have successfully entered the vault.</p>';
    formBox.appendChild(welcomeMessage);

    var additionalFields = document.createElement('div');
    additionalFields.innerHTML = `
        <input type="text" id="websiteInput" placeholder="Enter the website name">
        <input type="text" id="passwordInput2" placeholder="Enter the password">
        <input type="text" id="notesInput" placeholder="Enter additional notes">
    `;
    formBox.appendChild(additionalFields);

    var additionalButton = document.createElement('button');
    additionalButton.textContent = 'Submit Information';
    additionalButton.className = 'UserInputButton';
    formBox.appendChild(additionalButton);

    additionalButton.addEventListener('click', function() {
        var websiteName = document.getElementById('websiteInput').value;
        var newPassword = document.getElementById('passwordInput2').value;
        var additionalNotes = document.getElementById('notesInput').value;

        

        localStorage.setItem('websiteName', websiteName);
        localStorage.setItem('newPassword', newPassword);
        localStorage.setItem('additionalNotes', additionalNotes);

        document.getElementById('websiteInput').value = '';
        document.getElementById('passwordInput2').value = '';
        document.getElementById('notesInput').value = '';
    });

    var nextSectionButton = document.createElement('button');
    nextSectionButton.textContent = 'To See Passwords';
    nextSectionButton.className = 'nextSectionButton';
    formBox.appendChild(nextSectionButton);

    var vaultInfoButton = document.createElement('button');
    vaultInfoButton.textContent = 'Information';
    vaultInfoButton.className = 'vaultInfoButton';
    formBox.appendChild(vaultInfoButton);

    vaultInfoButton.addEventListener('click', toggleInformationDisplay);
    nextSectionButton.addEventListener('click', function() {
        clearScreen(formBox);
    });
}

function clearScreen(formBox) {
    document.body.innerHTML = '';

    var messageDiv = document.createElement('div');
    messageDiv.id = 'displayMessage';
    messageDiv.textContent = 'In this Section of the VAULT you can see stored passwords, please search for the website name you previously entered below';
    document.body.appendChild(messageDiv);

    var searchForWebsite = document.createElement('button');
    searchForWebsite.textContent = 'Search';
    searchForWebsite.className = 'searchForWebsite';
    document.body.appendChild(searchForWebsite);

    searchForWebsite.addEventListener('click', function() {
        var storedWebsiteName = localStorage.getItem('websiteName');
        var storedNewPassword = localStorage.getItem('newPassword');
        var storedAdditionalNotes = localStorage.getItem('additionalNotes');

        if (storedWebsiteName) {
            alert(`Website Name: ${storedWebsiteName}\nPassword: ${storedNewPassword}\nAdditional Notes: ${storedAdditionalNotes}`);
        } else {
            alert('No stored password found.');
        }
    });
}

      
