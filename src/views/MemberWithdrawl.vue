<template>
  <div class="container">
    <p>Member Withdrawl</p>
    <form action="">
      <label for="withdrawal">Withdrawal Amount</label>
      <input
        type="number"
        class="form-control"
        id="withdrawal"
        placeholder="$10.00"
      />
      <div>
        <label for="depositDescription">Withdrawal Description</label>
        <input
          type="text"
          class="form-control"
          id="withdrawalDescription"
          placeholder="Got to pay billy for friday night."
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Withdraw
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
