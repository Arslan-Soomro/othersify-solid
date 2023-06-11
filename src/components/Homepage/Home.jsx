import NavLayout from "../Layouts/NavLayout";
import Navbar from "../Navbar";
import Hero from "./Hero";

function Home() {
  return (
    <NavLayout navbar={Navbar}>
      <Hero />
    </NavLayout>
  );
}

export default Home;
