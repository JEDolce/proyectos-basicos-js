// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const links = document.querySelector('.links');
const btn = document.querySelector('.nav-toggle');

btn.addEventListener('click', () => {
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links')
    // }

    links.classList.toggle('show-links');       // + facil
});


