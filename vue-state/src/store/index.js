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
      const i = state.todos.findIndex(todo => todo.id == item.item); 
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
      // return a count of the uncompleted todos length
      return state.todos.filter(todo => !todo.completed).length;
    }
  }
});