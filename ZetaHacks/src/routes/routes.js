import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Admin from "@/pages/Admin.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Payments from "@/pages/Payments.vue";
import Icons from "@/pages/Icons.vue";
import Notifications from "@/pages/Notifications.vue";
import Login from "@/pages/Login.vue"
// import Register from "../views/Register.vue"


const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/login",
    children: [
      {
	path: "login",
        name: "Login",
	component: Login
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
        name: "Manage Payments",
        component: Payments
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
