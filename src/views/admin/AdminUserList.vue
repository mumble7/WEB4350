<template>
  <div>
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
      <button @click="loginUser(user)">Login</button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["users"]),
  },
  mounted() {
    this.$store.dispatch("loadUsers");
  },
  methods: {
    loginUser(user) {
      this.$store.dispatch("loginUser", user);
    },
  },
};
</script>
<style scoped></style>
