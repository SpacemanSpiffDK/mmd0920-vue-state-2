import { createStore } from 'vuex';

export default createStore({
  // defining store state - start
  state() {
    return {
      todos: []
    }
  },
  // defining store state - end
  // defining store mutations - start
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
    resetAllTodoItems: (state) => {
      state.todos.forEach(todo => {
        todo.completed = false;
      });
    },
    removeAllTodoItems: (state) => {
      state.todos = [];
    }
  },
  // defining store mutations - end
  getters: {
    getTodos: (state) => {
      // return todos where completed is false
      return state.todos.filter(todo => !todo.completed);
    },
    getDoneTodos: (state) => {
      // return todos where completed is true
      return state.todos.filter(todo => todo.completed);
    },
    todoCount: (state) => {
      return state.todos.length;
    }
  }
});