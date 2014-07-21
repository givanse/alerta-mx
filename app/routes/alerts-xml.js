import Ember from 'ember';

export default Ember.Route.extend({
  urlCAP: "sampleCAP.xml",

  model: function() {

    var urlCAP = this.get("urlCAP");

    return Ember.$.ajax(urlCAP)
                  .fail(function(jqXHR) {
                    Ember.Logger.error("model, fail");
                    Ember.Logger.error(jqXHR);
                    return jqXHR;
                  })
                  .done(function(data) {
                    Ember.Logger.debug("model, done");
                    Ember.Logger.debug(data);
                    return data;
                  });
  } // model

});
