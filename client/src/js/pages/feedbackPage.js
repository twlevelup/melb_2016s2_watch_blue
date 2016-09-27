'use strict';

var Page = require('watch_framework').Page;
var feedbackPage = Page.extend({

    id: 'feedback'

  });

  module.exports = feedbackPage;

//Accept w
var isCorrect = TRUE;
var correctAnswer = ["Good Job!","Awesome!","Excellent!", "You're Rad!"];
var incorrectAnswer = ["Try Again!","Better Luck Next Time!","OOPPS!"];

//generating a random number between 0-3
if(isCorrect)
  chooseAnswer(correctAnswer);
else {
    chooseAnswer(incorrectAnswer);
}


function chooseAnswer(answer){
  var randomNum = Math.floor(Math.random()*10);
  return randomNum % answer.length;
}

function displayAnswer(){
  var index = chooseAnswer();
  //TODO display a specific response
}
