<!-- Work done by Matt and Brooklyn-->
<template>
  <div class="about">
     <!-- Hero -->
     <!-- Hero -->
    <div class="jumbotron jumbotron-fluid hero">
      <div class="container">
        <h1 class="display-4">
          What is BluBoard, and how does it work?
        </h1>
        <div class="button_cont" align="center"><router-link align = "center" class="nav-link herobutton" to="/signup">Sign Up for Free</router-link></div>
      </div>
    </div>

    <!-- see everything in one place -->
    <div class="container-fluid grey">
      <div class="row">
        <div class="col">
          <img class="heroImg" src="../assets/budgetmadesimple.jpg" alt />
        </div>
        <div class="col">
          <h2>See everything in one place</h2>
          <h4>
            We bring together everything from balances and bills to categoires and more. It's your financial life, in one place that's easy to understand. 
           </h4>
        </div>
      </div>
    </div>

    <!-- simple and free to set up -->
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h2>Simple and free to set up</h2>
          <h4>
            It's free and easy to get started! In just minutes, you'll see where your money is going and get ideas on how to stretch it farther.
          </h4>
        </div>
        <div class="col">
          <img class="heroImg" src="../assets/bills.jpg" alt />
        </div>
      </div>
    </div>

     <!-- stay up to date -->
    <div class="container-fluid grey">
      <div class="row">
        <div class="col">
          <img class="heroImg" src="../assets/budgetmadesimple.jpg" alt />
        </div>
        <div class="col">
          <h2>Stay up-to-date as it happens</h2>
          <h4>
            BluBoard automatically updates and categorizes your information. From back accounts to credit cards - we'll crunch the numbers as they happen so you know where you stand. 
          </h4>
        </div>
      </div>
    </div>
    <!-- CONTENT END -->

<div class="container signUp">
      <img class="award" src="../assets/award-solid.svg" alt="award" />
      <div class>
        <h2>Sign up for BluBoard today</h2>
        <h4>
          From budgets and bills plus more, you'll discover the effortless way to stay on top of it all.
        </h4>
      </div>
    </div>

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
              <li><router-link align = "center" class="nav-link" to="/about">About</router-link></li>
              <li><router-link align = "center" class="nav-link" to="/expenditures">Expenditures</router-link></li>
              <li><router-link align = "center" class="nav-link" to="/transactions">Transactions</router-link></li>
              <li><router-link align = "center" class="nav-link" to="/analytics">Analytics</router-link></li>
              <li><router-link align = "center" class="nav-link" to="/signin">Sign In</router-link></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
     </footer>
      <!-- Site footer ends -->

  </div>
</template>

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
  background-color: darkblue;
  padding-top: 5rem;
  padding-bottom: 5rem;
  max-width: 100%;
  color: white;

}

.heroImg {
  max-width: 100%;
}

.col{
  padding-top: 15px;
}

.grey{
  background-color: lightgrey;
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
.site-footer .nav-link
{
  color:white;
}
.site-footer .nav-link:hover
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
