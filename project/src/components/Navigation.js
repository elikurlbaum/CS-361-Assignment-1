import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="Navigation">
       <Link className="nav-route" id="nav-route-home" to="/">Home</Link>
       <Link className="nav-route" id="nav-route-about" to="/about">About</Link>
       <Link className="nav-route" id="nav-route-search" to="/search">Search</Link>
    </nav>
  );
}

export default Navigation;