import { createStore } from "pinia"; // btw can't find defineComponent method

export const useMainStore = createStore({
  // name of the store
  // it is used in devtools and allows restoring state
  id: "main",
  // a function that returns a fresh state
  state: () => ({
    counter: 0,
    name: "Eduardo",
  }),
  // optional getters
  getters: {
    doubleCount() {
      return this.counter * 2;
    },
    doubleCountPlusOne() {
      return this.doubleCount * 2;
    },
  },
  // optional actions
  actions: {
    reset() {
      // `this` is the store instance
      this.counter = 0;
    },
  },
});
