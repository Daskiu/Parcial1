import React from "react"
import "./CardHoteles.css"
import planDeViajes from "../../const/planDeViajes"

export function CardHoteles (){
    return (
        <div className="hoteles-container">
            {planDeViajes.hoteles.map((item, index) => (
                <ul className="card-container" key={index}>
                <li><img src={item.imagen}/></li>
                <li><h2>{item.nombre}</h2></li>
                <li><p>{item.costo}</p></li>
                <li><p>{item.estrellas}</p></li>
                <li><p>{item.ubicacion}</p></li>
                <li><p>{item.servicios}</p></li>
            </ul>
            ))}
        </div>
    )
}