// OPCION 1 = using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', () => {
        question.classList.toggle('show-text');

        // funcionalidad para que cuando se abre una respuesta,
        // se cierren las que estan abiertas
        questions.forEach((article) => {
            if(article !== question) {
                article.classList.remove('show-text');
            };
        });
    });
});


// OPCION 2 = traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const element = e.currentTarget.parentElement.parentElement;
//         element.classList.toggle('show-text')
//     });
// });




