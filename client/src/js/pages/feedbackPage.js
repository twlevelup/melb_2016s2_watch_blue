'use strict';

var Page = require('watch_framework').Page;
var feedbackPage = Page.extend({

    id: 'feedback'

  });

module.exports = feedbackPage;


var isCorrect = true;
var correctAnswer = ['Good Job!','Awesome!','Excellent!', 'You\'re Rad!'];
var incorrectAnswer = ['Try Again!','Better Luck Next Time!','OOPPS!'];

//generating a random number between 0-3

  displayAnswer();

//input array and randomly output the index
function chooseAnswer(correctAnswer) {
  var randomNum = Math.floor(Math.random() * 10);
  return randomNum % correctAnswer.length;
}

function displayAnswer() {
  //message from random number generator
  if(isCorrect){
    var index=chooseAnswer(correctAnswer);
    document.write(correctAnswer[index]);
  }else{
    var index=chooseAnswer(incorrectAnswer);
    document.write(incorrectAnswer[index]);
  }

  //TODO display a specific response
}
