import Ember from 'ember';

export default Ember.Controller.extend({

  capXML: function() {
    var model = this.get("model");
    Ember.Logger.debug("capXML, model");
    Ember.Logger.debug(model);
    
    return model; 
  }.property("model"),

  capPOJO: function() {
    var capXML = this.get("capXML");
    var feed$ = Ember.$(capXML).children("feed");
    var capPOJO = {
      rights: feed$.children("rights").text(),
      updated: feed$.children("updated").text(),
      entries: []
    }

    feed$.children("entry").each(function() {
      var entry$ = Ember.$(this);
      var content$ = entry$.children("content");
      var alert$ = content$.children("alert");
      var info$ = alert$.children("info");
      var area$ = info$.children("area");

      var entry = {
        title: entry$.children("title").text(),
        updated: entry$.children("updated").text(),
        sender: alert$.children("sender").text(),
        area: {
          description: area$.children("areaDesc").text(),
          geoJSON: area$.children("circle").text()
        }
      };
      capPOJO.entries.push(entry);
    });

    return capPOJO;
  }.property("capXML")

});
