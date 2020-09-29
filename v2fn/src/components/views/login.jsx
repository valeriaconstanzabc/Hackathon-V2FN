import React from 'react'
import { withRouter } from 'react-router-dom'
import { hiddenPassword, observer, saveInfoProfile } from '../Functions.js';
import { Link } from "react-router-dom";
import { auth } from '../../firebase.js';
import firebase from 'firebase/app'

const LogIn = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const userr = auth.currentUser;
    
    if(userr) {
        props.history.push('/inicio')
    }

    const processData = (e) => {
        e.preventDefault()
        if(!email.trim() || !pass.trim()){
            setError('* Ingrese email')
            return
        }
        if(!pass.trim()){
            setError('* Ingrese contraseña')
            return
        }
        if(pass.length < 6){
            setError('* Contraseña incorrecta')
            return
        }
        console.log('Pasando todas las validaciones...')
        setError(null)
        observer()
        userLogin()
    }

    const userLogin = React.useCallback(async () => {
        try {
            const res = await auth.signInWithEmailAndPassword(email, pass)
            console.log(res.user)
            setEmail('')
            setPass('')
            setError(null)
            saveInfoProfile()
            props.history.push('/inicio')
        } catch (error) {
            console.log(error)
            if (error.code === 'auth/invalid-email') {
                setError('* Email no válido')
            }
            if (error.code === 'auth/user-not-found') {
                setError('* Email no registrado')
            }
            if (error.code === 'auth/wrong-password') {
                setError('* Contraseña incorrecta')
            }
        }
    }, [email, pass, props.history ])
 
    const loginWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(() => {
            saveInfoProfile()
            observer()
        }).catch(() => {
        });
    }

    return (
        <div className="containerLogIn">
            <form className="formLogIn" onSubmit={processData}>
                <img className="logoEYLogIn" src="https://i.ibb.co/gRfBrbG/EY-Logo-Beam-Tag-Stacked-RGB-EN-2.png" alt="logo EY"/>
                <div className="modalLogIn">
                    <h1 className="LogInTittle">Iniciar Sesión</h1>
                
                    <label htmlFor="email" className="textLogIn"><b>Email</b></label>
                    <input 
                        type="text" 
                        className="email_login" 
                        placeholder="email@example.com" 
                        name="email" 
                        onChange={ e => setEmail(e.target.value) }
                        value={email}
                    />
                
                    <label htmlFor="psw" className="textLogIn"><b>Contraseña</b></label>
                    <div className="containerPassword">
                        <input 
                            type="password" 
                            id="password_login" 
                            className="password_login" 
                            placeholder="**********" 
                            name="password" 
                            autoComplete="on"
                            onChange={ e => setPass(e.target.value) }
                            value={pass}
                        />
                        <span type="button" className="passwordHidden" onClick={() => hiddenPassword()}><img alt="ojo" src="https://i.ibb.co/8YyQnYf/Vectorkjkh.png" className="eyePassword"/></span>
                    </div>
                    
                    {error && (<div className="error" id="errorMessage">{error}</div>)}
                    <div className="containerInfoNextSingIn">
                        <div className="buttonNext">
                            <button type="submit" id="next_button" className="next_button">Continuar</button>
                        </div>
                        <div className="registerWith">
                            <button type="submit" className="btngoogle" onClick={() => loginWithGoogle()}>
                                <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/google.png" alt="google" className="social-media-logo" id="google"/>
                            </button>
                            <label className="googleNext" onClick={() => loginWithGoogle()}><b><u>Continuar con google</u></b></label>
                        </div>
                    </div>
                    <div className="containerBtnNextSingIn">
                        <label>¿No tienes cuenta?</label>
                        <Link to="/registro">
                            <label className="registerHere"><b><u>Regístrate aquí</u></b></label>
                        </Link>
                    </div>
                </div>
                <h6 className="footerLogIn"><u>Privacy Policity</u> and <u>Terms of Service</u></h6>
            </form>
            <div className="InfoSoftwareLogIn">
                <h1 className="tittleApp">Nombre Software</h1>
                <img className="imgApp" src="https://i.ibb.co/dGwpCSs/rafiki.png" alt="imgAPP"/>
                <p className="definitionApp">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Lorem pellentesque hendrerit vitae quis. Massa erat risus amet 
                phasellus non eget eget. Libero.
                </p>
            </div>
        </div>
    )
}

export default withRouter(LogIn)