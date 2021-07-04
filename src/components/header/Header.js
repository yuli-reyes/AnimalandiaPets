import logo from './img/logo.jpg';
import './Header.css';
import ModalLogin from './ModalLogin';
import ModalRegis from './ModalRegistro';

function Header(){
	return(
		<div>
			<header>
				<div className="logo">
						<img src={logo} alt="imagen logo Animalandia Pets"/>
				</div>	
				<div className="botones">
					<button className="btn-ing" data-bs-toggle="modal" data-bs-target="#login"><i className="fas fa-power-off"></i> Ingresar</button>
					<button className="btn-reg" data-bs-toggle="modal" data-bs-target="#registro"><i className="fas fa-user-plus"></i> Registrarse</button>
				</div>			
			<ModalLogin />
			<ModalRegis />
			</header>
		</div>

		);
}

export default Header;
