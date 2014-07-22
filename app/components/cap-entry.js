import Ember from 'ember';

export default Ember.Component.extend({
  isDetailsVisible: false,

  actions: {

    shareCAPEntry: function() {
      alert("social media share: twitter, facebook etc.");
    },

    toggleDetails: function() {
      this.toggleProperty("isDetailsVisible");
    }
  } 
});
