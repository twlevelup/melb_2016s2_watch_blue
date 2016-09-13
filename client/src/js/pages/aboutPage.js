'use strict';

var Page = require('watch_framework').Page;
var aboutPage = Page.extend({

    id: 'about',
    template: require('../../templates/pages/about.hbs'),
    objects: { title: 'About' },
    render: function() {
        this.$el.html(this.template(this.objects));
        return this;
      }

  });

module.exports = aboutPage;
