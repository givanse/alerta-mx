import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return pushJSONFixture;
  }
});

var pushJSONFixture = [
  {
    "source": "PROTECCIÓN CIVIL",
    "entries": [
      {
        "title": "Material flamable",
        "updated": "01/01/2013",
        "area": {
          "description": "Fuga de gas en zona industrial del estado de México.",
          "geoJSON": "17.644022027872722,-115.3564453125 268.0646231093416"
        }
      }
    ]
  },
  {
    "source": "PROTECCIÓN CIVIL",
    "entries": [
      {
        "title": "Contingencia ambiental",
        "updated": "21/07/2014",
        "area": {
          "description": "La cantidad de partículas contaminantes en el aire esta por arriba de 9000.",
          "geoJSON": "17.644022027872722,-115.3564453125 267.0646231093416"
        }
      }
    ]
  }
];
