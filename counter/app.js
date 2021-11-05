const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');

let counter = 0

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            counter--;
        } else if (styles.contains('increase')) {
            counter++;
        } else {
            counter = 0;
        }
        if (counter < 0) {
            value.style.color = 'red';
        }
        if (counter > 0) {
            value.style.color = 'green';
        }
        if (counter === 0) {
            value.style.color = 'black';
        }
        value.textContent = counter; 
    })
})

/*
btnDecrease.addEventListener('click', () => {
    counter--;
    value.textContent = counter;   
    if (counter < 0) {
    value.style.color = 'red';
    }
})

btnIncrease.addEventListener('click', () => {
    counter++;
    value.textContent = counter;  
    if (counter > 0) {
    value.style.color = 'green';
    }  
})

btnReset.addEventListener('click', () => {
    counter = 0; 
    value.textContent = counter; 
    value.style.color = 'black';   
})
*/




