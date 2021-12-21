let getObject = JSON.parse(localStorage.getItem('users'));

function loginVerify(){    
    let verify = true;
    let username;
    let password;
    for(let i = 0; i < getObject.length && verify; i++){
        if(verify){
        if(getObject[i].userName === document.getElementById('username').value){
            username = getObject[i].userName;
            password = getObject[i].passWord;
            sessionStorage.setItem('username', username);
            verify = false;
            if(document.getElementById('username').value === username && document.getElementById('password').value === password){
                open("http://127.0.0.1:5500/userArea.html", '_self');
                return console.log('Gotcha!');
                }
            }
        }
    }
    errorVerify();
}
function errorVerify(){
    
   if(document.getElementById('username').value !== username){
        document.getElementById('errorLog').innerHTML = 'Something is wrong. please try again.';
    }
    if(document.getElementById('password').value !== password && document.getElementById('username').value === username){
        document.getElementById('errorLog').innerHTML = 'Something is wrong. please try again.';
    }
    if(document.getElementById('username').value === ''){
        document.getElementById('errorLog').innerHTML = 'Username field cannot be blank.';
    }
    if(document.getElementById('password').value === '' && document.getElementById('username').value !== ''){
        document.getElementById('errorLog').innerHTML = 'Password field cannot be blank.';
    }
}