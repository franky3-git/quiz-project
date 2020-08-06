//"use strict"
//create a sandBox
(function() {
	const log = console.log;
	const question = document.querySelector('.question');
	const answersBox = document.querySelector('.answers-box');
	const actualQuestionBox = document.querySelector('.nber');
	const totalNumberQuestionBox = document.querySelector('.total-number');
	let initVar = true;
	let i = 0;

	//constructor for a one question
	const Question = function(question, answers, correctAnswer) {
		this.question = question;
		this.answers = answers;
		this.correctAnswer = correctAnswer;
	}


	Question.prototype.displayQuestion = function() {
		question.textContent = this.question;
		answersBox.innerHTML = '';
		this.answers.forEach(answer => {
			const div = document.createElement('div');
			const p = document.createElement('p');
			p.textContent = answer;
			div.classList.add('answer');
			div.appendChild(p);
			answersBox.appendChild(div);
		});
	};
	
	Question.prototype.checkAnswer = function(ans) {
		let score;
		if(ans == this.correctAnswer) {
			score = sc(true);
			} else {
			score = sc(false)
		}
		return score;
	};

	function calcScore() {
		let score = 0;

		return function(option){
			if(option) {
				score++
			}
			return score
		};
	}

	let sc = calcScore();

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
	];

	function next() {
		if(i >= 0 && i < questions.length) {
			questions[i].displayQuestion();
		} else {
			initVar = false;
		}
		displayQuestionNumber();
	}
	
	function displayQuestionNumber() {
		actualQuestionBox.textContent = i + 1;
		totalNumberQuestionBox.textContent = questions.length;
	}

	next();

	answersBox.addEventListener('click', function(e) {
		if(initVar) {
			if(confirm('Are you sure you want to submit this answer?')) {
				const current = questions[i];
				if(e.target.parentElement.classList.contains('answer')) {
					var score = current.checkAnswer(e.target.textContent);
				}
				log(score);
				i++;
				next();
			}	
		}
	});
})();
































