import React from 'react';
import style from './projects.module.css'
import nestImage from '../../assets/NestApp.png'
import piImage from '../../assets/PiGames.png'

function Projects() {
  return (
    <div className={style.container} id="projects">
      <div className={style.projectsTitle}>
        <h1> Aplicaciones que desarrolle </h1>

      </div>

      <div className={style.projects}>

        <div>

          <div>
            <h2>Real State App</h2>
          </div>

          <div>
            <p> Aplicaion de vienes raices que esta buena no, buenisima perri no sabes, una bomba</p>
            <img src={nestImage} alt="" />
          </div>

        </div>
        <div>

        <div>
          <h2>PI Videojuegos</h2>
        </div>

        <div>
          <p> Esta es de jueguitos y la hice yo solo, se las recomiendo mucho, hasta es mejor que steam</p>
          <img src={piImage} alt=""/>
        </div>

        </div>
      </div>
    </div>

  );
}

export default Projects;