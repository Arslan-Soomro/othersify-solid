function Navbar() {
  return (
    <div className="relative z-10 flex justify-between p-4">
      <h3 className="text-xl border-bottom">Othersify</h3>
      <div className="flex items-center gap-4">
        <button>Login</button>
        <button>Sign Up</button>   
      </div>
    </div>
  );
}

export default Navbar;
