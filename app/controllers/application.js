import Ember from 'ember';

export default Ember.Controller.extend({
  isDrawerVisible: false,

  actions: {
    toggleDrawer: function(route) {
      Ember.Logger.debug("ApplicationController..toggleDrawer");
      this.toggleProperty('isDrawerVisible');
      this.send("setRouteOnHold", route);
    },

    shrinkDrawer: function(route) {

      this.send("setRouteOnHold", route);

      if ( this.get("isDrawerVisible") ) {
        this.set("isDrawerVisible", false);
      } else {
        // its hidden, counts as done
        this.send("drawerTransitionDone", route);
      }
    },

    emergencyCall: function() {
      alert("Ring! Ring! Llamando a protección civil.");
    }
  }
});
