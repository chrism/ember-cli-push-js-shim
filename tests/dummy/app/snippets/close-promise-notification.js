import Ember from 'ember';
import Push from 'pushjs';

export default Ember.Route.extend({
  actions: {
    createPromiseNotification() {
      this.set('createPromise', Push.create('Hello World!'));
    },

    closePromiseNotification() {
      this.get('createPromise').then( notification => {
        notification.close();
      });
    }
  }
});