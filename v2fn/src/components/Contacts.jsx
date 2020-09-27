import React from 'react'
import { auth, db } from '../firebase.js';

const Contacts = () => {

    const [ infoContactsfoUser, setInfoContacts ] = React.useState([])
    const user = auth.currentUser;

    React.useEffect(() => {
        const contacts = async () => {
          try {
            await db.collection('usuarios').onSnapshot(
              (snap => {
                const arrayData = snap.docs.map(doc => ({id: doc.id, ...doc.data()}))
                const userPresent = arrayData.filter( item => item.email !== user.email)
                console.log(userPresent)
                setInfoContacts(userPresent) 
              }))
          } catch (error) {
              console.log(error)
          }
      }
        contacts()
    }, [ user.email, setInfoContacts ])

    return (
        <div className="containerContacts">
            <div className="containerColorContacts">
                {   
                    infoContactsfoUser.map((item, index) => (
                        <div className="containerContactUser" key={index}>
                            {
                                item.photoURL === null ?
                                <img type ="button" className="btnHeaderOptions" alt="img" src="https://i.ibb.co/RDg954s/usuario-sin-foto.png"/>
                                :
                                <img type ="button" className="btnHeaderOptions" alt="img" src={item.photoURL}/>  
                            }
                            <div className="dropdownContentEdit">
                                <div className="containerHoverContactUser">
                                    <button className="editCrud"><img className="imgcontact" src="https://i.ibb.co/Gn6dcbX/Group-52.png" alt=""/></button>
                                    <button className="deleteCrud"><img className="imgcontact" src="https://i.ibb.co/st8Yj85/sssss.png" alt=""/></button>
                                    <h5 className="nameUser">{item.name}</h5> 
                                </div> 
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Contacts
