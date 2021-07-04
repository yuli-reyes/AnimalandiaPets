import React from 'react';
import {Link} from "react-router-dom";
import perro from './components/assets/golden.jpg';
import './equipo.css';

function Equipo(){
  return(

    <section>
      <div id="infocita">
        <div className="cajatexto">
        <h2>AGENDA UNA CITA AHORA PARA RECLAMAR TU PRIMER BAÑO GRATIS</h2>
        <p>Queremos que conozcas nuestra propuesta de baño para mascotas, 
        donde tenemos espaciona dedicados para evitar la contaminación 
        cruzada que puede llegar a existir en una veterinaria, 
        aplica de lunes a viernespara mascotas que visitanla clínica por primera vez.</p>
        <p>RECUERDA QUE NUESTRO EQUIPO MÉDICO TE CONFIRMARÁ LA CITA.</p>
        <Link to="/agendatucita"><button className="btn-agendar"><i className="far fa-calendar-alt"></i> Agendar</button></Link>
        </div>

        <div className="cajaimagen">
        <h2>GRATIS PRIMER BAÑO</h2>
        <div className="imagen">
          <img src={perro} alt="imagen de perro Golden"/>
        </div>
        </div>
      </div>
    </section>

    );
}


export default Equipo;