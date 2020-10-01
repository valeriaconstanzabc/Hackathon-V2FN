import React, { useContext } from 'react';
import useModal from 'react-hooks-use-modal';
import { UserContext } from '../context/UserContext.js'
import { pointsNotifications } from '../Functions.js'

export const ModalWC = () => {

  const [Modal, open, close] = useModal('root', {
    preventScroll:true 
  });
  let { sumadepuntosboton1 } = useContext(UserContext)
    const closee = () => {
      sumadepuntosboton1()
      close()
      pointsNotifications()
      
    }

  return (
    <div>
        <img onClick={open} className="imgIconMenu" id="stateWC" src="https://i.ibb.co/98qr1dv/Icon-Circle-WC.png"/>   
        <Modal>
          <div className="containerModal">
            <div className="tittleModal">
              <h3><u>En el baño</u></h3>
            </div>
            <div className="bodyModal">
              <img className="imgWC" src="https://i.ibb.co/HKHGL07/rafiki.png" alt=""/>
            </div>
            <div className="containerBtnVolver">
              <button className="btnModalVolver" onClick={() => closee()}>¡He vuelto!</button>
            </div>
          </div>
        </Modal>
    </div>
  )
}

export const ModalMeeting = () => {

  const [Modal, open, close] = useModal('root', {
    preventScroll:true 
  });

  let { sumadepuntosboton1 } = useContext(UserContext)

  const closee = () => {
    sumadepuntosboton1()
    close()
    pointsNotifications()
  }

  return (
    <div>
        <img onClick={open} className="imgIconMenu" id="stateWC" src="https://i.ibb.co/CB9Gdxf/Icon-Circle-Meet.png"/>   
        <Modal>
          <div className="containerModal">
            <div className="tittleModalMeeting">
              <h3><u>En Reunión</u></h3>
            </div>
            <div className="bodyModal">
              <img className="imgWC" src="https://i.ibb.co/cx55Y44/amico.png" alt=""/>
            </div>
            <div className="containerBtnVolver">
              <button className="btnModalVolver" onClick={() => closee()}>¡He vuelto!</button>
            </div>

          </div>
        </Modal>
    </div>
  )
}

export const ModalLunch = () => {

  const [Modal, open, close] = useModal('root', {
    preventScroll:true 
  });

  let { sumadepuntosboton1 } = useContext(UserContext)

  const closee = () => {
    sumadepuntosboton1()
    close()
    pointsNotifications()
  }

  return (
    <div>
        <img onClick={open} className="imgIconMenu" id="stateWC" src="https://i.ibb.co/7tmC1Rq/Icon-Circle-Lunch.png"/>   
        <Modal>
          <div className="containerModal">
            <div className="tittleModalLunch">
              <h3><u>Almorzando</u></h3>
            </div>
            <div className="bodyModal">
              <img className="imgWC" src="https://i.ibb.co/TM0PPCC/panaj.png" alt=""/>
            </div>
            <div className="containerBtnVolver">
              <button className="btnModalVolver" onClick={() => closee()}>¡He vuelto!</button>
            </div>

          </div>
        </Modal>
    </div>
  )
}

export const ModalBreak = () => {

  const [Modal, open, close] = useModal('root', {
    preventScroll:true 
  });

  let { sumadepuntosboton1 } = useContext(UserContext)

  const closee = () => {
    sumadepuntosboton1()
    close()
    pointsNotifications()
  }

  return (
    <div>
        <img onClick={open} className="imgIconMenu" id="stateWC" src="https://i.ibb.co/VxZ7GR9/Icon-Circle-break.png"/>   
        <Modal>
          <div className="containerModal">
            <div className="tittleModalBreak">
              <h3><u>En break</u></h3>
            </div>
            <div className="bodyModal">
              <img className="imgWC" src="https://i.ibb.co/54W53gW/dsdsfd.png" alt=""/>
            </div>
            <div className="containerBtnVolver">
              <button className="btnModalVolver" onClick={() => closee()}>¡He vuelto!</button>
            </div>
          </div>
        </Modal>
    </div>
  )
}

// export const Confeti = () => {

//   const [Modal, open, close] = useModal('root', {
//     preventScroll:true 
//   });
//   let { sumadepuntosboton1 } = useContext(UserContext)
//     const opeen = () => {
//       sumadepuntosboton1()
//       open()
//       pointsNotifications()
//     }

//   return (
//     <div>
//         <button className="btnModalVolver" onClick={() => opeen()}>¡He vuelto!</button>  
//         <div className="lalala"> 
//           <Modal>
//             <ConfettiCanvas />
//           </Modal>
//         </div>     
//     </div>
//   )
// }