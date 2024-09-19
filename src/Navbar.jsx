
export default function Navbar(){
    return(
        <>
        <nav id="mainnavbar" className="navbar navbar-dark navbar-expand-md py-0 fixed-top">
<a href="#" className="navbar-brand">FanYogo</a>
<button className="navbar-toggler" data-toggle="collapse" data-target="#navlinks" aria-label="toggle menu">
  <span className="navbar-toggler-icon"> </span>
</button>
<div className="collapse navbar-collapse" id="navlinks">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a href="index.html" className="nav-link">HOME</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link">ABOUT US</a>
    </li>
     <li className="nav-item">
      <a href="#" className="nav-link">CONTACT</a>
    </li> 
  </ul>
</div>
</nav>
        </>
    )
}

