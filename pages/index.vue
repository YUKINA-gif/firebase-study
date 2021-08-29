<template>
  <div>
    <input type="text" v-model="todo" />
    <button @click="sendTodo">Create</button>
    <div v-for="list in lists" :key="list.id">
      <input type="text" v-model="list.todo.todo" />
      <button @click="updateTodo(list)">Update</button>
      <button @click="deleteTodo(list)">Delete</button>
    </div>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
  data() {
    return {
      todo: "",
      lists: []
    };
  },
  mounted() {
    this.getTodo();
  },
  methods: {
    getTodo() {
      const db = firebase.firestore();
      const data = db.collection("todo");
      data
        .get()
        .then(res => {
          res.forEach(todo => {
            this.lists.push({ todo: todo.data(), id: todo.id });
          });
        })
        .catch(e => {
          console.log("取得できませんでした");
        });
    },
    sendTodo() {
      const db = firebase.firestore();
      const data = db.collection("todo");
      data
        .add({
          todo: this.todo
        })
        .then(res => {
          alert("送信完了しました");
          this.todo = "";
          this.$router.go({
            path: this.$router.currentRoute.path,
            force: true
          });
        })
        .catch(e => {
          console.log(e, "送信できませんでした");
        });
    },
    updateTodo(list) {
      const db = firebase.firestore();
      db.collection("todo")
        .doc(list.id)
        .update({
          todo: list.todo.todo
        })
        .then(res => {
          alert("更新完了しました");
        })
        .catch(e => {
          console.log("更新できませんでした");
        });
    },
    deleteTodo(list) {
      const db = firebase.firestore();
      db.collection("todo")
        .doc(list.id)
        .delete()
        .then(res => {
          alert("削除しました");
          this.$router.go({
            path: this.$router.currentRoute.path,
            force: true
          });
        })
        .catch(e => {
          console.log("削除できませんでした");
        });
    }
  }
};
</script>
