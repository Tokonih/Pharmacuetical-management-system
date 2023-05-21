


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
        alert('Sign Up Successful')
        window.location.href = 'signIn.html'
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


let SignInBtn = document.getElementById('SignInBtn')
if (SignInBtn) {
    SignInBtn.onclick = () => {
        let SignInEmail = document.getElementById('SignInEmail')
        let signInPass = document.getElementById('signInPass')
        let storedData = localStorage.getItem("userInfo")
        let store = JSON.parse(storedData)
        let getUser = store.find((user) => {
            return user.Email == SignInEmail.value && user.password == signInPass.value
        })
        console.log(getUser)

        // console.log(getUser)

        if (getUser) {
            window.location.href = "main.html"
            // alert('login Successful')
        } else alert('invalid Email or Password')


        // alert('working')
        signIn()
    }
}

// let sidemenu = document.getElementById('sidemenu')
// let sidebar = document.getElementById('sidebar')
// if (sidebar){
//     sidebar.onclick = () => {
//         alert('working')
//         if(sidebar.style.display === "none"){
//             sidebar.style.display = "block"
//         }else{
//             sidebar.style.display = "none"
//         }
//         alert('working')
//     }
// }

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}



// let time = document.getElementById('time')
// let date = document.getElementById('date')
// let textarea = document.getElementById('textarea')
// let book = document.getElementById('book')


