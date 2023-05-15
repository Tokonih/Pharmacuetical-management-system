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


    if (!firstname.value || !lastname.value || !email.value || !password.value || !gender.value){
        return
    }else{
        alert('Sign up Successful')
    }

    userInfo = []

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
    localStorage.setItem ('userInfo', JSON.stringify (infoContent))
};



document.getElementById('btn').onclick = (e) => {
    e.preventDefault()
    signupValidation()
    // alert('working')
}

// document.addEventListener('DOMContentLoaded', () => {
//     let storedData = localStorage.getItem('userInfo')
//     let infoContent = storedData ? JSON.parse(storedData) : []
// console.log(infoContent)
// })