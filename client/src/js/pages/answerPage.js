'use strict';

var Page = require('watch_framework').Page;
var answerPage = Page.extend({

    id: 'answer',
    template: require('../../templates/pages/answer.hbs'),
    objects: { title: 'Answer' },
    question: [],
    isCorrect: false,
    currentIndex: 1,

    buttonEvents: {
      right: 'diamond',
      top: 'circle',
      bottom: 'triangle',
      left: 'square'
    },

    render: function() {
        this.$el.html(this.template(this.objects));
        return this;
      },

    // TODO: check whether the answer is correct or not
    checkAnswer: function(input) {
      if (input === this.question[this.currentIndex - 1]) {
        this.currentIndex += 1;
      }
    },

    diamond: function() {
      this.checkAnswer('diamond');
    }

  });

module.exports = answerPage;
