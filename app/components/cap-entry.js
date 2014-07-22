import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isRead:cape_read'],

  isDetailsVisible: false,

  isRead: false,

  actions: {

    shareCAPEntry: function() {
      alert("social media share: twitter, facebook etc.");
    },

    toggleDetails: function() {
      this.toggleProperty("isDetailsVisible");
    },
  
    toggleRead: function() {
      this.toggleProperty("isRead");
    }
  } 
});
