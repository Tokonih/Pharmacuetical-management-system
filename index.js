userInfo = []

function signupValidation() {
    let info = document.querySelectorAll('.info')
    for (let i = 0; i < info.length; i++) {
        if (info[i].value == '' || info[i].value == null) {
            info[i].nextElementSibling.innerHTML = info[i].previousElementSibling.innerHTML + " is required"
        } else {
            info[i].nextElementSibling.innerHTML = ""
        }
    };


    let firstname = document.getElementById('firstname')
    let lastname = document.getElementById('lastname')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let gender = document.getElementById('gender')


    if (!firstname.value || !lastname.value || !email.value || !password.value || !gender.value) {
        return
    } else {
        alert('Sign up Successful')
    }


    obj = {
        FirstName: firstname.value,
        LastName: lastname.value,
        Email: email.value,
        password: password.value,
        Gender: gender.value
    }

    // userInfo.push(obj)
    // console.log(userInfo)

    let storedData = localStorage.getItem('userInfo')
    let infoContent = storedData ? JSON.parse(storedData) : []
    infoContent.push(obj)
    localStorage.setItem('userInfo', JSON.stringify(infoContent))
};



let btn = document.getElementById('btn')
if (btn) {
    btn.onclick = (e) => {
        e.preventDefault()
        signupValidation()
        // alert('working')
    }
}

function signIn() {
    // let SignInEmail = document.getElementById('SignInEmail')
    // let signInPass = document.getElementById('signInPass')
    let signIn = document.querySelectorAll(".signIn")
    for (let i = 0; i < signIn.length; i++) {
        if (signIn[i].value == "" || signIn[i].value == null) {
            signIn[i].nextElementSibling.innerHTML = signIn[i].previousElementSibling.innerHTML + " is required"
        } else {
            signIn[i].nextElementSibling.innerHTML = ""
        }
    };
}




document.querySelector('#SignInBtn').onclick = () => {
    let SignInEmail = document.getElementById('SignInEmail')
    let signInPass = document.getElementById('signInPass')
    let storedData = localStorage.getItem("userInfo" )
    let store=JSON.parse(storedData)
    let getUser = store.find((user) => {
        return user.Email == SignInEmail.value && user.password == signInPass.value
    })
    console.log(getUser)

    // console.log(getUser)

    if (getUser) {
        alert('login Successful')
    } else alert('invalid Email or Password')


    // alert('working')
    signIn()

}

// let SignInBtn = document.getElementById('SignInBtn')
// SignInBtn.addEventListener('çlick', function(){
//     alert('working')
// })

// document.addEventListener('DOMContentLoaded', () => {
//     let storedData = localStorage.getItem('userInfo')
//     let infoContent = storedData ? JSON.parse(storedData) : []
// console.log(infoContent)
// })