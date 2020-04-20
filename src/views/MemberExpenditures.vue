<template>
  <!-- Everthing coming from the template has to live inside a single element such as a div -->
  <div class="container">
    <p>Add an Expenditure</p>
    <form action="">
      <label for="expenditureName">Name:</label>
      <input
        type="text"
        class="form-control"
        id="deposit"
        placeholder="Car Payment"
      />
      <div>
        <label for="expenditureAmount">Amount</label>
        <input
          type="number"
          class="form-control"
          id="depositDescription"
          placeholder="$250"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>

    <!-- Display Cards will set up v-if to cycle through-->
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Expenditure Name</h5>
        <h6 class="card-subtitle mb-2 text-muted">Amount</h6>
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
