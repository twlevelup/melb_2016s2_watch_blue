'use strict';

var QuizPage = require('../../src/js/pages/quizPage'),
    page;

describe('The Quiz Page', function() {

    beforeEach(function() {
        page = new QuizPage();
      });

    describe('rendering', function() {
        it('should produce the correct HTML', function() {
            page.render();
            expect(page.$el).toContainText('');
          });

        it('should contain at least one shape', function() {
            page.render();
            expect(page.$el).toContainElement('#shape');
          });

      });

  });
