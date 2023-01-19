let start = document.getElementById('#start')
let timer = document.getElementById('#timer')
let questions = document.getElementById('#questions')
let Highscores = document.getElementById('#scores')

let timerCountdown;
let seconds;
let quiz;
let quizQuestions;
let quizAnswers;

const jsQuestions = [
    'Inside which HTML element do we put the JavaScript?',
    'The external JavaScript file must contain the <script> tag',
    'How do you write "HELLO WORLD" in an alert box?',
    'JavaScript is the same as Java?',
    'Which event occurs when the user clicks on an HTML element?'
];

const jsAnswers = [
    [['<script>', true]], [['<js>', false]], [['<scripting>', false]], [['<javscript>', false]],
    [['True', false]], [['False', true]],
    [['alert("HELLO WORLD")', true]], [['msg("HELLO WORLD")', false]], [['msgBox("HELLO WORLD")', false]], [['alertBox("HELLO WORLD")', false]],
    [['No it isnt', true]], [['Duh, Yeah??', false]],
    [['onmouseclick', false]], [['onmouseover', false]], [['onclick', true]], [['onchange', false]],
];