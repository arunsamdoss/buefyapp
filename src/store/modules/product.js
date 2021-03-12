import { v4 } from "uuid";
const uuId = v4();

const initialData = {
  all: [
    {
      id: "cc919e21-ae5b-5e1f-d023-c40ee669520c",
      name: "Rich daddy poor daddy",
      description:
        "the poor dad is claimed to be Kiyosaki's own father who he says worked hard all his life",
      price: 399
    },
    {
      id: "bcd755a6-9a19-94e1-0a5d-426c0303454f",
      name: "Attitude is everything",
      description:
        "A fantastic book by Jeff Keller with a very similar message as “The Power of Subconsciousy",
      price: 195
    },
    {
      id: "727026b7-7f2f-c5a0-ace9-cc227e686b8e",
      name: "The Magic of Thinking Big",
      description:
        "the ideal job, satisfying relationships, and a rewarding, happy life",
      price: 595
    }
  ]
};
const getters = {
  getProducts: state => {
    return state.all;
  }
};
const actions = {
  saveProduct({ commit, state }, product) {
    const index = state.all.findIndex(p => p.id == product.id);

    if (index !== -1) {
      commit("UPDATE_PRODUCT", product);
    } else {
      product.id = uuId;
      commit("CREATE_PRODUCT", product);
      console.log(product);
    }
  },

  deleteProduct({ commit }, productId) {
    commit("DELETE_PRODUCT", productId);
  }
};
const mutations = {
  CREATE_PRODUCT: (state, product) => {
    state.all.push(product);
  },
  UPDATE_PRODUCT: (state, product) => {
    state.all.findIndex(p => p.id === product.id);

    if (state.all.findIndex !== -1) {
      state.all.splice(state.all.findIndex, 1, product);
    }
  },
  DELETE_PRODUCT: (state, productId) => {
    state.all = state.all.filter(p => p.id !== productId);
  }
};
export default {
  state: { ...initialData },
  getters,
  actions,
  mutations
};
