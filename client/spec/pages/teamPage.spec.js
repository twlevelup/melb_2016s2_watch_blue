'use strict';

var TeamPage = require('../../src/js/pages/teamPage'),
    page;

describe('Check-in dance', function() {

  beforeEach(function() {
    page = new TeamPage();
    page.render();
  });

  describe('initial git commit', function() {
    it('should include the text "Made by:"', function() {
      expect(page.$el).toContainText('Made by:');
    });

    it('should include the text "Nidhi Solanki"', function() {
      expect(page.$el).toContainText('Nidhi Solanki');
    });

    it('should include the text "Jacqui Shadforth"', function() {
      expect(page.$el).toContainText('Jacqui Shadforth');
    });

    it('should include the text Jessie', function() {
      expect(page.$el).toContainText('Jessie');
    });

    it('should include the text Jemal', function() {
      expect(page.$el).toContainText('Jemal');
    });

    it('should include Diane', function() {
      expect(page.$el).toContainText('Diane');
    });

    it('should include Adrian', function() {
      expect(page.$el).toContainText('Adrian');
    });

    it('should include Sarah', function() {
      expect(page.$el).toContainText('Sarah');
    });

    it('should include Zehan', function() {
      expect(page.$el).toContainText('Zehan');
    });

    it('should include Biondi', function() {
      expect(page.$el).toContainText('Biondi');
    });

  });
});
