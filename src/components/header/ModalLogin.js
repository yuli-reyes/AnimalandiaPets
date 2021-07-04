import './Header.css';

function ModalLogin(){

	return(
	<div className="modal fade" id="login" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog">
		    <div className="modal-content">
		      	<div className="modal-header">
		        	<h5 className="modal-title" id="exampleModalLabel">Login</h5>
		        	<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      	</div>
		     	<div className="modal-body">
			      	<form>
				      <div className="mb-3">
				      	<label className="form-label"><strong>Correo Electrónico</strong></label>
				      	<input type="email" className="form-control" />
				      	<div className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
				      </div>
				      <div className="mb-3">
				      	<label className="form-label"><strong>Contraseña</strong></label>
				      	<input type="password" className="form-control" />
				      </div>
				      <div className="mb-3 form-check">
				      	<input type="checkbox" className="form-check-input" />
				      	<label className="form-check-label">Check me out</label>
				      </div>
				      
					</form>
		        
		      	</div>
			    <div className="modal-footer">
			        <button type="button" className="btn-cerrar" data-bs-dismiss="modal">Cerrar</button>
			        <button type="submit" className="btn-ing">Ingresar</button>
			    </div>
		  	</div>
		</div>
	</div>
		);

}

export default ModalLogin;
