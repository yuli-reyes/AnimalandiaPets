import {perros} from './components/perros/Perros.json';
import Razas from './components/perros/Razas';


function Perros(){

return(

		<section className="container-fluid">



            <div className="row px-4">
            <div className="titulocaja mb-4">
                <h1>Perros</h1>
                <hr></hr>
            </div>
	            {

	            	perros.map(perro=>(

						<div className="col-12 col-lg-4" key={perro.id}>
							<Razas p1={perro.id} p2={perro.thumbnail} p3={perro.raza} p4={perro.descripcion} p5={perro.acercade} p6={perro.imagen}/>
						</div>

	            	))
	            }

	        </div>

        </section>

		);
	}

export default Perros;
