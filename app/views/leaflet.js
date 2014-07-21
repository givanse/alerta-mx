import Ember from 'ember';
import PolygonCollectionLayer from 'alerta-mx/eleaflet/polygon-collection-layer';

export default EmberLeaflet.MapView.extend({

  center: L.latLng(19.278328, -99.148747),

  content: [
    {
      locations: [[19.006230, -99.538790], [17.770854, -101.889864], [16.511083, -99.346529]],
      options: {color: "brown", fill: true, className: "poly_brown"}
    }, 
    {
      locations: [[28.174867, -104.545809], [27.971298, -100.821444], 
                 [27.971298, -100.821444], [25.429570, -104.073397]],
      options: {color: "yellow", fill: true, className: "poly_yellow"}
    }
  ],

  // TODO: fix, the polygons are not shown
  childLayers: [EmberLeaflet.DefaultTileLayer, 
                PolygonCollectionLayer],

  options: {maxZoom: 19, minZoom: 1},

  zoom: 4

});
