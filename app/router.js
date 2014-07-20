import Ember from 'ember';

var Router = Ember.Router.extend({
  location: AlertaMxENV.locationType
});

Router.map(function() {
  this.route('civil');
  this.route('help');
  this.route('preferences');
  this.route('atlas');
  this.route('alert');
});

export default Router;
