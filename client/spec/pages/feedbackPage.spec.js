describe('left', function() {
  it('should take the user to the about page', function() {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('left');
      expect(window.App.navigate).toHaveBeenCalledWith('feedback');
    });
});
