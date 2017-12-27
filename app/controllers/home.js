import Ember from 'ember';

export default Ember.Controller.extend({
  stocks: Ember.inject.service('stocks'),
  store: Ember.inject.service(),


  // queryParams: ['symbols'],
  // symbols: '',

  symSortOrder: ['symbol:asc'],
  symbolsSorted: Ember.computed.sort('model', 'symSortOrder')
  //
  // filteredArticles: Ember.computed('symbols', 'model', function() {
  //   let symbols = this.get('symbols');
  //   let articles = this.get('model');
  //
  //   // if (symbols) {
  //   //   return articles.filterBy('symbols', symbols);
  //   // } else {
  //   //   return articles;
  //   // }
  // })

});
