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
        console.log(user)
        console.log(users)
        alert("Sign up Successfully")
    } else {
        alert("User Already Exists")
    }

}

export function login(email2, password2) {

    let user = users.find(item => item.email === email2 && item.password === password2);
    console.log(user)
    console.log(users)
    if(user == null){
        alert("Invalid User Authentication")
    } else {
        alert(`Welcome to myApp ${user.fullname}`)
    }

}