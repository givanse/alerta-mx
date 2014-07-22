import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return pushJSONFixture;
  }
});

var pushJSONFixture = [
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
  }
];
