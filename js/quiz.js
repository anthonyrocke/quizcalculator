function submitQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const result = document.getElementById('result');
    let score = 0;

    const answers = {
        q1: 'B'
        q2: 'B'
        q3: 'C'
    };

    //Check each question for(let question in answer){
    const selectedAnswer = quizForm.querySelector(`input[name="${question}"]:checked`);
    if (selectedAnswer && selectedAnswer && selectedAnswer.value === answer[question]) {
        score++;
    }
}

// Show the result
result.textContent = `You scored ${score} out of ${Object.keys(answers).length}.`;
}

//Optional:Clear result when selecting answers
document.querySelectorAll('input[type="radio"]').forEach(element => {
    element.addEventListener('change', () => {

        document.getElementById('result').textContent = ";
    })
});