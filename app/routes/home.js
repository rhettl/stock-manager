import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  stocks: Ember.inject.service(),
  settings: storageFor('settings'),

  model () {
    return this.get('stocks').getSymbol(this.get('settings.symbols'))
      .then(() => this.get('store').peekAll('stock'));
  }
});
