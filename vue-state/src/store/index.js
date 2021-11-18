import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      todos: []
    }
  },
  mutations: {
    addTodoItem: (state, item) => {
      state.todos.unshift(item);
    },
    deleteTodoItem: (state, item) => {
      // find the index of the item with the id we are looking for
      const i = state.todos.map(todo => todo.id).indexOf(parseInt(item.item)); 
      // at position i, remove 1 item
      state.todos.splice(i, 1); 
    },
  },
  getters: {
    //
  }
});