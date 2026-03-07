// Элементы DOM
const secretWordInput = document.getElementById('secret-word');
const setWordBtn = document.getElementById('set-word-btn');
const letterInput = document.getElementById('letter-input');
const guessLetterBtn = document.getElementById('guess-letter-btn');
const wordDisplay = document.getElementById('word-display');
const gameStatus = document.getElementById('game-status');
const mistakesElement = document.getElementById('mistakes');
const guessedLettersElement = document.getElementById('guessed-letters');
const maxMistakesElement = document.getElementById('max-mistakes');
const hangmanStage = document.getElementById('hangman-stage');
const hangmanDesc = document.getElementById('hangman-desc');

// Игровые переменные
let secretWord = '';
let guessedLetters = [];
let mistakes = 0;
const maxMistakes = 6;
let gameActive = false;
let gameWon = false;

// Стадии "виселицы" в киберпанк-стиле
const hangmanStages = [
    {symbol: "[_СИСТЕМА_]", desc: "Система защиты активна"},
    {symbol: "[_СИСТЕМА_]\n   О", desc: "Обнаружено внешнее вмешательство"},
    {symbol: "[_СИСТЕМА_]\n   О\n   |", desc: "Активация протокола защиты"},
    {symbol: "[_СИСТЕМА_]\n   О\n  /|", desc: "Усиление защиты... 50%"},
    {symbol: "[_СИСТЕМА_]\n   О\n  /|\\", desc: "Усиление защиты... 75%"},
    {symbol: "[_СИСТЕМА_]\n   О\n  /|\\\n  /", desc: "Критический уровень защиты"},
    {symbol: "[_СИСТЕМА_]\n   О\n  /|\\\n  / \\", desc: "СИСТЕМА ЗАБЛОКИРОВАНА!"}
];

// Русский алфавит для проверки ввода
const russianAlphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

// Установка кодового слова
function setSecretWord() {
    const word = secretWordInput.value.toUpperCase().trim();
    
    // Проверка на русские буквы
    const russianRegex = /^[А-ЯЁ]+$/;
    if (!russianRegex.test(word)) {
        showAlert('Пожалуйста, используйте только русские буквы!', 'error');
        secretWordInput.focus();
        return;
    }
    
    if (word.length < 3 || word.length > 15) {
        showAlert('Слово должно быть от 3 до 15 букв!', 'error');
        secretWordInput.focus();
        return;
    }
    
    secretWord = word;
    guessedLetters = [];
    mistakes = 0;
    gameActive = true;
    gameWon = false;
    
    // Очистка и обновление интерфейса
    secretWordInput.value = '';
    letterInput.disabled = false;
    guessLetterBtn.disabled = false;
    letterInput.focus();
    
    // Обновление отображения
    updateWordDisplay();
    updateGameStatus();
    updateHangman();
    
    // Сообщение о начале игры
    gameStatus.textContent = `Игра началась! Слово из ${secretWord.length} букв. У вас ${maxMistakes} попыток.`;
    gameStatus.className = 'game-status status-active';
    
    // Эффект для статуса
    gameStatus.style.animation = 'none';
    setTimeout(() => {
        gameStatus.style.animation = '';
    }, 10);
    
    // Обновление счетчиков
    mistakesElement.textContent = mistakes;
    maxMistakesElement.textContent = maxMistakes;
    guessedLettersElement.textContent = 0;
    
    // Скрываем слово для угадывающего
    const hiddenWordElement = document.createElement('div');
    hiddenWordElement.className = 'hidden-word';
    hiddenWordElement.textContent = `Кодовое слово установлено (${secretWord.length} символов)`;
    wordDisplay.appendChild(hiddenWordElement);
    
    // Показываем подсказку только на 3 секунды
    setTimeout(() => {
        if (wordDisplay.contains(hiddenWordElement)) {
            wordDisplay.removeChild(hiddenWordElement);
        }
    }, 3000);
    
    showAlert('Кодовое слово установлено! Можете начинать взлом.', 'success');
}

// Обновление отображения слова
function updateWordDisplay() {
    wordDisplay.innerHTML = '';
    
    for (let letter of secretWord) {
        const letterElement = document.createElement('div');
        letterElement.className = 'letter';
        
        if (guessedLetters.includes(letter)) {
            letterElement.textContent = letter;
            // Анимация для угаданной буквы
            letterElement.style.animation = 'none';
            setTimeout(() => {
                letterElement.style.animation = 'win-glow 0.5s';
            }, 10);
        } else {
            letterElement.textContent = '_';
        }
        
        wordDisplay.appendChild(letterElement);
    }
}

// Обновление статуса игры
function updateGameStatus() {
    // Проверка победы
    const wordGuessed = secretWord.split('').every(letter => guessedLetters.includes(letter));
    
    if (wordGuessed) {
        gameWon = true;
        gameActive = false;
        gameStatus.textContent = 'ВЗЛОМ УСПЕШЕН! Система взломана!';
        gameStatus.className = 'game-status status-win';
        
        // Показываем загаданное слово
        const wordReveal = document.createElement('div');
        wordReveal.className = 'hidden-word';
        wordReveal.textContent = `Кодовое слово: ${secretWord}`;
        wordReveal.style.color = 'var(--success)';
        wordDisplay.appendChild(wordReveal);
        
        // Воспроизведение звука победы
        playSuccessSound();
        showAlert('Поздравляем! Вы успешно взломали систему!', 'success');
        return;
    }
    
    // Проверка поражения
    if (mistakes >= maxMistakes) {
        gameActive = false;
        gameStatus.textContent = 'СИСТЕМА ЗАБЛОКИРОВАНА! Взлом не удался.';
        gameStatus.className = 'game-status status-lose';
        
        // Показываем загаданное слово
        const wordReveal = document.createElement('div');
        wordReveal.className = 'hidden-word';
        wordReveal.textContent = `Кодовое слово: ${secretWord}`;
        wordReveal.style.color = 'var(--error)';
        wordDisplay.appendChild(wordReveal);
        
        showAlert('Система заблокирована! Попробуйте еще раз.', 'error');
        return;
    }
    
    // Обновление счетчика угаданных букв
    const guessedCount = secretWord.split('').filter(letter => guessedLetters.includes(letter)).length;
    guessedLettersElement.textContent = guessedCount;
}

// Обновление "виселицы" в киберпанк-стиле
function updateHangman() {
    const stageIndex = Math.min(mistakes, hangmanStages.length - 1);
    hangmanStage.textContent = hangmanStages[stageIndex].symbol;
    hangmanDesc.textContent = hangmanStages[stageIndex].desc;
    
    // Анимация для изменения стадии
    hangmanStage.style.animation = 'none';
    hangmanDesc.style.animation = 'none';
    setTimeout(() => {
        hangmanStage.style.animation = 'win-glow 0.7s';
        hangmanDesc.style.animation = 'win-glow 0.7s';
    }, 10);
}

// Попытка угадать букву
function guessLetter() {
    if (!gameActive || gameWon || mistakes >= maxMistakes) return;
    
    const letter = letterInput.value.toUpperCase().trim();
    letterInput.value = '';
    
    // Проверка ввода
    if (!letter || !russianAlphabet.includes(letter)) {
        showAlert('Пожалуйста, введите русскую букву!', 'error');
        return;
    }
    
    // Проверка, не угадывалась ли буква ранее
    if (guessedLetters.includes(letter)) {
        showAlert('Вы уже пробовали эту букву!', 'error');
        return;
    }
    
    // Добавляем букву в список угаданных
    guessedLetters.push(letter);
    
    // Проверка, есть ли буква в слове
    if (!secretWord.includes(letter)) {
        mistakes++;
        mistakesElement.textContent = mistakes;
        gameStatus.textContent = `Буквы "${letter}" нет в кодовом слове. Ошибок: ${mistakes}/${maxMistakes}`;
        gameStatus.className = 'game-status status-active';
        
        // Эффект ошибки
        gameStatus.style.animation = 'none';
        setTimeout(() => {
            gameStatus.style.animation = 'error-pulse 0.5s';
        }, 10);
        
        // Звук ошибки
        playErrorSound();
    } else {
        const count = secretWord.split('').filter(l => l === letter).length;
        gameStatus.textContent = `Есть! Буква "${letter}" встречается ${count} раз. Ошибок: ${mistakes}/${maxMistakes}`;
        gameStatus.className = 'game-status status-active';
        
        // Эффект успеха
        gameStatus.style.animation = 'none';
        setTimeout(() => {
            gameStatus.style.animation = 'win-glow 0.7s';
        }, 10);
        
        // Звук успеха
        playKeySound();
    }
    
    // Обновление интерфейса
    updateWordDisplay();
    updateGameStatus();
    updateHangman();
    
    // Фокус на поле ввода
    letterInput.focus();
}

// Сброс игры
function resetGame() {
    secretWord = '';
    guessedLetters = [];
    mistakes = 0;
    gameActive = false;
    gameWon = false;
    
    secretWordInput.value = '';
    letterInput.value = '';
    letterInput.disabled = true;
    guessLetterBtn.disabled = true;
    
    wordDisplay.innerHTML = '';
    gameStatus.textContent = 'Ожидание установки кодового слова...';
    gameStatus.className = 'game-status status-waiting';
    
    mistakesElement.textContent = '0';
    guessedLettersElement.textContent = '0';
    
    updateHangman();
    
    secretWordInput.focus();
    showAlert('Игра сброшена. Задайте новое кодовое слово.', 'info');
}

// Показать уведомление
function showAlert(message, type) {
    // Удаляем старые уведомления
    const oldAlert = document.querySelector('.custom-alert');
    if (oldAlert) {
        oldAlert.remove();
    }
    
    // Создаем новое уведомление
    const alert = document.createElement('div');
    alert.className = `custom-alert alert-${type}`;
    alert.textContent = message;
    
    // Стили для уведомления
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 6px;
        font-weight: bold;
        z-index: 10000;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
        max-width: 300px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    `;
    
    if (type === 'error') {
        alert.style.backgroundColor = 'var(--error)';
        alert.style.color = 'white';
        alert.style.border = '1px solid #ff3366';
    } else if (type === 'success') {
        alert.style.backgroundColor = 'var(--success)';
        alert.style.color = 'var(--dark)';
        alert.style.border = '1px solid #00cc7a';
    } else {
        alert.style.backgroundColor = 'var(--primary)';
        alert.style.color = 'var(--dark)';
        alert.style.border = '1px solid #00ccff';
    }
    
    document.body.appendChild(alert);
    
    // Удаляем уведомление через 3 секунды
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 3000);
}

// Создаем стили для анимации уведомлений
const alertStyles = document.createElement('style');
alertStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(alertStyles);

// Звуковые эффекты
function playKeySound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        console.log("Web Audio API не доступен");
    }
}

function playErrorSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 300;
        oscillator.type = 'sawtooth';
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        console.log("Web Audio API не доступен");
    }
}

function playSuccessSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        const notes = [523.25, 659.25, 783.99, 1046.50];
        let time = audioContext.currentTime;
        
        notes.forEach((frequency, index) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0, time);
            gainNode.gain.linearRampToValueAtTime(0.15, time + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.01, time + 0.3);
            
            oscillator.start(time);
            oscillator.stop(time + 0.3);
            
            time += 0.1;
        });
    } catch (e) {
        console.log("Web Audio API не доступен");
    }
}

// Инициализация игры
function initGame() {
    // Обработчики событий
    setWordBtn.addEventListener('click', setSecretWord);
    
    secretWordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            setSecretWord();
        }
    });
    
    guessLetterBtn.addEventListener('click', guessLetter);
    
    letterInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            guessLetter();
        }
    });
    
    // Ограничение ввода только русских букв
    secretWordInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^А-Яа-яЁё]/g, '');
        this.value = this.value.toUpperCase();
    });
    
    letterInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^А-Яа-яЁё]/g, '');
        this.value = this.value.toUpperCase();
        if (this.value.length > 1) {
            this.value = this.value.charAt(0);
        }
    });
    
    // Кнопка сброса игры
    const resetBtn = document.createElement('button');
    resetBtn.className = 'btn';
    resetBtn.textContent = 'СБРОСИТЬ ИГРУ';
    resetBtn.style.marginTop = '20px';
    resetBtn.style.backgroundColor = 'var(--error)';
    resetBtn.addEventListener('click', resetGame);
    
    document.querySelector('.guessing-section').appendChild(resetBtn);
    
    // Добавляем эффект при загрузке
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Фокус на поле ввода слова при загрузке
    secretWordInput.focus();
}

// Запуск игры при загрузке страницы
window.addEventListener('DOMContentLoaded', initGame);

// Добавляем плавное появление страницы
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';