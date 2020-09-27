import { auth } from '../firebase.js';
import firebase from 'firebase/app'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const hiddenPassword = () => {
    const x = document.querySelector('.password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };

export const observer = () => {
  auth.onAuthStateChanged((user) => {
      if (user) {
          console.log('existe usuario activo');
          console.log('*******************');
          console.log(user.emailVerified);
          console.log('*******************');
      } else {
          //    User is signed out.
          console.log('no existe usuario activo');
      }
  });
}

export const notifications = () => {
  let date = new Date();
  let hour = date.getHours();
  if( hour >= 8 && hour < 9 ){
      toast("Buenas Días! Recuerda partir el día organizando tus metas")
  }
  if( hour >= 11 && hour < 13 ){
      toast("¿Ya viste el gran premio? mientras más interacciones hagas, más cerca estarás de él!!!")
  }
  if( hour >= 14 && hour < 16 ){
      toast("Recuerda tomarte un breack! Despeja tu mente y estira las piernas")
  }
  if( hour >= 16 && hour < 17 ){
      toast("¿Hz tomado agua? este sería un buen momento para hidratar tu cuerpo")
  }
  if( hour >= 17 && hour < 18 ){
      toast("Ya es hora de irse! Descansa y desconecta la mente")
  }
  if( hour >= 20 && hour < 21 ){
      toast("¿Tú por aquí? Es momento de descansar!")
  }
}

export const saveInfoProfile = async () => {
  const user = auth.currentUser;
  const db = firebase.firestore()
  try {
    await db.collection('usuarios').doc(user.uid).set({
      photoURL: user.photoURL,
      name: user.displayName,
      email: user.email,
      uid: user.uid
    })
  } catch (error) { 
    console.log(error) 
  }
}
