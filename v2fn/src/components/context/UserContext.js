import React from 'react'
import { auth, db } from '../../firebase.js';
import firebase from 'firebase/app'


let UserContext = React.createContext()
let { Provider, Consumer } = UserContext

function UserProvider({ children }) {

    const [suma, setSuma] = React.useState(0)
    const user = auth.currentUser;

    const sumadepuntosboton1 = () => {
        setSuma(suma + 3)
        lala()
    }

    const lala = async () => {
        const db = firebase.firestore()
        try {
            await db.collection('sumaPuntos').doc(user.uid).update({
                puntaje: suma
            })
        
        } catch (error) { 
        console.log(error) 
        }
    }

    React.useEffect(() => {
        const saveInfoProfile = async () => {
            const db = firebase.firestore()
            try {
            await db.collection('sumaPuntos').doc(user.uid).set({
                email: user.email,
                uid: user.uid,
                puntaje: suma
            })
            
            } catch (error) { 
            console.log(error) 
            }
        }
        saveInfoProfile()
    }, [ user.email, user.uid, suma])

  return (
    <Provider value={{ suma, setSuma, user, sumadepuntosboton1
    }}>
      {children}
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }