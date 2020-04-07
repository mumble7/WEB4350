import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminUserList from "../views/admin/AdminUserList.vue";
import About from "../views/About.vue";
import Analytics from "../views/Analytics.vue";
import Contact from "../views/Contact.vue";
import Expenditures from "../views/Expenditures.vue";
import Transactions from "../views/Transactions.vue";
import Login from "../views/SignIn.vue";
import Register from "../views/SignUp.vue";
import MemberDashboard from "../views/MemberDashboard.vue";
import Member from "../views/Member.vue";
import MemberTransactions from "../views/MemberTransactions.vue";
import MemberDeposit from "../views/MemberDeposit.vue";
import MemberWithdrawl from "../views/MemberWithdrawl.vue";
import MemberExpenditures from "../views/MemberExpenditures.vue";
import MemberAnalytics from "../views/MemberAnalytics.vue";
import MemberProfile from "../views/MemberProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin/AdminUserList",
    name: "admin-user-list",
    component: AdminUserList,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: "/Expenditures",
    name: "Expenditures",
    component: Expenditures,
  },
  {
    path: "/Transactions",
    name: "Transactions",
    component: Transactions,
  },
  {
    path: "/Analytics",
    name: "Analytics",
    component: Analytics,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/SignIn",
    name: "Login",
    component: Login,
  },
  {
    path: "/SignUp",
    name: "Register",
    component: Register,
  },
  //
  // Router Guarded Pages
  // Will move all of these paths inside of the child underneath /member
  //
  { path: "/dashboard", name: "Dashboard", component: MemberDashboard },
  {
    path: "/MemberTransactions",
    name: "MemberTransactions",
    component: MemberTransactions,
  },
  {
    path: "/MemberDeposit",
    name: "MemberDeposit",
    component: MemberDeposit,
  },
  {
    path: "/MemberWithdrawl",
    name: "MemberWithdrawl",
    component: MemberWithdrawl,
  },
  {
    path: "/MemberExpenditures",
    name: "MemberExpenditures",
    component: MemberExpenditures,
  },
  {
    path: "/MemberAnalytics",
    name: "MemberAnalytics",
    component: MemberAnalytics,
  },
  {
    path: "/MemberProfile",
    name: "MemberProfile",
    component: MemberProfile,
  },
  // Router Guarded Pages inside member children
  {
    path: "/member",
    name: "member",
    component: Member,
    //THIS IS AUTHENTICATION - ONCE IN PLACE YOU NEED TO LOGIN TO ACCESS ALL Child Pages
    // beforeEnter(to, from, next) {
    //   let currentUser = JSON.parse(window.localStoraged.currentUser);
    //   if (currentUser && currentUser.name) {
    //     next();
    //   } else {
    //     next("/");
    //   }
    // },
    // children: [
    //   { path: "dashboard", name: "Dashboard", component: MemberDashboard },
    //   {
    //     path: "MemberTransactions",
    //     name: "MemberTransactions",
    //     component: MemberTransactions,
    //   }, //The rest of my protected routes will go here
    // ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
