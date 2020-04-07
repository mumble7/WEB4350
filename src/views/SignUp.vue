<template>
  <div class="container">
    <h1>Sign Up</h1>
    <UserAuthForm submitForm="registerUser" buttonText="Apply" hasName="true" />
  </div>
</template>
<script>
import UserAuthForm from "@/components/UserAuthForm.vue";
export default {
  components: {
    UserAuthForm,
  },
  methods: {
    async registerUser(registrationInfo) {
      let user = await this.$store.dispatch("registerUser", registrationInfo);
      if (user.error) {
        alert(user.error);
      } else {
        alert("You are registered!, " + user.name);
      }
    },
  },
};
</script>
