
import React, {Component} from 'react';
import Buscador from './componentes/Buscador';
import Resultados from './componentes/Resultados';

class App extends Component {
  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }
  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if (pagina===1) return null;
    pagina -= 1;
    this.setState({
      pagina
    }, () => {
      this.consultarAPI();
      this.scroll();
    });
  }
  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    pagina += 1;
    this.setState({
      pagina
    }, () => {
      this.consultarAPI();
      this.scroll();
    });
  }
  consultarAPI = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${termino}&per_page=21&page=${pagina}`;
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes: resultado.hits}))
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarAPI();
    })
  }
  render() {
    return (
    
      <div className="container">
      <div className="jumbotron bg-dark text-white">
          <h1 className="text-center mb-5">Buscador de Imagenes</h1>
          <Buscador 
              datosBusqueda={this.datosBusqueda}
          />
      </div>

      < Resultados
      imagenes = {this.state.imagenes}
      paginaAnterior = {this.paginaAnterior}
      paginaSiguiente = {this.paginaSiguiente}
      />
    </div>
    
    );
  }
}
export default App;
