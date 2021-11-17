var heart = document.querySelectorAll(".heart--js")
console.log(heart)

heart[1].addEventListener('click', function() {
    heart[1].classList.toggle('tym')
})
heart[2].addEventListener('click', function() {
    heart[2].classList.toggle('tym')
})
heart[3].addEventListener('click', function() {
    heart[3].classList.toggle('tym')
})
heart[0].addEventListener('click', function() {
        heart[0].classList.toggle('tym')
    })
    // for(var i=0;i<heart.length ; i++){
    //     heart[i].addEventListener('click',function(event){
    //         event.target
    //         console.log(event.target)})
    //     console.log(1)    
    // }
    // var navFull=document.querySelector('nav-right')
var openNav = document.querySelector('.nav--right')
var iconBar = document.querySelector('.icon--bar')
console.log(iconBar)
iconBar.onclick = function() {
    openNav.classList.add('nav--child--open')
}

openNav.onclick = function() {
    openNav.classList.remove('nav--child--open')
}
var back = document.querySelector('.nav__child')
back.addEventListener('click', function(event) {
    event.stopPropagation()
})

var inputName = document.getElementById("input--name")
console.log(2)