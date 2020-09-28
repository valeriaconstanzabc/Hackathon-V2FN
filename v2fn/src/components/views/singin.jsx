import React from 'react'
import { withRouter } from 'react-router-dom'
import { hiddenPassword, observer, saveInfoProfile } from '../Functions.js';
import { auth } from '../../firebase.js'
import firebase from 'firebase/app'
import { Link } from "react-router-dom";

const SignIn = (props) => {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const userr = auth.currentUser;

    if(userr) {
        props.history.push('/inicio')
    }

    const processData = e => {
        e.preventDefault()
        if (!name.trim()) {
            setError('* Ingresa Nombre y apellido')
            return
        }
        if (!email.trim()) {
            setError('* Ingrese email')
            return
        }
        if (!pass.trim()) {
            setError('* Ingrese contraseña')
            return
        }
        if (pass.length < 6) {
            setError('* Debe ser mayor a 6 carácteres')
            return
        }
        console.log('Pasando todas las validaciones')
        setError(null)
        register()
    }

    const register = React.useCallback(async () => {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            await res.user.updateProfile({
                displayName: name,
            })
            setName('')
            setEmail('')
            setPass('')
            setError(null)
            saveInfoProfile()
            observer()
        } catch (error) {
            console.log(error)
            if (error.code === 'auth/invalid-email') {
                setError('* El email ingresado no es válido')
                return
            }
            if (error.code === 'auth/email-already-in-use') {
                setError('* El email ya ha sido utilizado')
                return
            }
        }
    }, [ email, pass, name ])

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
                <Link to="/">
                    <img className="logoEYLogIn" src="https://i.ibb.co/gRfBrbG/EY-Logo-Beam-Tag-Stacked-RGB-EN-2.png" alt="logo EY"/>
                </Link>
                <div className="modalLogIn">                    
                    <label htmlFor="name" className="textLogIn"><b>Nombre de usuario</b></label>
                    <input 
                        type="text" 
                        className="email_login" 
                        placeholder="Nombre Apellido" 
                        name="name" 
                        onChange={(e) => setName(e.target.value)} 
                        value={name}
                    />
                    
                    <label htmlFor="email" className="textLogIn"><b>Email</b></label>
                    <input 
                        type="text" 
                        className="email_login" 
                        placeholder="email@example.com" 
                        name="email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}
                    />
                    <label htmlFor="psw" className="textLogIn"><b>Contraseña</b></label>
                    <div className="containerPassword">
                        <input 
                            type="password" 
                            id="password" 
                            className="password_login" 
                            placeholder="**********" 
                            name="password" 
                            onChange={(e) => setPass(e.target.value)} 
                            value={pass}
                            autoComplete="on"
                        />
                        <span type="button" className="passwordHidden" onClick={() => hiddenPassword()}><img alt="ojo" src="https://i.ibb.co/8YyQnYf/Vectorkjkh.png" className="eyePassword"/></span>
                    </div>
                    
                    {error && (<div className="error" id="errorMessage">{error}</div>)}
                    <div className="registerWith">
                        <button type="submit" className="btngoogle" onClick={() => loginWithGoogle()}>
                            <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/google.png" alt="google" className="social-media-logo" id="google"/>
                        </button>
                    </div>
                    <div className="containerInfoNextSingIn">
                        <div className="buttonNext">
                            <button type="submit" id="btnRegister" className="next_button">Registrar</button>
                        </div>
                    </div>
                </div>
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

export default withRouter(SignIn)
