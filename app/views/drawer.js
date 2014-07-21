import Ember from 'ember';

export default Ember.View.extend({

  isDrawerVisible: null,

  classNameBindings: ["isDrawerVisible:expand:shrink"],

  tagName: "nav",

  templateName: "drawer",

  didInsertElement: function() {
    var controller = this.get("controller");

    Ember.$("#drawer").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
      function() {
        Ember.Logger.debug("transitionend");
        controller.send("drawerTransitionDone");
      }
    );
  } // didInsertElement

});
