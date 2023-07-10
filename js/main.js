function contagem(total, elemento){
    let numeros = new Array();
    for(i = 1; i <= total; i++){
        numeros.push(i)
    }

    numeros.forEach((numero, i) => {
        setTimeout(() => {
            elemento.innerHTML = `${numero}%`;
        }, 120 * i )
    })
}

let elemento1 = document.getElementById('conta1')
let elemento2 = document.getElementById('conta2')
let elemento3 = document.getElementById('conta3')
contagem(43,elemento1)
contagem(37,elemento2)
contagem(20,elemento3)


/*Menu dropdown */
function drop(){
    menu.classList.toggle('menu-nav')
    menu.classList.toggle('menu-hidden')
}

let menu = document.getElementById('nav-menu')

let btnMenu = document.getElementById('menu-click')
btnMenu.addEventListener('click', drop)


/*Animação scroll */
const target = document.querySelectorAll('[data-anime]')

const animationClass = 'animate'

function animScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

    target.forEach(function(element){
       if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
            
        } else {
            element.classList.remove(animationClass)
        }
    })

    target.forEach(function(element){
        console.log(element.offSetTop)
    })
}

animScroll();

if(target.length){

    window.addEventListener('scroll', function(){
        animScroll();
    })
}



