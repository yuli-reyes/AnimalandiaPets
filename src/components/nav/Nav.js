
import './Nav.css';
import React from "react";
import {
  Link,
  NavLink,  
} from "react-router-dom";

function Nav(){
	return(
		<div>		
		<nav>
			<ul className="menu">

				<li className="item">
				<Link exact='true' to="/">Home</Link>
				</li>

				<li className="item">
				<NavLink to='/equipo' activeClassName='active'>Equipo</NavLink>
				</li>

				<li className="item">
				<Link sensitive='true' to="/servicios">Servicios</Link>
				</li>

				<li className="item">
				<NavLink to="/agendatucita" activeClassName='active'>Agenda tu Cita</NavLink>
				</li>

				<li className="item">
				<NavLink to="/perros" activeClassName='active'>Perros</NavLink>
				</li>

				<li className="item">
				<NavLink to="/contactanos" activeClassName='active'>Contáctanos</NavLink>
				</li>
			</ul>

		</nav>
		</div>

		);
}

export default Nav;