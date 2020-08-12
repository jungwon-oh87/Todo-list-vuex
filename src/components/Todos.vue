<template>
  <div>
    <h2>To Do List</h2>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{todo.title}}
        <i class="fa fa-trash"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "todos",
  methods: {
    ...mapActions(["fetchTodos"]),
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
  /* height: 10px; */
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>