import React from 'react';
import { withRouter } from 'react-router-dom';
import { ModalWC, ModalBreak, ModalMeeting, ModalLunch } from './modalWC.jsx';
import { ToastContainer } from 'react-toastify';

const Menu = (props) => {

  const irAInicio = () => {
    props.history.push('/inicio')
  }

return (

<div className="row containerMenu">
  <div className="col-3">
  <ToastContainer
    className="hdk9ldvk93"
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a className="logo-nav"  data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"> 
        <img src="https://i.ibb.co/0ZHm0t0/EY-Logo-Beam-Tag-Stacked-RGB-EN-1.png">
        </img> 
      </a>
      
      <a onClick={() => irAInicio()} className="nav-link active"  data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
        <img className="imgIconMenu" src="https://i.ibb.co/z7vSBfp/Home.png"/>
        <p className="txt-navlink">Inicio</p>
      </a>
      
      <a className="nav-link" id="v-pills-projects-tab" data-toggle="pill" href="#v-pills-projects" role="tab" aria-controls="v-pills-projects" aria-selected="false">
        <img className="imgIconMenu" src="https://i.ibb.co/bJHYNwL/Board.png"/>
        <p className="txt-navlink">Proyectos</p>
      </a>
      <a className="nav-link" id="v-pills-calendar-tab" data-toggle="pill" href="#v-pills-calendar" role="tab" aria-controls="v-pills-calendar" aria-selected="false">
        <img className="imgIconMenu" src="https://i.ibb.co/fxG9CWJ/Calendar.png"/>
        <p className="txt-navlink">Calendario</p>
      </a>
    </div>
    <div className="nav flex-column container-states">
      <a className="nav-link nav-states" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
        {<ModalWC/>}
        
      </a>
      <a className="nav-link nav-states" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
        {<ModalMeeting />}
      </a>
      <a className="nav-link nav-states" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
        {<ModalLunch />}
      </a>
      <a className="nav-link nav-states" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
        {<ModalBreak />}
      </a>
    </div>
  </div>
</div>

)   
}

export default withRouter(Menu)