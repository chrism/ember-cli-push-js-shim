import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import Push from 'pushjs';

moduleForAcceptance('Acceptance | notifications');

test('should create a notification', function(assert) {
  visit('/');
  click('#notification-button');

  andThen(function() {
    assert.equal(Push.count, 1);
  });
});
