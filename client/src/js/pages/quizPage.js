'use strict';

var Page = require('watch_framework').Page;

var shapes = ['<div class=\'square large\'>',
                '<div class=\'circle large\'>',
                '<div class=\'diamond large\'>',
                '<div class=\'triangle large\'>'];

var quizPage = Page.extend({

    id: 'quizPage',
    template: require('../../templates/pages/quiz.hbs'),
    objects: { title: '' },
    render: function() {
        this.$el.html(this.template(this.objects));
        this.$el.find('#display-shape').html(shapes);
        this.$el.find('#shape-scroll').animate({
            margin: '0 1000px 0 0'
          });
        return this;
      }

  });

module.exports = quizPage;
