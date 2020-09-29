import React from 'react';
import useModal from 'ract-hooks-use-modal';

export const ModalWC = () => {

  const [Modal, open, close] = useModal('root', {
    preventScroll:true 
  });

  return (
    <div>
      <button className="btnStateWC" onClick={open}>
        <img className="imgIconMenu" id="stateWC" src="https://i.ibb.co/98qr1dv/Icon-Circle-WC.png"/>   
      </button>

      <Modal>
        <div className="containerModal">
          <div className="tittleModal">
            <h3>En el baño</h3>
          </div>
          <div className="bodyModal">
            <img src="" alt=""/>
          </div>
          <div className="containerBtnVolver">
            <button className="btnModalVolver">¡He vuelto!</button>
          </div>

        </div>
      </Modal>
    </div>
  )
}

export default (ModalWC)