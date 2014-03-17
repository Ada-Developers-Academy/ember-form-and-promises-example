App.UsersNewRoute = Ember.Route.extend({
  actions: {
    create: function (attributes) {
      var user = this.store.createRecord("user", attributes);
      var self = this
      user.save().then(
        function (user) {
          self.transitionTo('user', user);
        }, 
        function (error) {
          user.deleteRecord();
          alert(error.responseText)
        }
      )
      
    }
  },
  model: function () {
    return {};
  }
})