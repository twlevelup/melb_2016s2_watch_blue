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
      it('should produce the square', function() {
        page.render();
        expect(page.$el).toContainHtml('<div id="square"></div>');
      });

      it('should produce the triangle', function() {
        page.render();
        expect(page.$el).toContainHtml('<div id="triangle"></div>');
      });

      it('should produce the diamond', function() {
        page.render();
        expect(page.$el).toContainHtml('<div id="diamond"></div>');
      });

      it('should produce the circle', function() {
        page.render();
        expect(page.$el).toContainHtml('<div id="circle"></div>');
      });
    });

    describe('accepting input', function() {
      describe('given the question is [D,S,T,T]', function() {
        beforeEach(function() {
          page.question = ['diamond','square','triangle','triangle'];
        });

        describe('and the index is 1', function() {
          beforeEach(function() {
            page.currentIndex = 1;
          });

          describe('when diamond is clicked', function() {
            beforeEach(function() {
              spyOn(window.App, 'navigate');
              page.diamond();
            });

            it('will still stay on the answer page', function() {
              expect(window.App.navigate).not.toHaveBeenCalled();
            });

            it('the index is 2', function() {
              expect(page.currentIndex).toEqual(2);
            });
          });

          describe('when square is clicked', function() {
            beforeEach(function() {
              spyOn(window.App, 'navigate');
              page.square();
            });

            it('will go to the feedback page', function() {
              expect(window.App.navigate).toHaveBeenCalledWith('feedback');
            });
          });

          describe('when triangle is clicked', function() {
            beforeEach(function() {
              spyOn(window.App, 'navigate');
              page.triangle();
            });

            it('will go to the feedback page', function() {
              expect(window.App.navigate).toHaveBeenCalledWith('feedback');
            });
          });

          describe('when circle is clicked', function() {
            beforeEach(function() {
              spyOn(window.App, 'navigate');
              page.circle();
            });

            it('will go to the feedback page', function() {
              expect(window.App.navigate).toHaveBeenCalledWith('feedback');
            });
          });
        });

        describe('and the index is 4', function() {
          beforeEach(function() {
            page.currentIndex = 4;
          });

          describe('when triangle is clicked', function() {
            beforeEach(function() {
              spyOn(window.App, 'navigate');
              page.triangle();
            });

            it('will go to the feedback page', function() {
              expect(window.App.navigate).toHaveBeenCalledWith('feedback');
            });
          });

          describe('when diamond is clicked', function() {
            beforeEach(function() {
              spyOn(window.App, 'navigate');
              page.diamond();
            });

            it('will go to the feedback page', function() {
              expect(window.App.navigate).toHaveBeenCalledWith('feedback');
            });
          });

          describe('when square is clicked', function() {
            beforeEach(function() {
              spyOn(window.App, 'navigate');
              page.square();
            });

            it('will go to the feedback page', function() {
              expect(window.App.navigate).toHaveBeenCalledWith('feedback');
            });
          });

          describe('when circle is clicked', function() {
            beforeEach(function() {
              spyOn(window.App, 'navigate');
              page.circle();
            });

            it('will go to the feedback page', function() {
              expect(window.App.navigate).toHaveBeenCalledWith('feedback');
            });
          });
        });
      });

    });
  });
