import Hello from "@/src/components/Hello"
import Home from "@src/components/Homepage/Home";
import { Routes, Route } from "@solidjs/router";
import NavLayout from "./components/Layouts/NavLayout";

function App() {
  return (
    <div className="App h-full">
      <Routes>
        <Route path="/" component={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
