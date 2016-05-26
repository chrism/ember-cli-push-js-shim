import Ember from 'ember';
import Push from 'pushjs';

export default Ember.Route.extend({
  actions: {
    createOptionsNotification() {
      Push.create('Notification With Options', {
        timeout: 2000,
        body: 'A longer description goes here.',
        icon: 'assets/images/chrismasters_icon.png'
      });
    }
  }
});