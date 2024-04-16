import image from '../img/goblin.png';

/*document.addEventListener("DOMContentLoaded", function() {
    let gameField = document.querySelector('.game-field');
    let character = document.createElement('img');
    character.setAttribute('src', image);
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
});*/

document.addEventListener("DOMContentLoaded", function() {
    let gameField = document.querySelector('.game-field');
    let scoreDisplay = document.querySelector('.score');
    let missesDisplay = document.querySelector('.misses');

    let character = document.createElement('img');
    character.setAttribute('src', image);
    character.style.position = 'absolute';
    character.style.left = '0';
    character.style.top = '0';
    gameField.appendChild(character);

    let score = 0;
    let missedGoblins = 0;

    function moveCharacter() {
        const left = Math.floor(Math.random() * 4) * 25;
        const top = Math.floor(Math.random() * 4) * 25;

        character.style.left = left + '%';
        character.style.top = top + '%';
    }

    function resetGame() {
        score = 0;
        missedGoblins = 0;
        scoreDisplay.textContent = 'Поймано: 0';
        missesDisplay.textContent = 'Пропущено: 0';
    }

    setInterval(moveCharacter, 1000);

    gameField.addEventListener('click', function(event) {
        if (event.target === character) {
            score++;
            scoreDisplay.textContent = 'Поймано: ' + score;
            moveCharacter();

            if (score >= 5) {
                alert('Игра завершена. Вы набрали ' + score + ' баллов!');
                resetGame();
            }
        } else {
            missedGoblins++;
            missesDisplay.textContent = 'Пропущено: ' + missedGoblins;
            if (missedGoblins >= 5) {
                alert('Игра завершена. Вы пропустили слишком много гоблинов!');
                resetGame();
            }
        }
    });
});




