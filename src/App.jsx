import Hello from "@/src/components/Hello"
import Home from "@src/components/Homepage/Home";
import { Routes, Route } from "@solidjs/router";
import NavLayout from "./components/Layouts/NavLayout";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import EmailRoutes from "./components/EmailApp/EmailRoutes";
import Navbar from "./components/ui/Navbar";
import { Toaster } from "solid-toast";

function App() {
  return (
    <div className="App h-full">
      <Toaster />
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/signup" component={<Signup />} />
        <Route path="/login" component={<Login />} />
        {/* App Routes */}
        <Route path="/a"> 
        <Navbar />
          {/* Email App Routes */}
          <EmailRoutes />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
