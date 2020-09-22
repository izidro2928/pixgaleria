import React from 'react';

const Imagen = (props) => {
    const {largeImageURL, likes, webformatURL, tags, views} = props.imagen;
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-white bg-dark card-cus">
                <img src={webformatURL} alt={tags} className="card-image-top"/>
                <div className="card-body">
                    <p className="card-text">{likes}: Me Gusta</p>
                    <p className="card-text">{views}: Vistas</p>
                    <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-warning btn-block">Ver Imagen</a>
                </div>
            </div>
        </div>
    )
}

export default Imagen;