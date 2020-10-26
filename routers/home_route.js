App.HomeRoute = Ember.Route.extend({
  model: function(){  
   return this.store.find('user'); 
  } 
})

App.HomeIndexRoute = Ember.Route.extend({ 
  controllerName: 'users',
  model: function(){
    console.log('homeIndexRoute');
    return this.modelFor('home');
  }
})

App.UserDetailRoute = Ember.Route.extend({
  model: function(params) {
    const { id } = params; 
    const user = this.store.find('user',id);
    const post = this.store.find('post');  
    return { user, post }
  },  
})

App.UserDetailPostRoute = Ember.Route.extend({
  controllerName: 'posts',
  model: function(){ 
    return { user, post } = this.modelFor('user-detail');  
  }

})

