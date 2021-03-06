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
  if( hour >= 9 && hour < 10 ){
    toast("¿Como vas con el proyecto? tanquiilo! tu puedes!")
}
  if( hour >= 10 && hour < 11 ){
    toast("¿Haz tomado agua? este sería un buen momento para hidratar tu cuerpo")
  }
  if( hour >= 11 && hour < 13 ){
      toast("¿Ya viste el gran premio? mientras más interacciones hagas, más cerca estarás de él!!!")
  }
  if( hour >= 14 && hour < 16 ){
      toast("Recuerda tomar un breack! Despeja tu mente y estira las piernas")
  }
  if( hour >= 16 && hour < 17 ){
      toast("¿Haz tomado agua? este sería un buen momento para hidratar tu cuerpo")
  }
  if( hour >= 17 && hour < 19 ){
    toast("Recuerda tomar un breack! Despeja tu mente y estira las piernas")
}
  if( hour >= 19 && hour < 22 ){
      toast("Ya es hora de irse! Descansa y desconecta la mente")
  }
  if( hour >= 20 && hour < 21 ){
      toast("¿Tú por aquí? Es momento de descansar!")
  }
}

export const pointsNotifications = () => {
  toast("Felitaciones! haz ganado 3 puntos")
}

export const activeNotification = () => {
  notifications()
}

export const saveInfoProfile = async () => {
  const user = auth.currentUser;
  const db = firebase.firestore()
  try {
    await db.collection('usuarios').doc(user.uid).set({
      photoURL: user.photoURL,
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      state: true
    })
  } catch (error) { 
    console.log(error) 
  }
}