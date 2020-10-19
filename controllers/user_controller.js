App.UserController = Ember.ObjectController.extend({
  actions:{
    onDelete: function(user){
      console.log('USER ======='); 
      const users = this.get('model');
      console.log(users)
      users.deleteRecord();
      users.save();
    }
  }
})