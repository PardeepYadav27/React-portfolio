import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
return (
<section className={styles.container}>
  <div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm Pradeep Yadav</h1>
    <p className={styles.description}>
      A full-stack web developer who focuses on creating the user interface of websites and online apps, which is
      essential to the final product's success.
    </p>
    <a href="/assets/Resume/My Resume_New.pdf" className={styles.contactBtn}>
      My Resume 
      <img src={getImageUrl("hero/fire_1f525.gif")} alt="fire_gif" className={styles.heroFire}  />
    </a>
  </div>
  <img src={getImageUrl("hero/profile.jpg")} alt="Hero image of me" className={styles.heroImg} />
  <div className={styles.topBlur} />
  <div className={styles.bottomBlur} />
</section>
);
};