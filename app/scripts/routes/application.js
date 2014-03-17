App.ApplicationRoute = Ember.Route.extend({
  actions: {
    resetAndTransitionTo: function (path) {
      this.controllerFor("application").set("notification", null)
      this.transitionTo(path)
    }
  }
})