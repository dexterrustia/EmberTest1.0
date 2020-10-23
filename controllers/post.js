App.PostController = Ember.ObjectController.extend({
  actions:{
    deletePost: function(){
      console.log('deletePost is fired!');
      const posts = this.get('model.post');
      posts.destroyRecord();
      posts.save();
    },
    editPost: function(){
      console.log('editPost is fired')
    } 
  }

})