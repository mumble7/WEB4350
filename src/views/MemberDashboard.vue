<template>
  <!-- Everthing coming from the template has to live inside a single element such as a div -->
  <div class="container">
    <p>Dashboard Text</p>
    <!-- Total Account Size -->
    <!-- Display Cards will set up v-if to cycle through-->
    <div class="row">
      <div class="col-sm">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Your bank account total:</h5>

            <p class="card-text">
              the total will go here
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Your last withdrawal: 'date'</h5>
            <p>This will be your amount</p>
            <p class="card-text">
              Description
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Your last deposit: 'date'</h5>
            <p>This will be your amount</p>
            <p class="card-text">
              Description
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Your total Expenditures</h5>
            <p>Amount total</p>
            <p class="card-text">
              maybe cycle through all the expenditures in 1 card or something?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //
};
</script>
<style scoped>
/* */
</style>
