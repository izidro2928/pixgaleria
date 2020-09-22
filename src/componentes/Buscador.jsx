import React, { Component } from 'react';
class Buscador extends Component {
    busquedaRef = React.createRef();
    obtenerDatos = (e) => {
        e.preventDefault();
        const termino = this.busquedaRef.current.value;
        this.props.datosBusqueda(termino);
    }
    render() { 
        return ( 
            <form onSubmit={this.obtenerDatos} className="form-inline justify-content-center">
                <input ref={this.busquedaRef} type="text" className="form-control form-control-lg mr-2" placeholder="Busca tu imagen"/>
                <button className="btn btn-danger btn-lg">Buscar</button>
            </form>
         );
    }
}
 
export default Buscador;