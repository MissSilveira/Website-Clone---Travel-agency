const elements = document.querySelectorAll('.conta')
let funcaoExecutada = false;

const verificaPosicao =() =>{
    let windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    elements.forEach((element)=>{
        if((windowTop) > element.offsetTop){
            if(!funcaoExecutada){
                contagem(43 , elements[0])
                contagem(37 , elements[1])
                contagem(20 , elements[2])   
            }
        }
    })
}

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
    funcaoExecutada = true
}

function animScroll(){
    let windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

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
}

if(target.length){
    window.addEventListener('scroll', function(){
        animScroll();
        verificaPosicao()
    })
}



