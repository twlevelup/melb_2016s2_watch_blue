'use strict';

var Page = require('watch_framework').Page;
var quizPage = Page.extend({

    id: 'quizPage',
    template: require('../../templates/pages/quiz.hbs'),
    objects: { title: 'Quiz Question Page' },
    render: function() {
        this.$el.html(this.template(this.objects));
        return this;
      }

  });

module.exports = quizPage;
