import Hello from "@/src/components/Hello"
import Home from "@src/components/Homepage/Home";
import { Routes, Route, useNavigate } from "@solidjs/router";
import NavLayout from "./components/Layouts/NavLayout";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import EmailRoutes from "./components/EmailApp/EmailRoutes";
import Navbar from "./components/ui/Navbar";
import { Toaster } from "solid-toast";
import EmailConfirmationRedirect from "./components/EmailConfirmationRedirect";
import { createSignal } from "solid-js";
import { useAuthContext } from "./context/AuthContext";
import { onMount } from "solid-js";

function App() {

  const { user } = useAuthContext();
  const navigate = useNavigate();

  onMount(() => {
    if(user()) { // Signed In User cannot access signup and login pages
      if(location.pathname.startsWith("/signup") || location.pathname.startsWith("/login")) navigate("/a/email/app", { replace: true });
    }else { // Signed Out User cannot access email app pages
      if(location.pathname.startsWith("/a")) navigate("/login", { replace: true });
    }
  })

  return (
    <div className="App h-full">
      <Toaster />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/auth/callback" component={EmailConfirmationRedirect} />
        {/* App Routes */}
        <Route path="/a">
          {/* Email App Routes */}
          <EmailRoutes />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
