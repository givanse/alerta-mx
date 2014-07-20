import Ember from 'ember';

export default Ember.Component.extend({
  action: "toggleDrawer",

  click: function() {
    this.sendAction();
  }
});
