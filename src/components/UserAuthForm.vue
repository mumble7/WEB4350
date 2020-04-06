<template>
  <form>
    <h1>Sign In</h1>

    <div class="form-group">
      <label for="contactEmail">Email address</label>
      <input
        type="email"
        class="form-control"
        id="useremail"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="loginInfo.email"
        :rules="[required('email'), emailFormat()]"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        class="form-control"
        id="password"
        placeholder="Password"
        v-model="loginInfo.password"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        counter="true"
        :rules="[required('password'), minLength('password', 8)]"
      /><button @click="showPassword = !showPassword">Show Password</button>
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      @click="submitForm(loginInfo)"
      :disabled="!valid"
    >
      Login
    </button>
  </form>
</template>

<script>
import validations from "@/utils/validations";

export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      loginInfo: {
        email: "",
        password: "",
      },
      ...validations,
    };
  },
  props: ["submitForm", "buttonText", "hasName"],
};
</script>
