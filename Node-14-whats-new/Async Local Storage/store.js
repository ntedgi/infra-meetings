const { AsyncLocalStorage } = require("async_hooks");

const asyncLocalStorage = new AsyncLocalStorage();

function withStore(store, work) {
  return asyncLocalStorage.run(store, () => work());
}

function getStore() {
  const store = asyncLocalStorage.getStore();
  return store 
}

module.exports={
    withStore,getStore
}