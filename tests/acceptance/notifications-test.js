import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import sinon from 'sinon';

import Push from 'pushjs';

moduleForAcceptance('Acceptance | notifications');

test('should create a notification', function(assert) {
  const callback = sinon.spy();
  const noop = function () {};

  const stub = sinon.stub(window.Notification, 'requestPermission', function(cb) {
    cb(Push.Permission.GRANTED);
  });

  Push.Permission.request(callback, noop);

  visit('/');
  click('#notification-button');

  andThen(function() {
    assert.ok(stub.calledOnce, 'permission requested');
    assert.equal(Push.count, 1);
  });
});
