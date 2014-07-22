import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return capJSONFixture;
  }
});

var capJSONFixture = [
  {
    "entries": [
      {
        "senderName": "Comisión Nacional del Agua - Servicio Meteorológico Nacional",
        "web": "http://smn.cna.gob.mx/",
        "contact": "webmaster@conagua.gob.mx",
        "headline": "BAJA PRESIÓN AHORA CON 20% DE POTENCIAL PARA DESARROLLO CICLÓNICO",
        "updated": "01/01/2014",
        "area": {
          "description": "Apróximadamente a 1,000 km al sur-suroeste de Acapulco, Gro. y a 1, 290 km al sur de Manzanillo, Col.",
          "geoJSON": "17.644022027872722,-115.3564453125 269.0646231093416"
        },
        "parameters": {
          "categoria": "Depresión Tropical" 
        }
      }
    ]
  },
  {
    "entries": [
      {
        "senderName": "Centro de Instrumentación y Registro Sísmico, A. C.",
        "web": "http://www.cires.org.mx/",
        "contact": "webmaster@cires.gob.mx",
        "headline": "MOVIMIENTO TECTONICO CON MAGNITUD DE 1.2 EN LA ESCALA DE RICHTER",
        "updated": "02/02/2014",
        "area": {
          "description": "Apróximadamente a 1,000 m de la costa de Chiapas.",
          "geoJSON": "17.644022027872722,-115.3564453125 269.0646231093416"
        },
        "parameters": {
          "categoria": "Temblor Tropical" 
        }
      }
    ]
  }
]; 
