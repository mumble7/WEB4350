<!-- Work done by Matt and Brooklyn-->
<template>
  <div>
    <HomePage />
    <!-- CONTENT -->

    <!-- Hero -->
    <div class="jumbotron jumbotron-fluid hero">
      <img class="heroImg" src="../assets/piggybank.jpg" alt />
      <div class="container">
        <div class="row">
          <div class="col-4">
            <h1 class="display-4">It's all coming together</h1>
            <p class="display-4"> When you're on top of your money, life is good.</p>
            <div class="button_cont" align="center"><a class="herobutton" href="signup.vue" target="_blank" rel="nofollow noopener">Sign up for free</a></div>
          </div>
        </div>
      </div>
    </div>

    <!-- FEATURES -->
    <div class="container">
      <div class="card-deck">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">All-in-one finances</h3>
            
            <img
              class="card-img-top"
              src="../assets/tasks-solid.svg"
              alt="Card image cap"
            />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Budgets Made Simple</h3>
            <img
              class="card-img-top"
              src="../assets/hand-holding-usd-solid.svg"
              alt="Card image cap"
            />
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h3 class="card-title">100% Visability</h3>
            <img
              class="card-img-top"
              src="../assets/glasses-solid.svg"
              alt="Card image cap"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Expenditures Example -->
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <img class="heroImg" src="../assets/budgetmadesimple.jpg" alt />
        </div>
        <div class="col">
          <h2>All your money in one place</h2>
          <p>
            We bring together all of your accounts, bills and more, so you can conveniently manage your finances from one dashbaord. 
         <br>
          > See all of your bills and money at a glance.
          <br>
          > Create budgets easily with tips tailered to you.
          <br>
          > Create categories to see exactly where your money goes each month.
          </p>
          <div class="button_cont" align="center"><a class="button" href="expenditures.vue" target="_blank" rel="nofollow noopener">More Information</a></div>
        </div>
      </div>
    </div>
    <!-- Details Example -->
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h2>Effortlessly stay on top of bills</h2>
          <p>
            Bills are now easier than ever to track. Simply add them to your dashboard to see and monitor them all at once. 
            <br>
            > Receive reminders for upcoming bills so you can plan ahead
            <br>
            > Never miss a payment with alerts when bills are default
            <br>
            > Get warned when funds are low so you know what you can pay
            </p>
           <div class="button_cont" align="center"><a class="button" href="transactions.vue" target="_blank" rel="nofollow noopener">Learn More</a></div>
        </div>
        <div class="col">
          <img class="heroImg" src="../assets/bills.jpg" alt />
        </div>
      </div>
    </div>
    <!-- CONTENT END -->

    <!-- It's ALL COMING TOGETHER -->
    <div class="container signUp">
      <img class="award" src="../assets/award-solid.svg" alt="award" />
      <div class>
        <h2>It's All Coming Together</h2>
        <p>
          We bring together all of your accounts, bills and more, so you can
          conveniently manage your finances from one dashboard.
        </p>
        <div class="button_cont" align="center"><a class="button" href="signup.vue" target="_blank" rel="nofollow noopener">Get Started Now!</a></div>
      </div>
    </div>
<br>
<br>
<br>
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