'use strict';

var AboutPage = require('../../src/js/pages/aboutPage'),
    page;

describe('The About Page', function() {

    beforeEach(function() {
        page = new AboutPage();
      });

    describe('rendering', function() {
        it('should produce the correct HTML', function() {
            page.render();
            expect(page.$el).toContainText('About');
          });

        it('should pass a variable to the template', function() {
            page.render();
            expect(page.$el).toContainHtml('<h1>About</h1>');
          });

      });

  });
