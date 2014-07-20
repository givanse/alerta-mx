import Ember from 'ember';

export default Ember.Controller.extend({
  drawerVisible: false,

  actions: {
    toggleDrawer: function() {
      this.toggleProperty('drawerVisible');
    },

    shrinkDrawer: function() {
      this.set('drawerVisible', false);
    }
  }
});
