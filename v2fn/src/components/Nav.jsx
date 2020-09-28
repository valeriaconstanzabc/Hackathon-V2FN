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
                <div className="containerNavTwo">
                    <div className="containerBtnsNav">
                        <button className="btnNav"><img className="imgNav" src="https://i.ibb.co/JtqnbfN/Group-1.png" alt=""/></button>
                        <button className="btnNav"><img className="imgNav" src="https://i.ibb.co/7KGG9Ry/Group.png" alt=""/></button>
                            <p className="btnNav">#1</p>
                    </div>
                    <div className="containerImgUserNav">
                        <div className="containerImgUserNav2">
                            {
                                user.photoURL === null ?
                                <img type ="button" className="imgUserNav" alt="img" src="https://i.ibb.co/RDg954s/usuario-sin-foto.png"/>
                                :
                                <img type ="button" className="imgUserNav" alt="img" src={user.photoURL}/>  
                            }
                            <div className="containerNameAndPoints">
                                <h5 className="nameNav">{user.displayName}</h5>
                                <p className="pointsNav">Nivel 1 - {user.suma} pts.</p>
                            </div>
                        </div>
                        <div className="containerSignOutUserNav">
                            <button className="btnNav"><img className="imgNav" src="https://i.ibb.co/ts5QJbd/Vector-2.png" alt=""/></button>
                            <div className="dropdownContent">
                                <button onClick={() => cerrarSesion()} className="logout">Cerrar sesión</button>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Nav)
