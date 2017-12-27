import Ember from 'ember';

export function formatNum([num, dec=2]/*, hash*/) {
  return parseFloat(num, 10).toFixed(dec);
}

export default Ember.Helper.helper(formatNum);
