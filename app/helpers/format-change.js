import Ember from 'ember';
import { htmlSafe } from '@ember/string';


export function formatChange([num]/*, hash*/) {
  num = (Math.round(parseFloat(num, 10) * 100) / 100);
  let color = '';
  let change = '';
  if (num > 0) {
    color = 'text-success';
    change = '+ ';
  } else if (num < 0) {
    color = 'text-danger';
    change = '- ';
  }

  return htmlSafe(`<span class="${color}">${change}${Math.abs(num).toFixed(2)}</span>`);
}

export default Ember.Helper.helper(formatChange);
