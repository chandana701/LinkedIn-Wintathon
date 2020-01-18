import Index from "./views/Index.jsx";
import Profile from "./views/examples/Profile.jsx";
// import Maps from "./views/examples/Maps.jsx";
import Register from "./views/examples/Register.jsx";
import Login from "./views/examples/Login.jsx";
import Projects from "./views/examples/Projects.jsx";
import Tables from "./views/examples/Tables.jsx";
import ProfileComparision from "./views/examples/ProfileComparision.jsx";
import DetailView from "./views/examples/DetailView.jsx";
import Metrics from "./views/examples/Metrics.jsx";
import Github from "./views/examples/Github.jsx";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/git",
    name: "Github",
    icon: "ni ni-tv-2 text-primary",
    component: Github,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/ProfileComparision",
    name: "Profiles",
    icon: "ni ni-bullet-list-67 text-red",
    component: ProfileComparision,
    layout: "/admin"
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "ni ni-bullet-list-67 text-red",
    component: Projects,
    layout: "/admin"
  },
  {
    path: "/detailView",
    name: "DetailView",
    icon: "ni ni-bullet-list-67 text-red",
    component: DetailView,
    layout: "/admin"
  },
  {
    path: "/metrics",
    name: "Metrics",
    icon: "ni ni-bullet-list-67 text-red",
    component: Metrics,
    layout: "/admin"
  },


  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
