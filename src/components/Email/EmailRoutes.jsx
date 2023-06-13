import { Route } from "@solidjs/router";
import EmailDashboard from "./EmailDashboard";
import Navbar from "@components/ui/Navbar";
import { Outlet } from "@solidjs/router";
import NavLayout from "../Layouts/NavLayout";

function WithNav() {

    return <NavLayout navbar={<Navbar />}><Outlet /></NavLayout>
}

function EmailRoutes() {
  return (
    <Route path="/email" component={WithNav}>
      <Route path="/app" component={<EmailDashboard />} />
    </Route>
  );
}

export default EmailRoutes;
