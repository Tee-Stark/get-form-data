var submit = document.getElementById('submit');
var password = document.getElementById('password');
var email = document.getElementById('email');
var next = document.getElementById('next')

submit.style.display ='none'
password.style.display ='none'


next.addEventListener('click', function(){
    submit.style.display ='block'
    password.style.display ='block'
    next.style.display ='none'
    email.style.display ='none'
})