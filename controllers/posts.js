App.PostsController = Ember.Controller.extend({
  actions: {
    createPost: function(){
      const newPost = {
        userId : parseInt(this.get('model.user.id')),
        title : this.get('newTitle'),
        body : this.get('newBody'),

      }  
      console.log(newPost)
      this.store.find('user',newPost.userId).then(function(user) {
        console.log(user)
        user.get('post').addRecord(newPost); 
        user.save()
      })

      this.set('newTitle','');
      this.set('newBody','');

      // const user = this.get('model.user');


      // user.get('post').then(function(p){
      //   p.set('body','')
      // }) 
      // this.set('newTitle','');
      // this.set('newBody','');
      // user.save();
      // console.log(typeof parseInt(this.get('model.user.id')))
      // console.log('This is fired!!') 
      // const posts = this.store.createRecord('post',newPost);
      // this.set('newTitle','');
      // this.set('newBody','');
      // posts.save();
    }

  }
})