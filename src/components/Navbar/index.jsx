import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Link to="/login" style={{ padding: 5 }}>
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
