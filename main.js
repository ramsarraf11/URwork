function SignUp(e){
    event.preventDefault();

    let email = document.getElementById('email').value;
    let username = document.getElementById("username").value;
    let pass = document.getElementById("password").value

    let user={
        email:email,
        username:username,
        password:pass,
    };

    let json = JSON.stringify(user)
    localStorage.setItem(username,json);
    console.log("user added");
}
function Login(e){
    event.preventDefault(e);
    let username = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let result = document.getElementById("result");

    let user = localStorage.getItem(username);
    let data=JSON.parse(user);

    if(user==null){
        result.innerHTML="wrong username"
    }else if(username==data.username && pass ==data.password){
        result.innerHTML="Logged In"
    }else{
        result.innerHTML="wrong password"
    }
}
