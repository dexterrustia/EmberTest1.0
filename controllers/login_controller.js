App.LoginController = Ember.Controller.extend({
  username: "",
  password: "",

  actions:{
    onLogin: function(){
      //just for testing
      if(this.username === "username" && this.password === "password"){
        console.log('Login successful!')
        this.transitionTo('/')
      }
    }
  }
})