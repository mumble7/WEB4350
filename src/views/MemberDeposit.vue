<template>
  <!-- Everthing coming from the template has to live inside a single element such as a div -->
  <div class="container">
    <p>Member Deposit</p>
    <form action="">
      <label for="fName">Deposit Amount</label>
      <input
        type="number"
        class="form-control"
        id="deposit"
        placeholder="$10.00"
      />
      <div>
        <label for="depositDescription">Deposit Description</label>
        <input
          type="text"
          class="form-control"
          id="depositDescription"
          placeholder="Got paid for that stuff."
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>

    <!-- Display Cards will set up v-if to cycle through-->
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">This will be the amount</h5>
        <h6 class="card-subtitle mb-2 text-muted">This will be the date</h6>
        <p class="card-text">
          This is the description....
        </p>
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
button {
  margin-top: 2em;
}
</style>
