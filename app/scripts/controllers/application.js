App.ApplicationController = Ember.Controller.extend({
  notification: null,
  actions: {
    closeAlert: function () {
      this.set("notification", null)
    }
  }
})