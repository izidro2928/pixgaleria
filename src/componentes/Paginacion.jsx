import React from 'react'

const Paginacion = props => {
    return (
        <div className="py-3 text-center mb-5">
            <button onClick={props.paginaAnterior} type="button" className="btn btn-danger mr-1">Anterior &larr;</button>
            <button onClick={props.paginaSiguiente} type="button" className="btn btn-danger">Siguiente &rarr;</button>
        </div>
    )
}

export default Paginacion;