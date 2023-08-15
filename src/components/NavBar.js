export default function NavBar() {
  
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Stem Calc
      </a>
      <ul>
          <CustomLink href="/calculator">Calculator</CustomLink>
          <CustomLink href="/about">About</CustomLink>
      </ul>
    </nav>
  );
}


function CustomLink({href,children,...props}){
  const path = window.location.pathname
  return(
    <li className={path === href ? "active":""}> 
    <a href={href} {...props}>
      {children}
    </a>
  </li>
  )

}

//export default NavBar;
