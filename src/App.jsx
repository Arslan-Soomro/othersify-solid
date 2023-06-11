import Hello from "@/src/components/Hello"
import Home from "@src/components/Homepage/Home";
import { Routes, Route } from "@solidjs/router";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" component={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
