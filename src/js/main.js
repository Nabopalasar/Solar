
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.nav__btn');
    var menu = document.querySelector('.nav__list');
  
    toggleButton.addEventListener('click', function() {
      // Переключение видимости меню при клике
      if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    });
  });