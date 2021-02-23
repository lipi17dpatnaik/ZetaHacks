import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Admin from "@/pages/Admin.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Notifications from "@/pages/Notifications.vue";
import Login from "@/pages/Login.vue"
import Register from "@/pages/Register.vue"
// import Register from "../views/Register.vue"


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/register",
    children: [
      {
	path: "login",
        name: "Login",
	component: Login
      },
      {
	path: "register",
	name: "Register",
	component: Register
      },
      {
	path: "admin",
	name: "Admin Dashboard",
	component: Admin
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
    ]
  }
];

export default routes;
