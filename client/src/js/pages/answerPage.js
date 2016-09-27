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
      top: 'square',
      bottom: 'circle',
      left: 'triangle'
    },

    render: function() {
        this.$el.html(this.template(this.objects));
        return this;
      },

    // receive the question
    setQuestion: function(question) {
      this.question = question;
    },

    // TODO: check whether the answer is correct or not
    checkAnswer: function(input) {
    }

  });

module.exports = answerPage;
