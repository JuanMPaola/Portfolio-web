import React from 'react';
import style from "./about.module.css"

function About () {
  return (
    <div className={style.container} id="about">
      <div>
        <img src='https://media.licdn.com/dms/image/D4D03AQEAGAAUnZYRIg/profile-displayphoto-shrink_800_800/0/1669402836226?e=1706140800&v=beta&t=bt7Ck3WDWnpEOAz0OIZG0cKkaTaa1pqrLpNXl61Wx3I' alt="" />
      </div>
      <div className={style.containerInfo}>
        <h1>Juancito Paolish</h1>
        <h2> Full stack desenvolvedor</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam ex quisquam. Id pariatur neque dolores nesciunt magni cupiditate, quisquam nulla repellat quos obcaecati, ullam reiciendis ipsum doloremque voluptatibus? Eligendi?</p>
      </div>
    </div>
    
  );
}

export default About;