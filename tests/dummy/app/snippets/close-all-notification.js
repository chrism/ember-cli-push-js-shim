import Ember from 'ember';
import Push from 'pushjs';

export default Ember.Route.extend({
  actions: {
    createMultipleNotification() {
      Push.create('First Notification');
      Push.create('Second Notification');
      Push.create('Third Notification');
    },

    closeAllNotification() {
      Push.clear();
    }
  }
});