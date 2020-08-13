// import axios from "axios";

import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodos", response.data);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title,
        completed: false,
      }
    );
    commit("addNewTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("removeTodo", id);
  },
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },
  addNewTodo: (state, title) => {
    state.todos.unshift(title);
  },
  removeTodo: (state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
};
