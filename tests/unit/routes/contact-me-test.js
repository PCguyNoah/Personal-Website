import { module, test } from 'qunit';
import { setupTest } from 'personal-website/tests/helpers';

module('Unit | Route | contact-me', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:contact-me');
    assert.ok(route);
  });
});
