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

        it('should contain a square', function() {
            page.render();
            expect(page.$el).toContainElement('.square');
          });

        it('should contain a circle', function() {
            page.render();
            expect(page.$el).toContainElement('.circle');
          });

        it('should contain a diamond', function() {
            page.render();
            expect(page.$el).toContainElement('.diamond');
          });

        it('should contain a triangle', function() {
            page.render();
            expect(page.$el).toContainElement('.triangle');
          });

      });

  });
