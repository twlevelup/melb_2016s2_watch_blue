'use strict';

var Page = require('watch_framework').Page;
var isCorrect = true;
var feedbackPage = Page.extend({

  id: 'feedback',

//input array and randomly output the index
//chooseAnswer: function() {
  //},

displayAnswer: function(){
  //message from random number generator
  if(isCorrect){
    var correctAnswer = ['Good Job!','Awesome!','Excellent!', 'You\'re Rad!'];
    var randomNum = Math.floor(Math.random() * 10);
    var index = randomNum % correctAnswer.length;
    document.write(correctAnswer[index]);
    }
    else
      {
      var index=chooseAnswer(incorrectAnswer);
      document.write(incorrectAnswer[index]);
     }
 },

 render: function() {
// var incorrectAnswer = ['Try Again!','Better Luck Next Time!','OOPPS!'];
 this.displayAnswer();
}

});

module.exports = feedbackPage;
