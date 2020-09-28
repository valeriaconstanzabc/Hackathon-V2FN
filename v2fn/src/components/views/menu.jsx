import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

const Menu = (props) => {

return (

<div className="row containerMenu">
  <div className="col-3">
    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <a className="logo-nav" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"> 
      <img src="https://i.ibb.co/0ZHm0t0/EY-Logo-Beam-Tag-Stacked-RGB-EN-1.png">
      </img> 
      </a>
      <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
        Icon 
        <p className="txt-navlink">Home</p>
      </a>
      <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
        Icon 
        <p className="txt-navlink">Home</p>
      </a>
      <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
        Icon 
        <p className="txt-navlink">Home</p>
      </a>
    </div>
  </div>
</div>

)   
}

export default withRouter(Menu)