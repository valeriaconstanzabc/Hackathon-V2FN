import React, { useContext } from 'react'
import { auth, db } from '../firebase.js';
import { withRouter } from "react-router-dom";
import { UserContext } from '../components/context/UserContext.js'
import firebase from 'firebase/app'

const Nav = (props) => {
    const user = auth.currentUser;
    let { setSuma, suma } = useContext(UserContext)
    const [ sumafirebase, setSumafirebase ] = React.useState([])

    const cerrarSesion = () => {
        auth.signOut()
        .then(() => {
            updateState()
            props.history.push('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const updateState = async () => {
        try {
          await db.collection('usuarios').doc(user.uid).update({
            state: false
          })
        } catch (error) { 
          console.log(error) 
        }
      }

      React.useEffect(() => {
        const sumaa = async () => {
          try {
            await db.collection('sumaPuntos').onSnapshot(
              (snap => {
                const arrayData = snap.docs.map(doc => ({id: doc.id, ...doc.data()}))
                const userPresent = arrayData.filter( item => item.email == user.email)

                setSumafirebase(userPresent) 
              }))
          } catch (error) {
              console.log(error)
          }
      }

        sumaa()
    }, [ setSuma])

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
                                <img type ="button" className="imgUserNav" alt="img" src="https://i.ibb.co/yfMZ7D3/Vectorhgh.png"/>
                                :
                                <img type ="button" className="imgUserNav" alt="img" src={user.photoURL}/>  
                            }
                            {
                                sumafirebase.map((item, index) => (
                                    <div key={index} className="containerNameAndPoints">
                                        <h5 className="nameNav">{user.displayName}</h5>
                                        <p className="pointsNav">Nivel 1 - {item.puntaje} pts.</p>
                                    </div>
                                ))
                            }
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
