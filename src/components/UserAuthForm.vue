<template>
  <form>
    <div class="form-group" v-if="hasName">
      <label for="fName">First Name</label>
      <input
        type="text"
        class="form-control"
        id="fName"
        placeholder="John"
        v-model="userInfo.fName"
        :rules="[required('fname')]"
      />
    </div>
    <div class="form-group" v-if="hasName">
      <label for="lName">Last Name</label>
      <input
        type="text"
        class="form-control"
        id="lName"
        placeholder="Wick"
        v-model="userInfo.lName"
        :rules="[required('lname')]"
      />
    </div>

    <div class="form-group">
      <label for="contactEmail">Email address</label>
      <input
        type="email"
        class="form-control"
        id="useremail"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="userInfo.email"
        :rules="[required('email'), emailFormat()]"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        class="form-control"
        id="password"
        placeholder="Password"
        v-model="userInfo.password"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        counter="true"
        :rules="[required('password'), minLength('password', 8)]"
      /><button @click="showPassword = !showPassword">Show Password</button>
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      @click="submitForm(userInfo)"
      :disabled="!valid"
    >
      {{ buttonText }}
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
      userInfo: {
        fname: "",
        lname: "",
        email: "",
        password: "",
      },
      ...validations,
    };
  },
  props: ["submitForm", "buttonText", "hasName"],
};
</script>
