const state = {
  all: [
    {
      id: "qq919e21-ae5b-5e1f-d023-c40ee669520c",
      name: "Burger",
      description:
        "the poor dad is claimed to be Kiyosaki's own father who he says worked hard all his life",
      price: 90
    },
    {
      id: "aad755a6-9a19-94e1-0a5d-426c0303454f",
      name: "pizza",
      description:
        "A fantastic book by Jeff Keller with a very similar message as “The Power of Subconsciousy",
      price: 195
    },
    {
      id: "337026b7-7f2f-c5a0-ace9-cc227e686b8e",
      name: "french fries",
      description:
        "the ideal job, satisfying relationships, and a rewarding, happy life",
      price: 100
    }
  ]
};
const getters = {
  getfoods: state => {
    return state.all;
  }
};
export default {
  state,
  getters
};
