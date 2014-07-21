import Ember from 'ember';

export default EmberLeaflet.PolygonLayer.extend({
  locations: Ember.computed.alias('content.locations')
});
