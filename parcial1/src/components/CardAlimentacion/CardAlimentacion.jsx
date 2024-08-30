import React from "react"
import "./CardAlimentacion.css"
import planDeViajes from "../../const/planDeViajes"

export function CardAlimentacion (){
    return (
        <div className="alimentacion-container">
            {planDeViajes.alimentacion.map((item, index) => (
                <ul className="card-container" key={index}>
                    <li><img src={item.imagen}/></li>
                    <li><h2> Tipo de alimentacion: {item.titulo}</h2></li>
                    <li><p>Precio: {item.precio}</p></li>
                </ul>
            ))}
        </div>
    )
}