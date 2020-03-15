<template>
  <div class="home">
    <HomePage />
    <!-- CONTENT BEGIN -->
    <!-- CONTACT FORM -->
    <div class="container">
      <form>
        <h1>Contact Us</h1>
        <div class="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input class="form-control" type="text" placeholder="Name...Nickname...Username..." />
        </div>
        <div class="form-group">
          <label for="contactEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="We're looking forward to hearing from you!"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <!-- CONTENT END -->
  </div>
</template>