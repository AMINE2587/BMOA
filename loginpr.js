window.onload = function(){
    dataProfile();
}

function signUp(event) {
    event.preventDefault();

    const username = document.getElementById('sign-up-username');
    const email = document.getElementById('sign-up-email');
    const password = document.getElementById('sign-up-password');
    const confirm = document.getElementById('sign-up-confirm');
    
    
    if (!username.value || !email.value || !password.value || !confirm.value) {
        alert('please complete the form')
        return;
    }

    
    if (password.value !== confirm.value) {
        alert('the password is not the same')
        return;
    }

   
    let user = {
        usr: username.value,
        eml: email.value,
        pswr: password.value,
    };
    localStorage.setItem('User', JSON.stringify(user));

    setTimeout(() => {
        window.location.replace('login.html');
    }, 500);

}

document.addEventListener('DOMContentLoaded', function () {
    const signupbtn = document.getElementById('btn-signup');
    signupbtn.addEventListener('click', signUp);
});



function login(event) {
    event.preventDefault();  

    const email = document.getElementById('email-login');
    const password = document.getElementById('password-login');
    const user = JSON.parse(localStorage.getItem('User'));

    if (user && user.eml === email.value && user.pswr === password.value) {
        alert('your login is done!')
        window.location.replace('dashbord.html');
    } else {
        alert('password or email is wrong')
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const loginbtn = document.getElementById('login-btn');
    loginbtn.addEventListener('click', login);
});

function dataProfile(){
    const inp = document.getElementById('upload-file');
    const img = document.getElementById('profile-img');

    inp.onchange = function(){
        let file = new FileReader();
        file.readAsDataURL(inp.files[0]);
        file.onload = function(){
            img.src = file.result;
        } 
    }
};




function logOut(event){
    event.preventDefault();
    
    setTimeout(() => {
        window.location.replace('login.html');
    }, 500);
    

}
document.addEventListener('DOMContentLoaded', function () {
    const outbtn = document.getElementById('btn-logout');
    outbtn.addEventListener('click', logOut);
});

function generateId(event){
    event.preventDefault();
    
    const generateBtn = document.getElementById('generate-btn')
    const prId = document.getElementById('pr-id');
    const prbankNumber = document.getElementById('pr-bank-number');
    const id = Math.floor(Math.random() * 1000000);
    const bankNumber = Math.floor(Math.random() * 100000000000);
    

   

    prId.value = id;
    prbankNumber.value = bankNumber;
    
    

    if(prId.value &&  prbankNumber.value != ''){
        generateBtn.style.display = 'none';
        return;
    }

};


document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', generateId);
});







