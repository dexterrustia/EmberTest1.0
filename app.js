App = Ember.Application.create(); 

//
//Ember.TEMPLATE[''] = Ember.handlebars.compile(data)

//defining routes
App.Router.map(function(){ 
  this.route('login',{path: '/login'}); 
  this.resource('home',{path: '/'},function(){ 
    this.resource('user-detail',{path: '/user-detail/:id'},function(){
      this.route('post');
      this.route('photos');
      this.route('albums');
    })
  })
   
}) 
//Override fixture query
DS.FixtureAdapter.reopen({
  queryFixtures: function(records, query, type) {        
      return records.filter(function(record) {
          for(var key in query) {
              if (!query.hasOwnProperty(key)) { continue; }
              var value = query[key];
              if (record[key] !== value) { return false; }
          }
          return true;
      });
  }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
}); 

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

