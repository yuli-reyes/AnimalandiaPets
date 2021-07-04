import './error.css';
import error from './error404.jpg';

function Error(){
  return(

      <div id="info">
          <h1 className="titulo">Página no Encontrada</h1>
          <img className="imagen" src={error} alt="imagen de error 404" />

      </div>

    );
}


export default Error;