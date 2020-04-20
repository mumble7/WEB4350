<template>
  <div>
    <HomePage />
    <!-- CONTENT -->

    <!-- Hero -->
    <div class="jumbotron jumbotron-fluid hero">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <h1 class="display-4">All of your money in 1 place.</h1>
          </div>
          <div class="col-8">
            <img class="heroImg" src="../assets/Handphone.png" alt />
          </div>
        </div>
      </div>
    </div>

    <!-- FEATURES -->
    <div class="container">
      <div class="card-deck">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">All in 1 Finance</h5>
            <img
              class="card-img-top"
              src="../assets/Handphone.png"
              alt="Card image cap"
            />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Budgets Made Simple</h5>
            <img
              class="card-img-top"
              src="../assets/Handphone.png"
              alt="Card image cap"
            />
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">100% Visability</h5>
            <img
              class="card-img-top"
              src="../assets/Handphone.png"
              alt="Card image cap"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- It's ALL COMING TOGETHER -->
    <div class="container signUp">
      <img class="award" src="../assets/award-solid.svg" alt="award" />
      <div class>
        <h2>It's All Coming Together</h2>
        <p>
          We bring ogether all of your accounts, bills and more, so you can
          conveniently manage your finances from one dashboard.
        </p>
        <button>
          <router-link class="nav-link" to="/signup"
            >Sign Up for Free!</router-link
          >
        </button>
      </div>
    </div>

    <!-- CONTENT END -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/HomePage.vue";

export default {
  name: "Home",
  components: {
    HomePage,
  },
};
</script>

<style scoped>
.award {
  max-width: 5rem;
  max-height: 5rem;
}

.hero {
  background-color: lightblue;
}
.heroImg {
  max-width: 100%;
}

.signUp {
  background-color: lightblue;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>
