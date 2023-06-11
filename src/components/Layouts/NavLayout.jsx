import { splitProps } from "solid-js";

// Navbar, and children are required props
function NavLayout(props) {
  return (
    <section className="h-full grid grid-rows-[60px_1fr]">
      <div>{props?.navbar}</div>
      <div>{props?.children}</div>
    </section>
  );
}

export default NavLayout;
