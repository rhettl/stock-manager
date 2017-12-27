import Ember from 'ember';

export function inArray([array, needle]/*, hash*/) {
  return array.includes(needle);
}

export default Ember.Helper.helper(inArray);
