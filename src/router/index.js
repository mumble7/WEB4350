import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminUserList from "../views/admin/AdminUserList.vue";
import About from "../views/About.vue";
import Analytics from "../views/Analytics.vue";
import Contact from "../views/Contact.vue";
import Expenditures from "../views/Expenditures.vue";
import Transactions from "../views/Transactions.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

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
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
