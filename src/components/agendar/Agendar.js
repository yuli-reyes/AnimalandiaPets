import './Agendar.css';

import agenda from './perroagenda.jpg';

function Agendatucita(){
	return(

		<div className="cajagenda contanier">
			<div className="row">


				<div className="imgperro col-md-6">
					<div>
						<img src={agenda} alt="imagen de perro en computador"/>
					</div>

				</div>

				<div className="textoagen col-md-6">
					<div className="seccion-agendar">
						<h1>Agenda Tu Cita</h1>
						<hr></hr>
						<h5>Realiza tu reserva en línea para tu comodidad, pronto estaremos confirmando tu cita.</h5>
					</div>
					<form>
					<div className="row py-2">

						<div className="col-md-6">
							<label className="form-label">Nombre*</label>
							<input type="text" className="form-control" required/>
							<div className="valid-feedback">
							Looks good!
							</div>
						</div>
						<div className="col-md-6">
							<label className="form-label">Apellido*</label>
							<input type="text" className="form-control" />
							<div className="valid-feedback">
							Looks good!
							</div>
						</div>
					</div>
					<div className="row py-2">
						<div className="col-md-6">
							<label className="form-label">Celular*</label>
							<input type="text" className="form-control" required/>
							<div className="valid-feedback">
							Looks good!
							</div>
						</div>
						<div className="col-md-6">
							<label className="form-label">Email*</label>
							<input type="text" className="form-control" />
							<div className="valid-feedback">
							Looks good!
							</div>
						</div>
					</div>
					<div className="row py-2">
						<div className="col-md-6">
							<label className="form-label">Nombre de tu Mascota</label>
							<input type="text" className="form-control" required/>
							<div className="valid-feedback">
							Looks good!
							</div>
						</div>
						<div className="col-md-6">
							<label className="form-label">Fecha y Hora en la que deseas la cita*</label>
							<input type="datetime-local" className="form-control" id="validationCustom02" />
							<div className="valid-feedback">
							Looks good!
							</div>							
						</div>
						<div>
							<button className="btn-agendar"><i className="far fa-calendar-alt"></i> Agendar</button>
						</div>
					</div>

					</form>
				</div>
			</div>

		</div>



		);

}

export default Agendatucita;
