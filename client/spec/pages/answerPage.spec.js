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
      it('should produce the selection', function() {
        page.render();
        expect(page.$el).toContainHtml('<div id="square"></div>');
        expect(page.$el).toContainHtml('<div id="triangle"></div>');
        expect(page.$el).toContainHtml('<div id="diamond"></div>');
        expect(page.$el).toContainHtml('<div id="circle"></div>');
      });
    });

    describe('accepting input', function() {
      describe('given the question is [D,S,T,T]', function() {
        describe('and the index is 1', function() {
          describe('when diamond is clicked', function() {
            it('will still stay on the answer page');
            it('the index is incremented by 1');
        });
      });
    });
  });
