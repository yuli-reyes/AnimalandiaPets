import './contacto.css';

function Contacto(){
	return(

	<section id="contact" className="section-bg wow fadeInUp">
      <div className="container">

        <div className="section-header">
          <h1 className="titulocontacto">Contacto</h1>
          <hr></hr>
          <h5 className="py-4 text-center">No dudes en comunicarte con nosotros, si tienes alguna sugerencia, inquietud o comentario permítenos conocerla para asi poder brindarte el mejor servicio.</h5>
        </div>

        <div className="form">
          <div id="sendmessage">Su mensaje ha sido recibido. Muchas gracias!</div>
          <div id="errormessage"></div>
          <form action="" method="post" role="form" className="contactForm">
            <div className="form row">
              <div className="form-group col-12 col-md-6">
                <input type="text" name="name" className="form-control" id="name" placeholder="Nombre"/>
              </div>
              <div className="form-group col-12 col-md-6">
                <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
                <div className="validacion"></div>
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div className="validacion"></div>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows="5" data-rule="required" placeholder="Mensaje"></textarea>
              
            </div>
            <div className="text-center"><button className="btn-enviar" type="submit">Enviar Mensaje</button></div>
          </form>
        </div>

      </div>
    </section>



		);
}

export default Contacto;