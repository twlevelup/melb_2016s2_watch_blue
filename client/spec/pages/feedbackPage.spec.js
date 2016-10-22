'use strict';

var FeedbackPage = require('../../src/js/pages/feedbackPage'),
    page;

describe('The feedback Page', function() {

    beforeEach(function() {
        page = new FeedbackPage();
      });

    describe('rendering', function() {
        describe('should produce the right feedback', function() {
            beforeEach(function() {
                page.isCorrect = true;
              });

            it('should contain a feedback message', function() {

                page.render();
                expect(page.correctAnswer).toContain(page.objects.feedback);

              });

          });

      });

  });
