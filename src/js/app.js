//"use strict"
const log = console.log;
const question = document.querySelector('.question');
const answersBox = document.querySelector('.answers-box');
const actualQuestionBox = document.querySelector('.nber');
const totalNumberQuestionBox = document.querySelector('.total-number');
let initVar = true;

//constructor for a one question
const Question = function(question, answers, correctAnswer) {
	this.question = question;
	this.answers = answers;
	this.correctAnswer = correctAnswer;
}

//set all questions
const questions = [
	new Question(
		'Is Javascript the best language ?',
		['Yes', 'No'],
		'Yes'
	),
	new Question(
		'What is the fact that memory is reserved for variables and functions during the creation stage of execution context?',
		['declaration', 'settings', 'hoisting', 'preparation'],
		'hoisting'
	),
	new Question(
		'How do you declare a constante in javascript?',
		['var', 'const', 'let', 'constant'],
		'const'
	),
	new Question(
		'What is javascript engine use in node.js?',
		['spidermonkey', 'chacka core', 'javascript reader', 'V8'],
		'V8'
	)
]

let i = 0;
let score = 0;
function showQuestion() {
	question.textContent = questions[i].question;
	actualQuestionBox.textContent = i + 1;
	totalNumberQuestionBox.textContent = questions.length;
	answersBox.innerHTML = '';
	questions[i].answers.forEach(answer => {
		const div = document.createElement('div');
		const p = document.createElement('p');
		p.textContent = answer;
		div.classList.add('answer');
		div.appendChild(p);
		answersBox.appendChild(div);
	})
}

function answerQuestion(e) {
	
	if(e.target.parentElement.classList.contains('answer')) {
		
		if(confirm('Are you sure you want to submit this answer?')){
			if(questions[i].correctAnswer == e.target.textContent) {
				score++;
			}
			i++;
			log(score)
		}
	}
}


answersBox.addEventListener('click', function(e) {
	if(i < questions.length) {
		answerQuestion(e);
		if(i != questions.length) {
			showQuestion();
		}
	}
});

showQuestion();


































