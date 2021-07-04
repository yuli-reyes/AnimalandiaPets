
import './Nav.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Nav(){
	return(
		<div>		
		<nav>
			<ul className="menu">

				<li className="item">
				<Link exact to="/">Home</Link>
				</li>

				<li className="item">
				<NavLink to='/equipo' activeClassName='active'>Equipo</NavLink>
				</li>

				<li className="item">
				<Link sensitive to="/servicios">Servicios</Link>
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