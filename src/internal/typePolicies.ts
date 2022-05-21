import * as store from './store';

const typePolicies = {
  Query: {
    fields: { // Field policy for the Space type
      starredItems: {
        read() {
          return store.Space.starredItemsVar();
        }
      }
    }
  }
};
 
export default typePolicies;