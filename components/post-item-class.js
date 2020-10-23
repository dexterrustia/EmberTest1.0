App.PostItemComponent = Ember.Component.extend({
  actions: {
    deletePost: function(){
      this.sendAction('onDeletePost');
    },
    editPost: function(){
      this.sendAction('onEditPost')
    }

  } 
})