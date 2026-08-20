const translations = {
    ru: {
        title: "ВИСЕЛИЦА",
        description: "Взлом системы безопасности... Один игрок задает кодовое слово, другой пытается его взломать.",
        setWordTitle: "ЗАДАТЬ КОДОВОЕ СЛОВО",
        guessTitle: "ВЗЛОМ СИСТЕМЫ",
        wordLabel: "Введите слово:",
        letterLabel: "Введите букву:",
        setWordBtn: "УСТАНОВИТЬ КОДОВОЕ СЛОВО",
        guessBtn: "ПРОВЕРИТЬ БУКВУ",
        resetBtn: "СБРОСИТЬ ИГРУ",
        langHint: "Поддерживаются русские, английские и немецкие буквы",
        placeholder: "например, Ramondrole",
        rulesTitle: "ПРАВИЛА ВЗЛОМА СИСТЕМЫ:",
        rule1: "Первый игрок задает кодовое слово (русские, английские или немецкие буквы)",
        rule2: "Второй игрок пытается угадать слово, называя буквы",
        rule3: "При каждой ошибке система усиливает защиту (визуализируется в левой панели)",
        rule4: "Максимум 6 ошибок, иначе система блокируется (поражение)",
        rule5: "Если слово угадано до 6 ошибок - взлом успешен (победа)",
        waiting: "Ожидание установки кодового слова...",
        win: "ВЗЛОМ УСПЕШЕН! Система взломана!",
        lose: "СИСТЕМА ЗАБЛОКИРОВАНА! Взлом не удался.",
        gameStart: "Игра началась! {lang} слово из {len} букв. У вас {max} попыток.",
        letterNotFound: "Буквы \"{letter}\" нет в кодовом слове. Ошибок: {mistakes}/{max}",
        letterFound: "Есть! Буква \"{letter}\" встречается {count} раз. Ошибок: {mistakes}/{max}",
        alreadyGuessed: "Вы уже пробовали эту букву!",
        invalidLetter: "Введите букву {lang} алфавита!",
        enterLetter: "Введите букву!",
        enterWord: "Пожалуйста, введите слово!",
        invalidChars: "Используйте только буквы одного языка (русские, английские или немецкие с Ä, Ö, Ü)!",
        wordLength: "Слово должно быть от 3 до 20 букв!",
        wordSet: "Кодовое слово установлено! Язык: {lang}",
        gameReset: "Игра сброшена. Задайте новое кодовое слово.",
        winMessage: "Поздравляем! Вы успешно взломали систему!",
        loseMessage: "Система заблокирована! Было загадано слово: {word}",
        codeWord: "Кодовое слово:",
        about: "Обо мне",
        games: "Наши игры",
        functions: "Полезные функции",
        mistakes: "Ошибки:",
        guessed: "Угадано букв:"
    },
    en: {
        title: "HANGMAN",
        description: "Security system breach... One player sets a code word, the other tries to crack it.",
        setWordTitle: "SET CODE WORD",
        guessTitle: "SYSTEM BREACH",
        wordLabel: "Enter word:",
        letterLabel: "Enter letter:",
        setWordBtn: "SET CODE WORD",
        guessBtn: "CHECK LETTER",
        resetBtn: "RESET GAME",
        langHint: "Supports Russian, English and German letters",
        placeholder: "e.g., Ramondrole",
        rulesTitle: "SYSTEM BREACH RULES:",
        rule1: "First player sets a code word (Russian, English or German letters)",
        rule2: "Second player tries to guess the word by naming letters",
        rule3: "Each mistake increases system protection (visualized on the left panel)",
        rule4: "Maximum 6 mistakes, otherwise system locks (defeat)",
        rule5: "If word is guessed within 6 mistakes - breach successful (victory)",
        waiting: "Waiting for code word...",
        win: "BREACH SUCCESSFUL! System hacked!",
        lose: "SYSTEM LOCKED! Breach failed.",
        gameStart: "Game started! {lang} word of {len} letters. You have {max} attempts.",
        letterNotFound: "Letter \"{letter}\" not in code word. Mistakes: {mistakes}/{max}",
        letterFound: "Hit! Letter \"{letter}\" appears {count} times. Mistakes: {mistakes}/{max}",
        alreadyGuessed: "You already tried this letter!",
        invalidLetter: "Enter a {lang} alphabet letter!",
        enterLetter: "Enter a letter!",
        enterWord: "Please enter a word!",
        invalidChars: "Use only letters of one language (Russian, English or German with Ä, Ö, Ü)!",
        wordLength: "Word must be 3 to 20 letters!",
        wordSet: "Code word set! Language: {lang}",
        gameReset: "Game reset. Set a new code word.",
        winMessage: "Congratulations! You successfully hacked the system!",
        loseMessage: "System locked! The word was: {word}",
        codeWord: "Code word:",
        about: "About me",
        games: "Our games",
        functions: "Useful functions",
        mistakes: "Mistakes:",
        guessed: "Letters guessed:"
    },
    de: {
        title: "GALGENMANN",
        description: "Sicherheitssystem-Knacken... Ein Spieler legt ein Codewort fest, der andere versucht es zu knacken.",
        setWordTitle: "CODEWORT FESTLEGEN",
        guessTitle: "SYSTEM-KNACKEN",
        wordLabel: "Wort eingeben:",
        letterLabel: "Buchstabe eingeben:",
        setWordBtn: "CODEWORT FESTLEGEN",
        guessBtn: "BUCHSTABE PRÜFEN",
        resetBtn: "SPIEL ZURÜCKSETZEN",
        langHint: "Unterstützt russische, englische und deutsche Buchstaben",
        placeholder: "z.B., Ramondrole",
        rulesTitle: "SYSTEM-KNACKEN REGELN:",
        rule1: "Erster Spieler legt ein Codewort fest (russische, englische oder deutsche Buchstaben)",
        rule2: "Zweiter Spieler versucht das Wort durch Buchstabenerraten zu knacken",
        rule3: "Jeder Fehler erhöht den Systemschutz (links visualisiert)",
        rule4: "Maximal 6 Fehler, sonst wird das System blockiert (Niederlage)",
        rule5: "Wenn das Wort innerhalb von 6 Fehlern erraten wird - erfolgreicher Knacken (Sieg)",
        waiting: "Warte auf Codewort...",
        win: "KNACKEN ERFOLGREICH! System gehackt!",
        lose: "SYSTEM GESPERRT! Knacken fehlgeschlagen.",
        gameStart: "Spiel gestartet! {lang} Wort mit {len} Buchstaben. Du hast {max} Versuche.",
        letterNotFound: "Buchstabe \"{letter}\" nicht im Codewort. Fehler: {mistakes}/{max}",
        letterFound: "Treffer! Buchstabe \"{letter}\" kommt {count} mal vor. Fehler: {mistakes}/{max}",
        alreadyGuessed: "Diesen Buchstaben hast du schon versucht!",
        invalidLetter: "Gib einen Buchstaben des {lang} Alphabets ein!",
        enterLetter: "Gib einen Buchstaben ein!",
        enterWord: "Bitte gib ein Wort ein!",
        invalidChars: "Verwende nur Buchstaben einer Sprache (Russisch, Englisch oder Deutsch mit Ä, Ö, Ü)!",
        wordLength: "Das Wort muss 3 bis 20 Buchstaben haben!",
        wordSet: "Codewort festgelegt! Sprache: {lang}",
        gameReset: "Spiel zurückgesetzt. Lege ein neues Codewort fest.",
        winMessage: "Glückwunsch! Du hast das System erfolgreich gehackt!",
        loseMessage: "System gesperrt! Das Wort war: {word}",
        codeWord: "Codewort:",
        about: "Über mich",
        games: "Unsere Spiele",
        functions: "Nützliche Funktionen",
        mistakes: "Fehler:",
        guessed: "Buchstaben erraten:"
    }
};

let currentLang = localStorage.getItem('gallows_language') || 'ru';

function t(key, replacements = {}) {
    let text = translations[currentLang]?.[key] || translations.ru[key];
    for (const [k, v] of Object.entries(replacements)) {
        text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    }
    return text;
}

function updateUILanguage() {
    document.getElementById('gameTitle').textContent = t('title');
    document.getElementById('gameDescription').textContent = t('description');
    document.getElementById('setWordTitle').textContent = t('setWordTitle');
    document.getElementById('guessTitle').textContent = t('guessTitle');
    document.getElementById('wordLabel').textContent = t('wordLabel');
    document.getElementById('letterLabel').textContent = t('letterLabel');
    document.getElementById('set-word-btn').textContent = t('setWordBtn');
    document.getElementById('guess-letter-btn').textContent = t('guessBtn');
    document.getElementById('langHint').textContent = t('langHint');
    document.getElementById('rulesTitle').textContent = t('rulesTitle');
    document.getElementById('rule1').textContent = t('rule1');
    document.getElementById('rule2').textContent = t('rule2');
    document.getElementById('rule3').textContent = t('rule3');
    document.getElementById('rule4').textContent = t('rule4');
    document.getElementById('rule5').textContent = t('rule5');
    
    const secretInput = document.getElementById('secret-word');
    if (secretInput) secretInput.placeholder = t('placeholder');
    
    const resetBtn = document.querySelector('.reset-game-btn');
    if (resetBtn) resetBtn.textContent = t('resetBtn');
    
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        const flags = { ru: '🌐 RU', en: '🌐 EN', de: '🌐 DE' };
        langBtn.innerHTML = flags[currentLang];
    }
    
    document.querySelectorAll('.nav-links a').forEach((link, idx) => {
        const keys = ['about', 'games', 'functions'];
        if (idx < keys.length) link.textContent = t(keys[idx]);
    });
    
    if (!gameActive && !secretWord) {
        document.getElementById('game-status').textContent = t('waiting');
        document.getElementById('game-status').className = 'game-status status-waiting';
    }
    
    const mistakesDiv = document.querySelector('.attempts div:first-child');
    if (mistakesDiv && !gameActive && !secretWord) {
        mistakesDiv.innerHTML = t('mistakes') + ' <span id="mistakes">0</span> из <span id="max-mistakes">6</span>';
    } else if (mistakesDiv && gameActive) {
        mistakesDiv.innerHTML = t('mistakes') + ' <span id="mistakes">' + mistakes + '</span> из <span id="max-mistakes">6</span>';
    }
    
    const guessedDiv = document.querySelector('.attempts div:last-child');
    if (guessedDiv && !gameActive && !secretWord) {
        guessedDiv.innerHTML = t('guessed') + ' <span id="guessed-letters">0</span>';
    } else if (guessedDiv && gameActive) {
        const guessedCount = secretWord.split('').filter(letter => guessedLetters.includes(letter)).length;
        guessedDiv.innerHTML = t('guessed') + ' <span id="guessed-letters">' + guessedCount + '</span>';
    }
}

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
const languageBadge = document.getElementById('languageBadge');
const detectedLanguageSpan = document.getElementById('detectedLanguage');

let secretWord = '';
let guessedLetters = [];
let mistakes = 0;
const maxMistakes = 6;
let gameActive = false;
let gameWon = false;
let currentWordLanguage = 'ru';

const alphabets = {
    ru: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
    en: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    de: 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ'
};

const languageNames = {
    ru: { name: '🇷🇺 Русское', hint: 'Введите русские буквы (А-Я, Ё)' },
    en: { name: '🇬🇧 English', hint: 'Enter English letters (A-Z)' },
    de: { name: '🇩🇪 Deutsch', hint: 'Gib deutsche Buchstaben ein (A-Z, Ä, Ö, Ü)' }
};

function detectLanguage(word) {
    const ruRegex = /^[А-ЯЁ]+$/;
    const deRegex = /^[A-ZÄÖÜ]+$/;
    const enRegex = /^[A-Z]+$/;
    
    if (ruRegex.test(word)) return 'ru';
    if (deRegex.test(word)) return 'de';
    if (enRegex.test(word)) return 'en';
    return null;
}

function getAlphabetForLanguage(lang) {
    return alphabets[lang] || alphabets.ru;
}

function setSecretWord() {
    let word = secretWordInput.value.toUpperCase().trim();
    
    if (word.length === 0) {
        showAlert(t('enterWord'), 'error');
        return;
    }
    
    const detectedLang = detectLanguage(word);
    
    if (!detectedLang) {
        showAlert(t('invalidChars'), 'error');
        secretWordInput.focus();
        return;
    }
    
    if (word.length < 3 || word.length > 20) {
        showAlert(t('wordLength'), 'error');
        return;
    }
    
    secretWord = word;
    currentWordLanguage = detectedLang;
    guessedLetters = [];
    mistakes = 0;
    gameActive = true;
    gameWon = false;
    
    secretWordInput.value = '';
    letterInput.disabled = false;
    guessLetterBtn.disabled = false;
    letterInput.focus();
    
    updateWordDisplay();
    updateGameStatus();
    updateHangman();
    
    languageBadge.style.display = 'block';
    detectedLanguageSpan.innerHTML = languageNames[currentWordLanguage].name;
    
    gameStatus.textContent = t('gameStart', {
        lang: languageNames[currentWordLanguage].name,
        len: secretWord.length,
        max: maxMistakes
    });
    gameStatus.className = 'game-status status-active';
    
    mistakesElement.textContent = mistakes;
    maxMistakesElement.textContent = maxMistakes;
    guessedLettersElement.textContent = 0;
    
    const mistakesDiv = document.querySelector('.attempts div:first-child');
    if (mistakesDiv) mistakesDiv.innerHTML = t('mistakes') + ' <span id="mistakes">0</span> из <span id="max-mistakes">6</span>';
    const guessedDiv = document.querySelector('.attempts div:last-child');
    if (guessedDiv) guessedDiv.innerHTML = t('guessed') + ' <span id="guessed-letters">0</span>';
    
    const hintElement = document.querySelector('.input-hint');
    if (hintElement) {
        hintElement.textContent = languageNames[currentWordLanguage].hint;
        hintElement.style.color = '#00ff9d';
        setTimeout(() => {
            hintElement.textContent = t('langHint');
            hintElement.style.color = '#888';
        }, 3000);
    }
    
    showAlert(t('wordSet', { lang: languageNames[currentWordLanguage].name }), 'success');
}

function updateWordDisplay() {
    wordDisplay.innerHTML = '';
    
    for (let letter of secretWord) {
        const letterElement = document.createElement('div');
        letterElement.className = 'letter';
        
        if (guessedLetters.includes(letter)) {
            letterElement.textContent = letter;
        } else {
            letterElement.textContent = '_';
        }
        
        wordDisplay.appendChild(letterElement);
    }
}

function updateGameStatus() {
    const wordGuessed = secretWord.split('').every(letter => guessedLetters.includes(letter));
    
    if (wordGuessed) {
        gameWon = true;
        gameActive = false;
        gameStatus.textContent = t('win');
        gameStatus.className = 'game-status status-win';
        
        const wordReveal = document.createElement('div');
        wordReveal.className = 'hidden-word';
        wordReveal.textContent = `${t('codeWord')} ${secretWord}`;
        wordReveal.style.color = 'var(--neon-green)';
        wordDisplay.appendChild(wordReveal);
        
        playSuccessSound();
        showAlert(t('winMessage'), 'success');
        return;
    }
    
    if (mistakes >= maxMistakes) {
        gameActive = false;
        gameStatus.textContent = t('lose');
        gameStatus.className = 'game-status status-lose';
        
        const wordReveal = document.createElement('div');
        wordReveal.className = 'hidden-word';
        wordReveal.textContent = `${t('codeWord')} ${secretWord}`;
        wordReveal.style.color = '#ff0040';
        wordDisplay.appendChild(wordReveal);
        
        showAlert(t('loseMessage', { word: secretWord }), 'error');
        return;
    }
    
    const guessedCount = secretWord.split('').filter(letter => guessedLetters.includes(letter)).length;
    guessedLettersElement.textContent = guessedCount;
}

const hangmanStages = [
    {symbol: "[СИСТЕМА]", desc: "Система защиты активна"},
    {symbol: "[СИСТЕМА]\n   O", desc: "Обнаружено внешнее вмешательство"},
    {symbol: "[СИСТЕМА]\n   O\n   |", desc: "Активация протокола защиты"},
    {symbol: "[СИСТЕМА]\n   O\n  /|", desc: "Усиление защиты... 50%"},
    {symbol: "[СИСТЕМА]\n   O\n  /|\\", desc: "Усиление защиты... 75%"},
    {symbol: "[СИСТЕМА]\n   O\n  /|\\\n  /", desc: "Критический уровень защиты"},
    {symbol: "[СИСТЕМА]\n   O\n  /|\\\n  / \\", desc: "СИСТЕМА ЗАБЛОКИРОВАНА!"}
];

function updateHangman() {
    const stageIndex = Math.min(mistakes, hangmanStages.length - 1);
    hangmanStage.textContent = hangmanStages[stageIndex].symbol;
    hangmanDesc.textContent = hangmanStages[stageIndex].desc;
}

function guessLetter() {
    if (!gameActive || gameWon || mistakes >= maxMistakes) return;
    
    const letter = letterInput.value.toUpperCase().trim();
    letterInput.value = '';
    
    if (!letter) {
        showAlert(t('enterLetter'), 'error');
        return;
    }
    
    const alphabet = getAlphabetForLanguage(currentWordLanguage);
    if (!alphabet.includes(letter)) {
        const langName = currentWordLanguage === 'ru' ? 'русского' : currentWordLanguage === 'de' ? 'немецкого' : 'английского';
        showAlert(t('invalidLetter', { lang: langName }), 'error');
        return;
    }
    
    if (guessedLetters.includes(letter)) {
        showAlert(t('alreadyGuessed'), 'error');
        return;
    }
    
    guessedLetters.push(letter);
    
    if (!secretWord.includes(letter)) {
        mistakes++;
        mistakesElement.textContent = mistakes;
        gameStatus.textContent = t('letterNotFound', {
            letter: letter,
            mistakes: mistakes,
            max: maxMistakes
        });
        gameStatus.className = 'game-status status-active';
        playErrorSound();
    } else {
        const count = secretWord.split('').filter(l => l === letter).length;
        gameStatus.textContent = t('letterFound', {
            letter: letter,
            count: count,
            mistakes: mistakes,
            max: maxMistakes
        });
        gameStatus.className = 'game-status status-active';
        playKeySound();
    }
    
    updateWordDisplay();
    updateGameStatus();
    updateHangman();
    
    letterInput.focus();
}

function resetGame() {
    secretWord = '';
    guessedLetters = [];
    mistakes = 0;
    gameActive = false;
    gameWon = false;
    currentWordLanguage = 'ru';
    
    secretWordInput.value = '';
    letterInput.value = '';
    letterInput.disabled = true;
    guessLetterBtn.disabled = true;
    
    wordDisplay.innerHTML = '';
    gameStatus.textContent = t('waiting');
    gameStatus.className = 'game-status status-waiting';
    
    mistakesElement.textContent = '0';
    guessedLettersElement.textContent = '0';
    languageBadge.style.display = 'none';
    
    const mistakesDiv = document.querySelector('.attempts div:first-child');
    if (mistakesDiv) mistakesDiv.innerHTML = t('mistakes') + ' <span id="mistakes">0</span> из <span id="max-mistakes">6</span>';
    const guessedDiv = document.querySelector('.attempts div:last-child');
    if (guessedDiv) guessedDiv.innerHTML = t('guessed') + ' <span id="guessed-letters">0</span>';
    
    updateHangman();
    
    const hintElement = document.querySelector('.input-hint');
    if (hintElement) {
        hintElement.textContent = t('langHint');
        hintElement.style.color = '#888';
    }
    
    secretWordInput.focus();
    showAlert(t('gameReset'), 'info');
}

function showAlert(message, type) {
    const existingAlert = document.querySelector('.custom-alert');
    if (existingAlert) existingAlert.remove();
    
    const alert = document.createElement('div');
    alert.className = `custom-alert alert-${type}`;
    alert.textContent = message;
    alert.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 6px;
        font-weight: bold;
        z-index: 10000;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
        max-width: 300px;
    `;
    
    if (type === 'error') {
        alert.style.backgroundColor = '#ff0040';
        alert.style.color = 'white';
    } else if (type === 'success') {
        alert.style.backgroundColor = '#00ff9d';
        alert.style.color = '#0a0a14';
    } else {
        alert.style.backgroundColor = '#00f3ff';
        alert.style.color = '#0a0a14';
    }
    
    document.body.appendChild(alert);
    setTimeout(() => { if (alert.parentNode) alert.remove(); }, 3000);
}

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
    } catch(e) {}
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
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch(e) {}
}

function playSuccessSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const notes = [523.25, 659.25, 783.99];
        let time = audioContext.currentTime;
        notes.forEach((freq) => {
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            osc.connect(gain);
            gain.connect(audioContext.destination);
            osc.frequency.value = freq;
            osc.type = 'sine';
            gain.gain.setValueAtTime(0, time);
            gain.gain.linearRampToValueAtTime(0.15, time + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);
            osc.start(time);
            osc.stop(time + 0.3);
            time += 0.15;
        });
    } catch(e) {}
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('gallows_language', lang);
    updateUILanguage();
    
    if (gameActive && !gameWon && mistakes < maxMistakes && secretWord) {
        gameStatus.textContent = t('gameStart', {
            lang: languageNames[currentWordLanguage].name,
            len: secretWord.length,
            max: maxMistakes
        });
    }
    
    const mistakesDiv = document.querySelector('.attempts div:first-child');
    if (mistakesDiv) {
        mistakesDiv.innerHTML = t('mistakes') + ' <span id="mistakes">' + mistakes + '</span> из <span id="max-mistakes">6</span>';
    }
    
    const guessedDiv = document.querySelector('.attempts div:last-child');
    if (guessedDiv) {
        const guessedCount = secretWord.split('').filter(letter => guessedLetters.includes(letter)).length;
        guessedDiv.innerHTML = t('guessed') + ' <span id="guessed-letters">' + guessedCount + '</span>';
    }
}

document.querySelectorAll('.lang-dropdown a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = item.getAttribute('data-lang');
        if (lang) changeLanguage(lang);
    });
});

setWordBtn.addEventListener('click', setSecretWord);
guessLetterBtn.addEventListener('click', guessLetter);

secretWordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') setSecretWord();
});

letterInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') guessLetter();
});

secretWordInput.addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});

letterInput.addEventListener('input', function() {
    this.value = this.value.toUpperCase();
    if (this.value.length > 1) this.value = this.value.charAt(0);
});

const resetBtn = document.createElement('button');
resetBtn.className = 'btn reset-game-btn';
resetBtn.textContent = t('resetBtn');
resetBtn.style.marginTop = '15px';
resetBtn.style.background = 'linear-gradient(45deg, #ff0040, #ff6680)';
resetBtn.addEventListener('click', resetGame);
document.querySelector('.guessing-section').appendChild(resetBtn);

secretWordInput.focus();

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    .hidden-word {
        text-align: center;
        margin-top: 15px;
        font-size: 1.1rem;
    }
`;
document.head.appendChild(style);

updateUILanguage();