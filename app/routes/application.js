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
    }
  }

});
