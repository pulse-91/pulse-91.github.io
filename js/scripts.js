
const checkbox = document.getElementById('burgerCheckbox');
const burger_menu = document.querySelector('.navigation-menu');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        burger_menu.classList.add('checked');
    } else {
        burger_menu.classList.remove('checked');
    }
});