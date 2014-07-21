import Ember from 'ember';

export default Ember.Route.extend({

  routeOnHold: null,

  actions: {
    drawerTransitionDone: function() {
      Ember.Logger.debug("ApplicationRoute..drawerTransitionDone");
      var route = this.get("routeOnHold");
      if ( route ) {
        Ember.Logger.debug(route);
        this.transitionTo(route);
      }
    },

    setRouteOnHold: function(route) {
      Ember.Logger.debug("ApplicationRoute..setRouteOnHold");
      Ember.Logger.debug(route);
      this.set("routeOnHold", route);

      return false;
    },

    /* Place this high up so it catches events triggered from both 
       Messages and Alerts.
     */
    shareCAPEntry: function() {
      alert("social media share: twitter, facebook etc.");
    }
  }

});
