<template>
  <div>
    <h2>To Do List</h2>
    <div class="legend">
      <span>Double click to mark as completed</span>
      <span>
        <span class="incomplete-box"></span>= Incomplete
      </span>
      <span>
        <div class="complete-box"></div>= Complete
      </span>
    </div>
    <div class="todos">
      <div @dblclick="onDblClick(todo)" v-for="todo in allTodos" :key="todo.id" class="todo">
        {{todo.title}}
        <i @click="deleteTodo(todo.id)" class="fa fa-trash"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 0.5rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  width: 20px;
  height: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  border: 1px solid red;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>