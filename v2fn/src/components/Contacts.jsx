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
                                <div className="imgProfileAndState">
                                    <img type ="button" className="btnHeaderOptions" alt="img" src="https://i.ibb.co/yfMZ7D3/Vectorhgh.png"/>
                                    <div className="estado"></div>
                                </div>
                                :
                                <div>
                                    <img type ="button" className="btnHeaderOptions" alt="img" src={item.photoURL}/>
                                    <div className="estado"></div>  
                                </div>
                            }
                            <div className="dropdownContentEdit">
                                <div className="containerHoverContactUser">
                                    <button className="editCrud"><img className="imgcontact" src="https://i.ibb.co/wh29ZLY/Group-52.png" alt=""/></button>
                                    <button className="deleteCrud"><img className="imgcontact" src="https://i.ibb.co/1229S1C/sssss.png" alt=""/></button>
                                    <h5 className="nameUserContacts">{item.name}</h5> 
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

