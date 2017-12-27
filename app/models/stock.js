import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  symbol: DS.attr('string'),
  lastUpdated: DS.attr('date'),
  timeZone: DS.attr('string'),

  days: DS.hasMany('day'),
  daysSorted: Ember.computed.sort('days', (a, b) => {
    const aDate = a.get('date'), bDate = b.get('date');
    if (aDate > bDate) return -1;
    if (aDate < bDate) return +1;
    return 0;
  }),
  lastDay: Ember.computed('daysSorted', function () {
    return this.get('daysSorted').get('firstObject');
  }),

});
