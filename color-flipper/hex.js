const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

const backgroundColor = () => {
    return hex[Math.floor(Math.random() * hex.length)]
}; 

btn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i=0; i<6; i++) {
        hexColor += backgroundColor(); 
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
