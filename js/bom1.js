const btn = document.querySelector('#login')
const email = document.querySelector('#email')
const password = document.querySelector('#password')


let value1 = password;
let value2 = email;
console.log(btn)


btn.addEventListener('click', function(event){
    event.preventDefault()
    console.log(value1.value)
    console.log(value2.value)
     setTimeout(function(){ open(event.target.href = 'file:///C:/Frontend_pr/2022/JS_hillel_spinner/js_spinner/page/indexSecond.html', '_blank')}, 2000);
    btn.style.display = 'none'
    email.style.display = 'none'
    password.style.display = 'none'
    // document.querySelectorAll('input').style.display = 'none';
    let variable  = setTimeout(document.querySelector('.spinner').style.display = 'block', 0)
    clearTimeout(variable)
    // let timer =
    // clearTimeout(timer)
})




// 