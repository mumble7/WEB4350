<template>
  <div class="home">
    <!-- CONTENT BEGIN -->
    <!-- CONTACT FORM -->
    <div class="container"><UserAuthForm :submitForm="loginUser" /></div>
    <!-- CONTENT END -->
  </div>
</template>
<script>
import UserAuthForm from "@/components/UserAuthForm";
export default {
  components: {
    UserAuthForm,
  },

  methods: {
    async loginUser(loginInfo) {
      let user = await this.$store.dispatch("loginUser", loginInfo);
      if (user.error) {
        alert(user.error);
      } else {
        alert("Signed In" + user.name);
      }
    },
  },
};
</script>
