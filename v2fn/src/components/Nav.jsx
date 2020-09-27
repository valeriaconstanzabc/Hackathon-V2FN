import React from 'react'
import { auth } from '../firebase.js';
import { withRouter } from "react-router-dom";

const Nav = (props) => {
    const user = auth.currentUser;

    const cerrarSesion = () => {
        auth.signOut()
        .then(() => {
            props.history.push('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="containerColorNav">
            <div className="containerTwoNav">
                <div className="containerInputNav">
                    <img alt="lupa" src="https://i.ibb.co/FHJZfFn/Vector.png" className="image_buscar"/>
                    <input type="text" className="inputNav"/>
                </div>
                <div className="containerBtnsNav">
                    <button className="btnNav"><img className="imgNav" src="https://i.ibb.co/JtqnbfN/Group-1.png" alt=""/></button>
                    <button className="btnNav"><img className="imgNav" src="https://i.ibb.co/ts5QJbd/Vector-2.png" alt=""/></button>
                </div>
                <div className="containerImgUserNav">
                    {
                        user.photoURL === null ?
                        <img type ="button" className="imgUserNav" alt="img" src="https://i.ibb.co/RDg954s/usuario-sin-foto.png"/>
                        :
                        <img type ="button" className="imgUserNav" alt="img" src={user.photoURL}/>  
                    }
                    <button className="btnNav"><img className="imgArrowNav" src="https://i.ibb.co/dL5nwZg/Vector-1.png" alt=""/></button>
                    <div className="dropdownContent">
                        <button onClick={() => cerrarSesion()} className="logout">Cerrar sesión</button>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Nav)
