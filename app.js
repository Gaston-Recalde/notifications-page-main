const mark = document.querySelector('.header__p');
const bola = document.querySelectorAll('.p__bol');
const noti = document.querySelector('.header__noti');

mark.addEventListener('click', () => {
    bola.forEach((el) => el.style.display = 'none');
    noti.innerHTML = 0;
});