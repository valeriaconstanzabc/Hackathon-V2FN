import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


class Navbar extends React.Component {

  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }


  render() {
    return (
      
      <nav class="navbar navbar-inverse navbar-global navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Santhosh Vertical Nav Project</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-user navbar-right">
              <li><a href="#"><span class="glyphicon glyphicon-user"></span> Santhosh Giridara</a></li>
              <li><a href="#about"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
            </ul>
          </div>
      </div>
      </nav>
      <nav class="navbar-primary">
        <a href="#" class="btn-expand-collapse"><span class="glyphicon glyphicon-menu-left"></span></a>
        <ul class="navbar-primary-menu">
          <li>
            <a href="#"><span class="glyphicon glyphicon-list-alt"></span><span class="nav-label">Dashboard</span></a>
            <a href="#"><span class="glyphicon glyphicon-envelope"></span><span class="nav-label">Profile</span></a>
            <a href="#"><span class="glyphicon glyphicon-cog"></span><span class="nav-label">Settings</span></a>
            <a href="#"><span class="glyphicon glyphicon-film"></span><span class="nav-label">Notification</span></a>
            <a href="#"><span class="glyphicon glyphicon-calendar"></span><span class="nav-label">Monitor</span></a>
          </li>
        </ul>
      </nav>

    )
  }
};
Navbar = withRouter(Navbar);
export default Navbar;
