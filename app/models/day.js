import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  date:   DS.attr('date'),
  open:   DS.attr('number'),
  low:    DS.attr('number'),
  high:   DS.attr('number'),
  close:  DS.attr('number'),
  volume: DS.attr('number'),

  change: Ember.computed('open', 'close', function () {
    return ((this.get('close') * 100) - (this.get('open') * 100)) / 100;
  }),

  stock: DS.belongsTo('stock')
});
