App.UserDetailController = Ember.Controller.extend({
  actions: {
    buttonhandler: function(index){
      const route = ['post','photos','albums'];
      console.log(index)
      this.transitionToRoute(`user-detail.${route[index]}`)
    }
  }


})