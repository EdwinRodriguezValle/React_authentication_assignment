import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <>
      <h1>Perfil personal</h1>
      <section>
        <h2>Datos personales</h2>
        <p><strong>Nombre de usuario:</strong> hardcoded-test</p>
        <p><strong>Email:</strong> hardcoded@test.com</p>
      </section>
      <section>
        <h2>Contenido privado personal</h2>
        <p>Esta es mi vida privada</p>
      </section>
      <p> <Link to="/">Regresar a pagina principal</Link></p>
    </>
  );
}

export default Profile;