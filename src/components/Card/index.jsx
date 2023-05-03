import React from "react"
import cul from "./Card.module.css"

export const Card = ({title}) =>{
    return(
        <div className={cul.card}>
            <h2>{title}</h2>
        </div>
    )
}