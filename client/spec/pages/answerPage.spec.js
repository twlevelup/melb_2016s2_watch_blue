'use strict';

var AnswerPage = require('../../src/js/pages/answerPage'),
    page;

describe('The Answer Page', function() {

    beforeEach(function() {
        page = new AnswerPage();
      });

    describe('rendering', function() {
          it('should produce the default counter', function() {
              page.render();
              expect(page.$el).toContainText('1');
            });

          // TODO: Put different selections in answer page
          // it('should produce the selection', function() {
          //     page.render();
          //     expect(page.$el).toContainText('square');
          //     expect(page.$el).toContainText('triangle');
          //     expect(page.$el).toContainText('diamond');
          //     expect(page.$el).toContainText('circle');
          //   });
        });
  });
