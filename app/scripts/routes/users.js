App.UsersRoute = Ember.Route.extend({
  actions: {
    delete: function (user) {
      user.destroyRecord();
      this.transitionTo("users")
    }
  },
  model: function () {
    return this.store.find('user')
  }
})