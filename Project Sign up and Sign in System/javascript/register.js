let error = true;

function getSignup(){
   errorVerify();
   if(error === false){
    createObj(document.getElementById('username').value, document.getElementById('password').value);
   }
}

let users = [];
if('users' in localStorage){
    users = JSON.parse(localStorage.getItem('users'));
}else {
    users = [];
}
function createObj(username, password){
    let verifyUsername;
    for(let i = 0; 'users' in localStorage && i < users.length; i++){
        verifyUsername = users[i].userName;
        if(verifyUsername === username){
                return document.getElementById('errorLog').innerHTML = 'This username is already in use.'
        } else if(i === users.length){
            let newUser = {userName: username, passWord: password};
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            open("http://127.0.0.1:5500/loginArea.html", '_self'); 
         }
     }
     if('user' in localStorage === false){
        let newUser = {userName: username, passWord: password};
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            open("http://127.0.0.1:5500/loginArea.html", '_self'); 
     }
 }

function errorVerify(){
    if(document.getElementById('servicesTerms').checked === false){
        document.getElementById('errorLog').innerHTML = "It's necessary accept the Terms of Services.";
        return error = true;
    }
    if(document.getElementById('username').value === ''){
        document.getElementById('errorLog').innerHTML = 'Username field cannot be blank.';
        return error = true;
    } else if(document.getElementById('password').value !== ''){
        return error = false;
    }
    if(document.getElementById('password').value === '' && document.getElementById('username').value !== ''){
        document.getElementById('errorLog').innerHTML = 'Password field cannot be blank.';
        return error = true;
    } else {
        return error = false;
    }
}