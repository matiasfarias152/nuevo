var contraste = ()=>{
    let btn = document.getElementById('btnContraste');
    

    if(btn.value == '0'){
        let elements = document.getElementsByClassName('blanco');
        elements[0].classList.add('negro');
        elements[0].classList.remove('blanco');
        btn.value = '1';
    }
    else if(btn.value == '1'){
        let elements = document.getElementsByClassName('negro');
        elements[0].classList.add('blanco');
        elements[0].classList.remove('negro');
        btn.value = '0';
    }

}

var fuente = ()=>{
    let btn = document.getElementById('btnFuente');
    if(btn.value == '0'){
        let elements = document.getElementsByClassName('small-letras');
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          element.classList.add('medium-letras')
          element.classList.remove('small-letras')
           
        }
        btn.value = '1';


    }
    else if (btn.value == '1'){
        let elements = document.getElementsByClassName('medium-letras');
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          element.classList.add('large-letras')
          element.classList.remove('medium-letras')
           
        }
        btn.value = '2';
    }
    else if (btn.value == '2'){
        let elements = document.getElementsByClassName('large-letras');
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          element.classList.add('small-letras')
          element.classList.remove('large-letras')
           
        }
       
        btn.value = '0'
    }
}

document.getElementById('btnContraste').addEventListener('click',contraste)
document.getElementById('btnFuente').addEventListener('click',fuente)