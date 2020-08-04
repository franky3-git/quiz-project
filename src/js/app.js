//"use strict"
const log = console.log;
const question = document.querySelector('.question');
const answersBox = document.querySelector('.answers-box');
const actualQuestionBox = document.querySelector('.nber');
const totalNumberQuestionBox = document.querySelector('.total-number');
let initVar = true;

const questions = [
	{question: 'first question', answers: ['first', 'second', 'third', 'fourth'], answer: 'second'},
	{question: 'second question', answers: ['first', 'second', 'third', 'fourth'], answer: 'first'},
	{question: 'third question', answers: ['first', 'second', 'third', 'fourth'], answer: 'third'},
	{question: 'fourth question', answers: ['first', 'second', 'third', 'fourth'], answer: 'fourth'},
	{question: 'fifth question', answers: ['first', 'second', 'third', 'fourth'], answer: 'first'}
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
			if(questions[i].answer == e.target.textContent) {
				score++;
			}
			i++;
			//if(i >= questions.length) return;
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


































