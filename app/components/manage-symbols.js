import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

const component = Ember.Component.extend({
  stocks: Ember.inject.service(),
  settings: storageFor('settings'),

  actions: {
    removeSymbol (symbol) {
      const symId = symbol.get('symbol');

      symbol.get('days').forEach(d => console.log(d) && d.unloadRecord());
      symbol.unloadRecord();

      let syms = this.get('settings.symbols');
      if (syms.includes(symId)) {
        syms.splice(syms.indexOf(symId), 1);
      }
      this.set('settings.symbols', syms);
    },
    addSymbol (symbol) {
      symbol = symbol.toUpperCase();
      this.get('stocks')
        .getSymbol(symbol)
        .then(() => {
          let syms = this.get('settings.symbols');
          syms.push(symbol);
          this.set('settings.symbols', syms);
        })
      ;
      this.set('newSymbol', '');
    },
    toggleColumn (col) {
      let cols = this.get('settings.showCols');
      if (cols.includes(col)) {
        cols.splice(cols.indexOf(col), 1);
      } else {
        cols.push(col);
      }
      this.set('settings.showCols', cols);
    }
  },

  // symbols: [],
  newSymbol: '',

  symSortOrder: ['symbol:asc'],
  symbolsSorted: Ember.computed.sort('symbols', 'symSortOrder')
});



component.reopenClass({
  positionalParams: ['symbols']
});

export default component
