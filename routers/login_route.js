App.LoginRoute = Ember.Route.extend({
  templateName : 'login',
  setupcontroller: function(controller){
    controller.set('title', 'Sample') 
  }, 
}) 