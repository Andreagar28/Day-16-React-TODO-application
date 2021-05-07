import React from "react";

const Tarea = (props) => {

    return(
        <div>
            <div className="tarea">
                <span>{props.tarea}</span><span>Editar</span><span>Borrar</span>
            </div>
        </div>
    )

}
