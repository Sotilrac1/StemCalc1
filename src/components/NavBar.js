export default function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Stem Calc
      </a>
      <ul className="active">
        <li>
          <a href="/calculator" className="menu-item">
            Calculator
          </a>
        </li>
        <li>
          <a href="/about" className="menu-item">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

//export default NavBar;
