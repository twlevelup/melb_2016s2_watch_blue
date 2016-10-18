'use strict';

var Page = require('watch_framework').Page;
var answerPage = Page.extend({

    id: 'answer',
    template: require('../../templates/pages/answer.hbs'),
    objects: { title: 'Answer', currentIndex: 0 },
    question: [],
    isCorrect: false,
    currentIndex: 1,

    buttonEvents: {
      right: 'diamond',
      top: 'circle',
      bottom: 'triangle',
      left: 'square'
    },

    initialize: function() {
      // grab the question
      this.question = window.App.data.question;
    },

    render: function() {
        this.objects.currentIndex = this.currentIndex;
        this.$el.html(this.template(this.objects));
        return this;
      },

    checkAnswer: function(input) {
      if (input === this.question[this.currentIndex - 1]) {
        // if it is the last correct answer, go to the feedback page and congratulate
        if (this.currentIndex === this.question.length) {
          this.isCorrect = true;
          this.goToFeedbackPage();
        }

        this.currentIndex += 1;
        this.render();
      } else {
        this.goToFeedbackPage();
      }
    },

    diamond: function() {
      // this.flashBackground('right');
      this.checkAnswer('diamond');
    },

    square: function() {
      // this.flashBackground('left');
      this.checkAnswer('square');
    },

    triangle: function() {
      // this.flashBackground('bottom');
      this.checkAnswer('triangle');
    },

    circle: function() {
      // this.flashBackground('top');
      this.checkAnswer('circle');
    },

    // TODO: add jquery so flash background would work

    // flashBackground: function(button) {
    //   var $layout = $('.answer-page-layout');
    //   $layout.addClass('clicked-' + button);
    //   setTimeout(function() {
    //     $layout.removeClass('clicked-' + button);
    //   }, 1000);
    // },

    goToFeedbackPage: function() {
      window.App.data.isCorrect = this.isCorrect;
      window.App.navigate('feedback');
    }
  });

module.exports = answerPage;
