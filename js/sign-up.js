const pwd = document.getElementById('pwd')
const cpwd = document.getElementById('cpwd')
const signBtn = document.getElementById('signBtn')

let pwdValue
let cpwdValue

signBtn.disabled = true

function validatePwd(val1, val2) {
    if ((val1 == val2) && val1 != '') {
        signBtn.disabled = false
    } else {
        signBtn.disabled = true
    }
}

pwd.addEventListener('keyup', (e) => {
    pwdValue = e.target.value
    validatePwd(pwdValue, cpwdValue)
})

cpwd.addEventListener('keyup', (e) => {
    cpwdValue = e.target.value
    validatePwd(pwdValue, cpwdValue)
})