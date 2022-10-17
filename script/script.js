
window.addEventListener('click', ({
    target
}) => {
    const isClickedOnPopup = target.closest('.menu') !== null || target.closest('.burger') !== null;

    if (!isClickedOnPopup) {
        const popup = document.querySelector('.menu');
        if (popup.classList.contains('animate')) {
            popup.classList.remove('animate');
            document.querySelector('.burger span').classList.remove('active');
            document.querySelector('.menu__list').classList.remove('active');
            document.querySelector('.menu__list').classList.remove('flex');
        }
    }
});


document.querySelector('.burger').addEventListener('click', function (active) {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('animate');
    document.querySelector('.menu__list').classList.toggle('flex');

});

