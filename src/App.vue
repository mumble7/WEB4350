<template>
  <!-- 
  I was planning on running just v-if/v-else to display the 2 navs depending on if they're logged in what will display in the header.
 -->
  <!-- NAVIGATION -->
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="nav-link" to="/home">BluBoard</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto"></ul>
          <span class>
            <ul class="navbar-nav">
               <li class="nav-item">
                <router-link class="nav-link" to="/about"
                  >About</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/expenditures"
                  >Expenditures</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/transactions"
                  >Transactions</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/analytics"
                  >Analytics</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact"
                  >Contact</router-link
                >
              </li>
              <div v-if="currentUser.name">
                {{ currentUser.name }}
                <button @click="logoutUser">Logout</button>
              </div>
              <div v-else>
                <li class="nav-item" to="/signin">
                  <router-link class="nav-link" to="/signin"
                    >Sign In</router-link
                  >
                </li>
                <li class="nav-item">
                  <button type="button" class="btn btn-light">
                    <router-link class="nav-link" to="/signup"
                      >Sign Up</router-link
                    >
                  </button>
                </li>
              </div>
            </ul>
          </span>
        </div>
      </nav>
      <!-- FOOTER -->
      <!-- 
        I'm running into some sticky issues with the footer 
        -->
      <!-- <div class="footBar">
        <nav class="navbar fixed-bottom navbar-light bg-light footerFixed">
          <a class="navbar-brand" href="#">Fixed bottom</a>
          <div>
            <ul class="">
              <li class="">Brooklyn Child</li>
              <li class="">Skyler Wilden</li>
              <li class="">Jordan Yazzie</li>
              <li class="">Brenden Morris</li>
              <li class="">Matthew K. Young</li>
            </ul>
          </div>
        </nav>
      </div>-->

      <!-- END CONTENT -->
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("loadCurrentUser");
  },
  components: {},
  computed: {
    ...mapState(["currentUser"])
  },
  data: () => ({}),
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav{
  background-color: lightblue;
  color: black;
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: lightblue;
  width: 1024px;
  min-height: 300px;
}
</style>
