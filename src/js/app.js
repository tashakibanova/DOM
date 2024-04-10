//import image from '../img/goblin.png';

document.addEventListener("DOMContentLoaded", function() {
    const gameField = document.querySelector('.game-field');
    const character = document.createElement('img');
    character.setAttribute('src', '../img/goblin.png');
    //character.setAttribute('src', image);
    character.style.position = 'absolute';
    character.style.left = '0';
    character.style.top = '0';
    gameField.appendChild(character);
    
    
    function moveCharacter() {

        const left = Math.floor(Math.random()  *  4)  *  25; // Генерируем случайное положение по горизонтали
        const top = Math.floor(Math.random()  *  4)  *  25;  // Генерируем случайное положение по вертикали

        character.style.left = left + '%';
        character.style.top = top + '%';
    }

    setInterval(moveCharacter, 1000); // Перемещение каждую секунду
});

