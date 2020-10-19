App.HomeRoute = Ember.Route.extend({
  controllerName: 'users',
  model: function(){  
   return this.store.find('user'); 
  } 
})

App.HomeIndexRoute = Ember.Route.extend({
  model: function(){
    return this.modelFor('home')
  }
})