import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return capJSONFixture;
  }
});

var capJSONFixture = [
  {
    "source": "CONAGUA",
    "entries": [
      {
        "title": "BAJA PRESIÓN AHORA CON 20% DE POTENCIAL PARA DESARROLLO CICLÓNICO",
        "updated": "01/01/2014",
        "area": {
          "description": "Apróximadamente a 1,000 km al sur-suroeste de Acapulco, Gro. y a 1, 290 km al sur de Manzanillo, Col.",
          "geoJSON": "17.644022027872722,-115.3564453125 269.0646231093416"
        }
      }
    ]
  },
  {
    "source": "CIRES",
    "entries": [
      {
        "title": "MOVIMIENTO TECTONICO CON MAGNITUD DE 1.2 EN LA ESCALA DE RICHTER",
        "updated": "02/02/2014",
        "area": {
          "description": "Apróximadamente a 1,000 m de la costa de Chiapas.",
          "geoJSON": "17.644022027872722,-115.3564453125 269.0646231093416"
        }
      }
    ]
  }
]; 
