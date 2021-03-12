const initialState = {
  products: []
};
const getters = {
  getCartItems: state => {
    return state.products;
  }
};
const actions = {
  addToCart({ commit, state }, product) {
    const record = state.products.find(p => p.id === product.id);

    if (!record || record.quantity < 10) {
      commit("ADD_TO_CART", product);
      console.log(record);
    }
  },
  initialiseStore(state) {
    if (localStorage.getItem("store")) {
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem("store")))
      );
    }
  }
};
const mutations = {
  ADD_TO_CART(state, product) {
    localStorage.setItem("store", JSON.stringify(state));
    const record = state.products.find(p => p.id === product.id);
    if (!record) {
      state.products.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      });
    } else {
      record.quantity++;
    }
  }
};

export default {
  state: { ...initialState },
  getters,
  actions,
  mutations
};
