const questions = [
    {
        question: 'JavaScript é uma linguagem de programação?',
        answer: true,
    },
    {
        question: 'CSS é uma linguagem de programação?',
        answer: false,
    },
    {   question: 'CSS é uma linguagem de programação?',
        answer: false,   
    },
    
    { question: ': Em programação, um "array" é uma estrutura de dados que armazena elementos de maneira ordenada e acessa esses elementos através de índices.',
        answer: true, 
    },

    { question: 'O termo "bug" em programação refere-se a um erro no código que pode levar a resultados inesperados ou comportamento incorreto do programa.',
        answer: true,
    }, 

    { question: ' "JavaScript" é uma linguagem de programação fortemente tipada, o que significa que você não pode alterar o tipo de uma variável após sua declaração.',
        answer: false,
    }, 

    { question: 'Um "loop while" é uma estrutura de controle de fluxo que executa um bloco de código enquanto uma condição especificada for verdadeira.',
        answer: true,
    },

    { question: 'O termo "camelCase" é comumente utilizado em programação para nomear variáveis, onde as palavras são escritas sem espaços e cada palavra após a primeira começa com uma letra maiúscula.',
        answer: true,
    },
    // Adicione mais perguntas conforme necessário
];

let playerName;
let currentQuestionIndex = 0;
let xp = 0;
let hp = 100;

function startGame() {
    playerName = document.getElementById('playerName').value;
    document.getElementById('game-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestionIndex].question;
}

function answerQuestion(userAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const resultElement = document.getElementById('result');
    const xpElement = document.getElementById('xp');
    const hpElement = document.getElementById('hp');

    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Resposta Correta! Ganhou 20 XP!';
        xp += 20;
    } else {
        resultElement.textContent = 'Resposta Incorreta! Perdeu 10 HP!';
        hp -= 10;
    }

    xpElement.textContent = xp;
    hpElement.textContent = hp;

    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');

    if (currentQuestionIndex === questions.length - 1) {
        endGame();
    }
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        document.getElementById('result-container').classList.add('hidden');
        document.getElementById('question-container').classList.remove('hidden');
        showQuestion();
    }
}

function endGame() {
    const endResultElement = document.getElementById('end-result');
    const endLevelElement = document.getElementById('end-level');

    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('end-container').classList.remove('hidden');

    if (hp <= 0) {
        endResultElement.textContent = `Fim do Jogo, ${playerName}! Infelizmente, você ficou sem HP.`;
    } else {
        endResultElement.textContent = `Fim do Jogo, ${playerName}! Você terminou com ${xp} XP e ${hp} HP.`;
        endLevelElement.textContent = `Nível: ${calculateLevel()}`;
    }
}

function calculateLevel() {
    if (xp < 1000) {
        return 'Novato';
    } else if (xp < 2000) {
        return 'Bronze';
    } else if (xp < 5000) {
        return 'Prata';
    } else if (xp < 7000) {
        return 'Ouro';
    } else if (xp < 8000) {
        return 'Platina';
    } else if (xp < 9000) {
        return 'Ascendente';
    } else if (xp < 10000) {
        return 'Imortal';
    } else {
        return 'Radiante';
    }
}
