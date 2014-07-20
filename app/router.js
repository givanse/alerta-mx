import Ember from 'ember';

var Router = Ember.Router.extend({
  location: AlertaMxENV.locationType
});

Router.map(function() {
  this.route('alerts');
  this.route('atlas');
  this.route('help');
  this.route('messages');
  this.route('preferences');
});

export default Router;
