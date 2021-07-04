import foto from './img/foto.jpg';
import './headercv.css';

function Header(){
	return(
		
		<header>
			
				<div className="datos">
					<h1>Yuli Reyes</h1>
					<h2>Técnica en Diseño Front End</h2>
				</div>
				<div className="foto">
					<img src={foto}/>
				</div>			
			
		</header>

		);
}

export default Header;