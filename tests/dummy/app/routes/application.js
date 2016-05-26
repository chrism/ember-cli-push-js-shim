import Ember from 'ember';
import Push from 'pushjs';

export default Ember.Route.extend({
  actions: {
    createNotification() {
      Push.create('Hello World!');
    },

    createTaggedNotification() {
      Push.create('Hello World!', {
        tag: 'example'
      });
    },

    closeTaggedNotification() {
      Push.close('example');
    },

    createPromiseNotification() {
      this.set('createPromise', Push.create('Hello World!'));
    },

    closePromiseNotification() {
      this.get('createPromise').then( notification => {
        notification.close();
      });
    },

    createMultipleNotification() {
      Push.create('First Notification');
      Push.create('Second Notification');
      Push.create('Third Notification');
    },

    closeAllNotification() {
      Push.clear();
    },

    createOptionsNotification() {
      Push.create('Notification With Options', {
        timeout: 2000,
        body: 'A longer description here.',
        icon: 'assets/images/chrismasters_icon.png'
      });
    }
  }
});