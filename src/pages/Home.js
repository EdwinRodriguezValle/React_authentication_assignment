import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Homepagina</h1>
      <section>
        <p>La la pagina principal.</p>
        <p>
         Soy un párrafo en la pagina principal.
        </p>
      </section>
      <section>
        <p>Si has ingresado, ve tu perfil
            <Link to="/profile"> Aquí </Link></p>
        <p>Ingresar <Link to="/signin"> Aquí</Link> Registrase <Link to="/signup"> Aquí</Link></p>
      </section>
    </>
  );
}

export default Home;
