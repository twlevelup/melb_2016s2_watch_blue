'use strict';

var QuizPage = require('../../src/js/pages/quizPage'),
    page;

describe('Quiz Page', function() {

    beforeEach(function() {
        page = new QuizPage();
      });

    describe('rendering', function() {
        it('should produce the correct HTML', function() {
            page.render();
            expect(page.$el).toContainText('Quiz Page');
          });

      });

  });
