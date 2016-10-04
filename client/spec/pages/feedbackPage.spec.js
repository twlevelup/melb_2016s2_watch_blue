'use strict';

var feedbackPage = require('../../src/js/pages/feedbackPage'),
    page;

describe('The feedback Page', function() {

    beforeEach(function() {
        page = new feedbackPage();
      });

    describe('rendering', function() {
        // it('should produce the number between 0 and 3', function() {
        //     page.render();
        //
        //     expect(feedbackPage.displayAnswer().toHaveArrayOfString(feedbackPage.correctAnswer));
        //   });
        it('should produce the number between 0 and 3', function() {
            page.render();
            expect(feedbackPage.chooseAnswer(['Good Job!','Awesome!','Excellent!', 'You\'re Rad!'])).toBeWithinRange(0,3);
          });

      });

  });
