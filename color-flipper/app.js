const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

const backgroundColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

btn.addEventListener('click', () => {
    color.textContent = backgroundColor();
    document.body.style.backgroundColor = backgroundColor();
});