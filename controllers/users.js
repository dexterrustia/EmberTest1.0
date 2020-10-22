App.UsersController = Ember.Controller.extend({ 

  isFormInvalid: true, 
  actions: { 
    create: function(){
      const users = this.store.createRecord('user',{
        name : this.get('name'),
        username : this.get('username'),
        email : this.get('email'),
        phone : this.get('phone'),
        website : this.get('website'),
      })
      const tecst = this.get('name');
      console.log(tecst);
      this.set('name','');
      this.set('username','');
      this.set('email','');
      this.set('phone','');
      this.set('website',''); 
      users.save();

    }, 
    handleChange: function(){  
      (this.get('name') && this.get('username') && this.get('email') && this.get('phone') && this.get('website')) ?
        this.set('isFormInvalid',false) : this.set('isFormInvalid',true);
       console.log(this.get('isFormInvalid'))
    }

  }

})