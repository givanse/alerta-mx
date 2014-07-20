import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{"date": "01/01/2000",
             "title": "Material flamable",
             "message": "Fuga de gas en X zona."},
            {"date": "19/07/2014",
             "title": "Contingencia ambiental",
             "message": "Contaminantes en el aire arriba de 9000"}];
  }
});
