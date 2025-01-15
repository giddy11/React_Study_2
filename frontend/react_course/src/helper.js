let users = [
    {
        fullname: "Emmanuel A",
        email: "emmanuel@gmail.com",
        password: "1"
    }
];

export function signup() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let result1 = document.getElementById("result1");

    let user = users.find(item => item.email == email);
    if(user == null){
        /**
         * TODO: handle cases of null in fullname, email, password
         */
        users.push({
            fullname: fullname,
            email: email,
            password:password
        });
        console.log(users)
        result1.innerText = "Sign up Successfully"
    } else {
        result1.innerText = "User Already Exists"
    }

}

export function login() {
    let email2 = document.getElementById("email2").value;
    let password2 = document.getElementById("password2").value;
    let result2 = document.getElementById("result2");

    let user = users.find(item => item.email == email2 && item.password==password2);
    console.log(user)
    console.log(users)
    if(user == null){
        result2.innerText = "Invalid User Authentication"
    } else {
        result2.innerText = `Welcome to myApp ${user.fullname}`
    }

}