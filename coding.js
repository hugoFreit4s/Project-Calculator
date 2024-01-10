let display = document.querySelector('.display');

function addToDisplay(value){ /**Método para adicionar a tela os valores clicados/digitados */
    display.innerHTML += value;
}

function clearDisplay(){ /**Método para dar clear no display, acionada pelo botão DEL */
    display.innerHTML = '';
}

function clearLast(){ /**Método para apagar apenas o último número */
    display.innerHTML = display.innerHTML.slice(0, -1);
}

function calculate(){ /**Método para realizar os cálculos por meios da função eval */
    try {
        display.innerHTML = eval(display.innerHTML)
    } catch (error) {
        display.innerHTML = 'Operação Inválida!'
        setTimeout(() => {
            display.innerHTML = ''
        }, 400);
    }
}

document.addEventListener('keydown', function(event) { /**EventListener que permite que o usuário insira os valores por meio do teclado também */
    if (/^[0-9/*+-\.\^%]$/.test(event.key)) {
        addToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Backspace') {
        clearLast();
    }
});