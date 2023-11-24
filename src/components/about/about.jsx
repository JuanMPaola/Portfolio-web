import React from 'react';
import style from "./about.module.css"

function About () {
  return (
    <div className={style.container} id="about">
{/*       <div>
        <p>Hola, bienvenido a mi pagina. Este es un espacio donde enseño los proyectos en los que trabaje. Soy desarrollador full stack web, y estudiante en el tercer año de la carrera en Analisis de Sistemas. Si te interesan mis servicios/habilidades para que forme parte de tu equipo de trabajo no dudes en contactarme!</p>
      </div> */}
      <div className={style.containerInfo}>
        <h1>Juancito Paolish</h1>
        <h2> Full stack desenvolvedor</h2>
        <p>Hola, bienvenido a mi pagina. Este es un espacio donde enseño los proyectos en los que trabaje. Soy desarrollador full stack web, y estudiante en el tercer año de la carrera en Analisis de Sistemas. Si te interesan mis servicios/habilidades para que forme parte de tu equipo de trabajo no dudes en contactarme!</p>
      </div>
      <div>
        <img src='https://media.licdn.com/dms/image/D4D03AQEAGAAUnZYRIg/profile-displayphoto-shrink_800_800/0/1669402836226?e=1706140800&v=beta&t=bt7Ck3WDWnpEOAz0OIZG0cKkaTaa1pqrLpNXl61Wx3I' alt="" />
      </div>
    </div>
    
  );
}

export default About;