App.UserController = Ember.ObjectController.extend({
  isEditing: false,
  editingErrorMessage : '',
  backupProps: {},
  actions:{
    onDelete: function(){ 
      const users = this.get('model'); 
      users.deleteRecord();
      users.save();
    },
    onEdit: function(val){
      this.set('isEditing',val)
      if(val){
        this.set('backupProps.name',this.get('model.name'));
        this.set('backupProps.username',this.get('model.username'));
        this.set('backupProps.email',this.get('model.email'));
        this.set('backupProps.phone',this.get('model.phone'));
        this.set('backupProps.website',this.get('model.website'));
      }else{
        this.set('model.name',this.get('backupProps.name'));
        this.set('model.username',this.get('backupProps.username'));
        this.set('model.email',this.get('backupProps.email'));
        this.set('model.phone',this.get('backupProps.phone'));
        this.set('model.website',this.get('backupProps.website'));
      } 
    },
    saveChanges: function(){
      if( Ember.isEmpty(this.get('model.name')) || 
          Ember.isEmpty(this.get('model.username')) || 
          Ember.isEmpty(this.get('model.email')) || 
          Ember.isEmpty(this.get('model.phone')) || 
          Ember.isEmpty(this.get('model.website'))
        ){
          this.set('editingErrorMessage',"All field must not be empty!") 
          console.log(`editingErrorMessage : ${this.get('editingErrorMessage')}`)
        }else{ 
          this.get('model').save();
          this.set('editingErrorMessage',"") 
          this.set('isEditing',false) 
        }

    },
  }
})