import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('manage-symbols', 'Integration | Component | manage symbols', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{manage-symbols}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#manage-symbols}}
      template block text
    {{/manage-symbols}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
