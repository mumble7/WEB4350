<template>
  <div class="home">
    <HomePage />
    <!-- CONTENT BEGIN -->
    <!-- CONTACT FORM -->
    <div class="container">
      <form>
        <h1>Sign In</h1>

        <div class="form-group">
          <label for="contactEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <!-- CONTENT END -->
  </div>
</template>