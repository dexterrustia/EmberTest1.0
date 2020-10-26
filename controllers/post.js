App.PostController = Ember.ObjectController.extend({
  actions:{
    deletePost: function(){
      console.log('deletePost is fired!');
      const post = this.get('model');
      post.deleteRecord();
      post.save();
      console.log(post) 
    },
    editPost: function(){
      console.log('editPost is fired')
    } 
  }

})