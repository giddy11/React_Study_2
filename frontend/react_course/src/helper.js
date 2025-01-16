let users = [
    {
        fullname: "Emmanuel A",
        email: "emmanuel@gmail.com",
        password: "1"
    }
];

export function signup(fullname, email, password) {

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
        alert("Sign up Successfully")
    } else {
        alert("User Already Exists")
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