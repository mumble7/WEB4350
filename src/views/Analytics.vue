<template>
  <div>
    <!-- CONTENT -->

    <!-- Hero -->
    <div class="jumbotron jumbotron-fluid hero">
      <div class="container">
        <h1 class="display-4">Want to see where you stand?</h1>
        <br>
        <div class="button_cont" align="center"><a class="herobutton" href="signup.vue" target="_blank" rel="nofollow noopener">Sign up for free</a></div>
      </div>
    </div>

     <!-- Details Example -->
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h2>See all the details</h2>
         <h4>
          We will also offer an in-depth analytical look at their various areas
          of finances. So if you’re looking at a savings account you can see how
          it has grown and when as well as when you’ve spent. With bills you can
          see when you’ve paid and with debts you can see how much they’ve gone
          down as you’ve paid.
        </h4>
        </div>
        <div class="col">
          <img class="heroImg" src="../assets/billtracking.jpg" alt />
        </div>
      </div>
    </div>
    <!-- CONTENT END -->

    <!--footer-->
     
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">BluBook is all about bringing all of your financial demands into one place. We help to organize the financial strain that comes with budgeting. 
              This project was completed by Matthew Young, Brooklyn Child, Jordan Yazzie, Skyler Willden and Brenden Morris. 
            </p>
          </div>

         <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="about.vue">About Us</a></li>
              <li><a href="expenditures.vue">Expenditures</a></li>
              <li><a href="transactions.vue">Transactions</a></li>
              <li><a href="Analytics.vue">Analytics</a></li>
              <li><a href="SignIn.vue">Sign In</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
     </footer>
      <!-- Site footer ends -->
  </div>
</template>

<script></script>

<style scoped>
.hero {
  background-color: lightblue;
}
.heroImg {
  max-width: 100%;
}

.site-footer
{
  background-color:#737373;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:white;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:white;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:white;
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.herobutton {
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background: darkblue;
padding: 20px;
border-radius: 50px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;
}
.button {
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background: #60a3bc;
padding: 20px;
border-radius: 50px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;
}
.herobutton:hover, .button:hover {
text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
}
</style>
