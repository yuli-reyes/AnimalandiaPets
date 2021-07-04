import './Razas.css';

function ModalRazas(props){
	return(

		<div className="modal fade" id={props.pm1} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div className="modal-dialog modal-lg">
		    <div className="modal-content contenidom">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalLabel">{props.pm2}</h5>
			        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			      </div>
			      <div className="modal-body row">

				      <div className="imgraza col-4">
				      	<img src={props.pm4} className="img-fluid" alt={props.pm2}/>
				      </div>
				      <div className="col-8 px-4">
				      	<strong>Acerca de</strong><p className="parrafom">{props.pm3}</p>				      	
				      </div>

				  </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
			        <button type="button" className="btn btn-primary">Guardar Cambios</button>
			      </div>
		    </div>
		  </div>
		</div>

		);
}

export default ModalRazas;