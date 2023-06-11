import Hello from "@/src/components/Hello"
import Home from "@src/components/Homepage/Home";
import { Routes, Route } from "@solidjs/router";
import NavLayout from "./components/Layouts/NavLayout";
import Signup from "./components/Signup/Signup";

// TODO install tailwind forms

function App() {
  return (
    <div className="App h-full">
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/signup" component={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
