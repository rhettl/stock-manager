import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

// Uncomment if you would like to set initialState
Storage.reopenClass({
  initialState() {
    return {
      showCols: ['Symbol', 'Date', 'Open', 'Close', 'Change'],
      symbols: ['GOOG','AAPL','VFIAX','VIGAX','VSMAX','VSIAX']
    };
  }
});

export default Storage;
