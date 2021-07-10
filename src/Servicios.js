import './servicios.css';
import paciente from './components/assets/paciente.png';
import vacunacion from './components/assets/vacunacion.png';
import veterinario from './components/assets/veterinario.png';

function Servicios(){
	return(
    <div>
	<section>
            <article className="titulocaja">
                <h1>Servicios</h1>
                <hr></hr>
            </article>
            <div className="cajageneral text-center">
                <div className="row">
                	<article className="cajatext col-12 col-md-4">
                	<img src={paciente} alt="imagen paciente"/>
                        <h5>Paciente</h5>                
                        <p>This is a longer card with supporting text below as a 
                        natural lead-in to additional content. This content is a 
                        little bit longer.</p>
                  	</article>
                
                  	<article className="cajatext col-12 col-md-4">
                    <img src={vacunacion} alt="imagen vacunacion"/>
                        <h5>Servicio Médico</h5>
                        <p>This is a longer card with supporting text below as a 
                        natural lead-in to additional content. This content is a 
                        little bit longer.</p>
                    </article>

                    <article className="cajatext col-12 col-md-4">
                        <img src={veterinario} alt="imagen vaterinario"/>
                        <h5>Vacunación</h5>
                        <p>This is a longer card with supporting text below as a 
                        natural lead-in to additional content. This content is a 
                        little bit longer</p>
                    </article>
                </div>
            </div>
    </section>
    </div>
    );
}

export default Servicios;
