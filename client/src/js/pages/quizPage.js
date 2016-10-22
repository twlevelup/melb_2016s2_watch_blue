'use strict';

var Page = require('watch_framework').Page;

var shapes = ['square', 'circle', 'diamond', 'triangle'];

var quizPage = Page.extend({

    id: 'quizPage',
    template: require('../../templates/pages/quiz.hbs'),
    objects: { title: '', questionShapes: '' },
    difficulty: 4,
    question: [],
    render: function() {
        this.$el.html(this.template(this.objects));
        this.$el.find('#display-shape').html(this.objects.questionShapes);
        this.$el.find('#shape-scroll').animate({
            margin: '0 1000px 0 0'
          });
        return this;
      },
    initialize: function () {
      this.question = [];
      window.App.data.question = this.question;
      this.objects.questionShapes = '';
      for (var i = 1; i <= this.difficulty; i++) {
        var randomNumber = Math.floor(Math.random() * (shapes.length)) % 4;
        this.question.push(shapes[randomNumber])
        this.objects.questionShapes += this.generateShapeHTML(shapes[randomNumber]);
      }
      console.log(this.objects.questionShapes);
      this.render();
      var self = this;
      setTimeout(function() {
        self.goToAnswerPage(); 
        this.question = [];
      }, 5000);
    },
    generateShapeHTML: function(shape) {
      return '<div class=\'' + shape +' large\'></div>'
    },
    goToAnswerPage: function() {
      window.App.data.question = this.question;
      window.App.navigate('answer');
    }

  });

module.exports = quizPage;
