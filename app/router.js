import Ember from 'ember';

var Router = Ember.Router.extend({
  location: AlertaMxENV.locationType
});

Router.map(function() {
  this.route('alerts', {path: '/'});
  this.route('alerts-xml');
  this.resource('map');
  this.route('help');
  this.route('preferences');
});

export default Router;
