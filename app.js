const quizData = [
    {
        question: '簡単な',
        choiceA: 'simple',
        choiceB: 'dog',
        choiceC: 'word',
        choiceD: 'clean',
        correct: 'A'
    },{
        question: '送る',
        choiceA: 'to pour',
        choiceB: 'to eat',
        choiceC: 'to send',
        choiceD: 'to dance',
        correct: 'C'
    },{
        question: '勉強',
        choiceA: 'study',
        choiceB: 'gift',
        choiceC: 'bug',
        choiceD: 'luck',
        correct: 'A'
    },{
        question: '綺麗な',
        choiceA: 'happy',
        choiceB: 'quite',
        choiceC: 'funny',
        choiceD: 'beautiful',
        correct: 'D'
    },{
        question: '花火',
        choiceA: 'fire',
        choiceB: 'fireworks',
        choiceC: 'flower',
        choiceD: 'tree',
        correct: 'B'
    }
];

// get elements
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D') ;
const progress = document.getElementById('progress');
const counter = document.getElementById('counter');
const scoreWrapper = document.getElementById('score-wrapper');
const scoreImg = document.getElementById('score-img');
const scoreDisplay = document.getElementById('score');
const scoreMessage = document.getElementById('score-message');

// var
let lastQuestion = quizData.length - 1;
let currentQuestion = 0;

// create a function that renders the quiz
const renderQuiz = () => {
    let q = quizData[currentQuestion];
    quiz.style.display = 'flex';
    question.innerText = q.question;
    choiceA.innerText = q.choiceA;
    choiceB.innerText = q.choiceB;
    choiceC.innerText = q.choiceC;
    choiceD.innerText = q.choiceD;
}

renderQuiz();

const renderCounter = () => {
    
}