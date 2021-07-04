import './footer.css';

function Footer(){
	return(
	<section id="info">
    	<div className="cajainfo">

        	<article className="cajai">
                <i className="far fa-building"></i>
                <h5>Sedes</h5>
                
                <p>Sede Virrey</p>
                <p>Sede Unicentro (24 horas)</p>
                <p>Sede Usaquen</p>
                <p>Sede Rosales</p>
                <p>Sede 106</p>
                <p>Sede Contador (Nueva)</p>    

          	</article>
        
          	<article className="cajai">
                <i className="fas fa-mobile-alt"></i>
                <h5>Lineas de Atención</h5>
                <p>1234567</p>
                <p>1234567</p>
                <p>1234567</p>
                <p>1234567</p>
                <p>1234567</p>
                <p>1234567</p>
            </article>

            <article className="cajai">
            <i className="far fa-envelope-open"></i>
            <h5>Email</h5>
            <p>info@veterinaria.com</p>
            <p>veterinaria1@veterinaria.com</p>
            <p>veterinaria2@veterinaria.com</p>
            </article>
        </div>
    </section>   
  );
}

export default Footer;

