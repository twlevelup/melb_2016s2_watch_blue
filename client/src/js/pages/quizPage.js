'use strict';

var Page = require('watch_framework').Page;

var shapes = ['<img src=\'client/src/images/square.png\' alt=\'square\' class=\'small\'>',
                '<img src=\'client/src/images/circle.png\' alt=\'circle\' class=\'small\'>',
                '<img src=\'client/src/images/diamond.png\' alt=\'diamond\' class=\'small\'>',
                '<img src=\'client/src/images/triangle.png\' alt=\'triangle\' class=\'small\'>'];

var quizPage = Page.extend({

    id: 'quizPage',
    template: require('../../templates/pages/quiz.hbs'),
    objects: { title: 'Quiz Page' },
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
