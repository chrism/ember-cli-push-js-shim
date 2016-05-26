import Ember from 'ember';
import Push from 'pushjs';

export default Ember.Route.extend({
  actions: {
    createTaggedNotification() {
      Push.create('Hello World!', {
        tag: 'example'
      });
    },

    closeTaggedNotification() {
      Push.close('example');
    }
  }
});