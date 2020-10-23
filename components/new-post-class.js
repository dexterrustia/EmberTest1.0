App.NewPostComponent = Ember.Component.extend({
  submit: function(e){
    e.preventDefault();
    this.sendAction();
  },
});