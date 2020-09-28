import React from 'react'
import { withRouter } from 'react-router-dom'
import { hiddenPassword, observer, saveInfoProfile } from '../Functions.js';
import { auth,db } from '../../firebase.js'
import firebase from 'firebase/app'

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
        props.history.push('/inicio')
    }

    const register = React.useCallback(async () => {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            await res.user.updateProfile({
                displayName: name,
            })
            await db.collection('usuarios').doc(userr.uid).add({
                photoURL: null,
                name: userr.displayName,
                email: userr.email,
                uid: userr.uid,
                state: true
            })
            setName('')
            setEmail('')
            setPass('')
            setError(null)
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

    // const saveInfoProfile = async () => {
    //     const user = auth.currentUser;
    //     const db = firebase.firestore()
    //     try {
    //       await db.collection('usuarios').doc().set({
    //         photoURL: null,
    //         name: user.displayName,
    //         email: user.email,
    //         uid: user.uid,
    //         state: true
    //       })
    //     } catch (error) { 
    //       console.log(error) 
    //     }
    // }

    return (
        <div className="containerSignIn">
            <form className="signInForm" onSubmit={processData}>
                <div className="modalSignIn">
                    <h1>¡Únete a EY!</h1>
                <div className="line"></div>
                
                <label htmlFor="name" className="text"><b>Nombre de usuario</b></label>
                <input 
                    type="text" 
                    className="name" 
                    placeholder="Lofche" 
                    name="name" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name}
                />
                
                <label htmlFor="email" className="text"><b>Correo Electrónico</b></label>
                <input 
                    type="text" 
                    className="email" 
                    placeholder="lofche@example.com" 
                    name="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                />
                <label htmlFor="psw" className="text"><b>Contraseña</b></label>
                <div className="containerPassword">
                    <input 
                        type="password" 
                        id="password" 
                        className="password" 
                        placeholder="Ingresa Contraseña" 
                        name="password" 
                        onChange={(e) => setPass(e.target.value)} 
                        value={pass}
                        autoComplete="on"
                    />
                    <span  type="button" className="passwordHidden" onClick={() => hiddenPassword()}><img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/ojo.png" className="eyePassword" alt="ojo"/></span>
                </div>
                
                {error && (<div className="error" id="errorMessage">{error}</div>)}
                <label className="textRegisterWith"><b>También puedes registrarte con:</b></label>
                <div className="registerWith">
                    <button type="submit" className="btngoogle" onClick={() => loginWithGoogle()}>
                        <img src="https://raw.githubusercontent.com/valeriaconstanzabc/SCL013-social-network/master/src/imagenes/google.png" alt="google" className="social-media-logo" id="google"/>
                    </button>
                </div>
                <div className="buttonNext">
                    <button type="submit" id="btnRegister" className="register">Registrar</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default withRouter(SignIn)