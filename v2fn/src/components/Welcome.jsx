import React from 'react'
import { Link } from "react-router-dom";

export const Welcome = () => {
    return (
        <div className="containerWelcome">
            <div className="containerOneWelcome">
                <div className="containerOneWelcome-fila1">
                    <div className="uno">
                        <Link to="/board">
                            <img className="tareaEnCurso" src="https://i.ibb.co/FYL2tN3/Resume-tarea.png" alt="tarea en curso"/>
                        </Link>
                    </div>
                    <div className="dos">
                        <img className="color1" src="https://i.ibb.co/FYL2tN3/Resume-tarea.png" alt="tarea en curso"/>
                        {/* <div className="color1"></div> */}
                    </div>
                </div>
                <div className="containerOneWelcome-fila2">
                    <img className="productividadSemanal" src="https://i.ibb.co/XyPchdh/Group-90.png" alt="productividad semanal"/>
                </div>
                <div className="containerOneWelcome-fila3">
                    <img className="color3" src="https://i.ibb.co/XyPchdh/Group-90.png" alt="productividad semanal"/>
                </div>
            </div>

            <div className="containerTwoWelcome">
                <div className="tres">
                    <img className="reuniones" src="https://i.ibb.co/r3r2j9S/Group-98.png" alt="reuniones"/>
                </div>
                <div className="cuatro">
                    <img className="color2" src="https://i.ibb.co/r3r2j9S/Group-98.png" alt="reuniones"/>
                </div>
            </div>
        </div>
    )
}

export default Welcome