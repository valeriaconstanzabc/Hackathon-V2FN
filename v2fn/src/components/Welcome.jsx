import React from 'react'
import { Link } from "react-router-dom";
import { activeNotification } from '../components/Functions.js'


export const Welcome = () => {
    return (
        <div className="containerWelcome">
            <div className="containerOneWelcome">

                <div className="containerOneWelcome-fila1">
                    <div className="uno">
                        <Link to="/board">
                            <img className="tareaEnCurso" src="https://i.ibb.co/k2QMrW1/Resume-tarea.png" alt="tarea en curso"/>
                        </Link>
                    </div>
                    <div className="dos">
                        <img onClick={() => activeNotification() } className="color1" src="https://i.ibb.co/sF5t3xN/Group-105.png" alt="tarea en curso"/>
                        {/* <div className="color1"></div> */}
                    </div>
                </div>
                <div className="containerOneWelcome-fila2">
                    <img className="productividadSemanal" src="https://i.ibb.co/XyPchdh/Group-90.png" alt="productividad semanal"/>
                </div>
                <div className="containerOneWelcome-fila3">
                    <img className="color3" src="https://i.ibb.co/WzKqTq9/ads-Engagement.png" alt="productividad semanal"/>
                </div>
            </div>

            <div className="containerTwoWelcome">
                <div className="tres">
                    <img className="reuniones" src="https://i.ibb.co/ysPjyzt/Group-104.png" alt="reuniones"/>
                </div>
                <div className="cuatro">
                    <img className="color2" src="https://i.ibb.co/zJDsJr3/Group-103.png" alt="reuniones"/>
                </div>
            </div>
        </div>
    )
}

export default Welcome
