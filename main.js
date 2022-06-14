document.querySelector('button').addEventListener('click',checkAge)
const p = document.querySelector('p')
function checkAge(){
    let age = Number(document.querySelector('input').value)
    if (age < 16){
        p.innerText = 'daaang. You cannot drive'
    }else if (age < 18){
        p.innerText= 'Oooof. You cant hate form outside the club, cause you cant even get in! hahaha'
    }else if (age < 21){
        p.innerText = 'Yikes. You cant drink'
    }else if (age < 25){
        p.innerText = 'Hmm. You cant rent cars affordably'
    }else if (age < 30){
        p.innerText = 'Heh. You cant rent fancy cars affordably'
    }else{
        p.innerText = 'Bruh, You have nothing to look forward to'
    }
}