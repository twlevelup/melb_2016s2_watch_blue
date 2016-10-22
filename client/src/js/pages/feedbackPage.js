'use strict';

var Page = require('watch_framework').Page;
var feedbackPage = Page.extend({

  id: 'feedback',
  template: require('../../templates/pages/feedback.hbs'),
  objects: { feedback: '' },
  isCorrect: false,
  correctAnswer: ['Good job!', 'Awesome!', 'Excellent!', 'You\'re rad!'],
  incorrectAnswer: ['Try again!', 'Better luck next time!', 'Oops!', 'Bad luck!'],
  initialize: function() {
    this.isCorrect = window.App.data.isCorrect;
  },

  generateFeedback: function(isCorrect) {
    var randomNumber = Math.floor(Math.random() * this.correctAnswer.length) % this.correctAnswer.length;
    if (isCorrect) {
      this.objects.feedback = this.correctAnswer[randomNumber];
    } else {
      this.objects.feedback = this.incorrectAnswer[randomNumber];
    }
  },

  render: function() {
    this.generateFeedback(this.isCorrect);
    this.$el.html(this.template(this.objects));
    return this;
  }

});

module.exports = feedbackPage;
