import { module, test } from 'qunit';
import { setupRenderingTest } from 'personal-website/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hello-cycler', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<HelloCycler />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <HelloCycler>
        template block text
      </HelloCycler>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
