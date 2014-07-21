import Ember from 'ember';

export default Ember.Controller.extend({

  convertCAPXMLtoPOJO: function(capXML) {
    var feed$ = Ember.$(capXML).children("feed");
    var capPOJO = {
      rights: feed$.children("rights").text(),
      updated: feed$.children("updated").text(),
      entries: []
    };

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
  },

  capPOJO: function() {

    var Promiseable = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);

    var _this = this;
    var promise = new Ember.RSVP.Promise(function(resolve) {
      var capXML = _this.get("model");
      var capPOJO = _this.convertCAPXMLtoPOJO(capXML);
      resolve(capPOJO);
    });

    return Promiseable.create({promise: promise});
  }.property("model")

});
