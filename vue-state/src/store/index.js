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
        addTodo(state, item) {
            state.todos.unshift(item);
        }
    },
    // defining store mutations - end
    getters: {
        getTodos (state) {
          return state.todos;
        },
        todoCount (state) {
          return state.todos.length;
        }
      }
});