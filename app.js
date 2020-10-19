App = Ember.Application.create(); 

//defining routes
App.Router.map(function(){ 
  this.route('login',{path: '/login'}); 
  this.resource('home',{path: '/'},function(){
    this.route('user-detail')
  }) 
}) 

App.ApplicationAdapter = DS.FixtureAdapter.extend({
  namespace: 'Fixture'
})

// //Adapters
// App.ApplicationAdapter = DS.RESTAdapter.extend({
//   host: "https://jsonplaceholder.typicode.com",
// }) 
 
// //Serializer
// App.ApplicationSerializer = DS.RESTSerializer.extend({ 
//   normalizeResponse: function(store, primaryModelClass, payload, id, requestType){
//     console.log(payload)
//     payload = { user: payload }; 

//     return this._super(store, primaryModelClass, payload, id, requestType);
//   }
// })

