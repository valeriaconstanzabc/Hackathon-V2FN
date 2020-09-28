import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap/Navbar';

const Menu = (props) => {

return (
  <nav className="navbar">

<div class="navmenu navmenu-default navmenu-fixed-left offcanvas-sm">
  <a class="navmenu-brand visible-md visible-lg" href="#"> <img src="https://i.ibb.co/0ZHm0t0/EY-Logo-Beam-Tag-Stacked-RGB-EN-1.png"></img> </a>
  <ul class="nav navmenu-nav">
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
  </ul>
</div>

<div class="navbar navbar-default navbar-fixed-top hidden-md hidden-lg">
  <button type="button" class="navbar-toggle" data-toggle="offcanvas" data-target=".navmenu">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
  <a class="navbar-brand" href="#">Project name</a>
</div>

</nav>

)   
}

export default withRouter(Menu)