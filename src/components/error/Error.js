import './error.css';
import error from './error404.jpg';

function Error(){
  return(

      <div id="info">
          <h1 className="titulo">Página no Encontrada</h1>
          <img className="imagen" src={error} />

      </div>

    );
}


export default Error;