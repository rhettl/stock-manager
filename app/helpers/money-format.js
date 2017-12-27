import Ember from 'ember';

export function moneyFormat([num, dec=2]/*, hash*/) {
  return '$ ' + parseFloat(num, 10).toFixed(dec);
}

export default Ember.Helper.helper(moneyFormat);
