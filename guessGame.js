let correctNumber = getRandomNumber();
let currentStreak = 0;
let highestStreak = 0;

const mainAns = document.querySelector('.mainAns');
const mainComment = document.querySelector('.mainComment');
const streakLine = document.querySelector('.streakLine');
const highestStreakDisplay = document.querySelector('.highestStreak');
const buttons = document.querySelectorAll('.opts');

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function resetGame() {
    correctNumber = getRandomNumber();
    mainAns.textContent = '';
    mainComment.textContent = 'Guess the number!';
    updateOptions();
}

function updateOptions() {
    const options = [correctNumber];
    while (options.length < 3) {
        const randomOption = getRandomNumber();
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }
    options.sort(() => Math.random() - 0.5);

    buttons.forEach((button, index) => {
        button.textContent = options[index];
    });
}

function handleGuess(event) {
    const userGuess = parseInt(event.target.textContent);
    if (userGuess === correctNumber) {
        mainAns.textContent = '🎉';
        mainComment.textContent = 'Correct! You guessed the number!';
        currentStreak++;
        if (currentStreak > highestStreak) {
            highestStreak = currentStreak;
        }
    } else {
        mainAns.textContent = '❌';
        mainComment.textContent = `Wrong! The correct number was ${correctNumber}.`;
        currentStreak = 0;
    }

    streakLine.textContent = `Current streak: ${currentStreak}`;
    highestStreakDisplay.textContent = `Highest Streak: ${highestStreak}`;

    setTimeout(resetGame, 2000);
}

buttons.forEach(button => {
    button.addEventListener('click', handleGuess);
});

const darkModeButton = document.querySelector('.darkmode');
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.style.backgroundColor = document.body.classList.contains('dark') ? '#121212' : '#fefae0';
    document.body.style.color = document.body.classList.contains('dark') ? '#fefae0' : '#283618';
});

resetGame();
