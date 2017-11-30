var magicBall = {};
var answer = document.querySelector('#answer');
var ball = document.querySelector('#ball');

magicBall.askBall = function (question) {
    answer.style.transition = 'opacity 1s';
    answer.style.opacity = '0';
    setTimeout(function () {
        answer.style.opacity = '1';
    }, 1000);

    ball.style.transition = 'opacity 1s';
    ball.style.opacity = '0';
    setTimeout(function () {
        ball.style.opacity = '1';
        ball.setAttribute('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png');
    }, 1000);

    var possibleAnswers = ['Yes', 'No', 'Most likely', 'Very doubtful', 'Ask again', 'As I see it, yes',
        'My source says no', 'Cannot predict now', 'Without a doubt', 'Better not tell you'];
    var randomNumberOfAnswer = Math.random() * possibleAnswers.length;
    var ballAnswer = possibleAnswers[Math.floor(randomNumberOfAnswer)];

    answer.innerText = ballAnswer;
    console.log(question);
    console.log(answer);
};

var getAnswer = function () {
    var question = prompt('Ask the Magic 8 Ball a question');

    setTimeout(function () {
        magicBall.askBall(question);
    }, 100);
    ball.style.WebkitAnimation = 'shake .1s';
    ball.style.animation = 'shake .1s';
};

document.querySelector('#ask-question').addEventListener('click', function () {
    getAnswer();
});

var reset = function () {
    answer.innerText = "It has all the answers!";
    ball.style.opacity = '1';
    ball.setAttribute('src', 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png');
};
document.querySelector('#reset').addEventListener('click', function () {
    reset();
});
