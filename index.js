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

let time = document.getElementById('time')
let date = document.getElementById('date')
let textarea = document.getElementById('textarea')
let book = document.getElementById('book')

function doctor() {
    const setMeeting = new Promise((resolve, reject) => {
        let nath = {
            Title: 'Doctor Appointment',
            Doctor: "Doctor Nath",
            time: time.value,
            date: date.value,
            textarea: textarea.value
        }

        let Aisha = {
            Title: 'Doctor Appointment',
            Doctor: "Doctor Aisha",
            time: time.value,
            date: date.value,
            textarea: textarea.value
        }

        let Gerald = {
            Title: 'Doctor Appointment',
            Doctor: "Doctor Gerald",
            time: time.value,
            date: date.value,
            textarea: textarea.value
        };

        if (time.value == 7 || time.value < 9) {
            resolve(nath)
        } else {
            reject('sorry doctor not avaliable')
        }

        if (time.value == 9 || time.value < 13) {
            resolve(Aisha)
        } else {
            reject('sorry doctor not avaliable')
        }

        // if (time.value == 7 || time.value < 9) {
        //     resolve(Gerald)
        // } else {
        //     reject('sorry doctor not avaliable')
        // }
    });

    if(!time.value || !date.value){
        alert('please fill the form to book an appointment')
        return
    }

    setMeeting.then((result) => {
        let inVoice = document.getElementById('inVoice');
        let output = `
        <div>
        <h2> ${result.Title}</h2>
        <h3>Doctor</h3>
        <p> ${result.Doctor}<p/>
        <h3>Time</h3>
        <p>${result.time}<p/>
        <h3>Date</h3>
        <p>${result.date}<p/>
        <h3>Message</h3>
        <p>${result.textarea}<p/>
    </div>
        `
        inVoice.innerHTML =output
    }).catch((error) => {
        inVoice.innerHTML = error
    })
}

if (book) {
    book.onclick = () => {
        doctor()
    }
}

// document.querySelector('#SignInBtn').onclick = () => {
//     let SignInEmail = document.getElementById('SignInEmail')
//     let signInPass = document.getElementById('signInPass')
//     let storedData = localStorage.getItem("userInfo" )
//     let store=JSON.parse(storedData)
//     let getUser = store.find((user) => {
//         return user.Email == SignInEmail.value && user.password == signInPass.value
//     })
//     console.log(getUser)

//     // console.log(getUser)

//     if (getUser) {
//         window.location.href = "main.html"
//         // alert('login Successful')
//     } else alert('invalid Email or Password')


//     // alert('working')
//     signIn()

// }

// let SignInBtn = document.getElementById('SignInBtn')
// SignInBtn.addEventListener('çlick', function(){
//     alert('working')
// })

// document.addEventListener('DOMContentLoaded', () => {
//     let storedData = localStorage.getItem('userInfo')
//     let infoContent = storedData ? JSON.parse(storedData) : []
// console.log(infoContent)
// })