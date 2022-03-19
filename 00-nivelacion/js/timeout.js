const evaluar = () =>{
    const edad = prompt('Cual es tu edad man?')
    if (edad < 18){
        alert('eres menor');
        return;
    }
    alert('sos mayor, podes entrar');
};

// setTimeout(() => {}, 2000)
// evaluar();

setTimeout(evaluar, 2000)