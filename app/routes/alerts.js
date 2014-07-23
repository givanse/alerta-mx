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
        "senderName": "Sistema Nacional de Protección Civil",
        "web": "http://www.proteccioncivil.gob.mx/",
        "contact": "webmaster@snpc.gob.mx",
        "headline": "Conteo Alto de Partículas Suspendidas en el Aire.",
        "updated": "21/07/2014",
        "area": {
          "description": "La cantidad de partículas contaminantes en el aire esta por arriba de 9000.",
          "geoJSON": "17.644022027872722,-115.3564453125 267.0646231093416"
        },
        "parameters": {
          "categoria": "Contingencia Tropical" 
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
  },
  {
    "entries": [
      {
        "senderName": "Sistema Nacional de Protección Civil",
        "web": "http://www.proteccioncivil.gob.mx/",
        "contact": "webmaster@snpc.gob.mx",
        "headline": "Fuga de Material Flamable",
        "updated": "01/01/2013",
        "area": {
          "description": "Fuga de gas en zona industrial del estado de México.",
          "geoJSON": "17.644022027872722,-115.3564453125 268.0646231093416"
        },
        "parameters": {
          "categoria": "Fuga Tropical" 
        }
      }
    ]
  }
];
