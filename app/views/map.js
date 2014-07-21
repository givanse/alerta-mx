import Ember from 'ember';

export default EmberLeaflet.MapView.extend({

  center: L.latLng(19.278328, -99.148747),

  zoom: 4,

  options: {maxZoom: 19, minZoom: 1}

});
