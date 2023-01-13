import styles from "./about.module.css";
import Headshot from "../../Images/Headshot.jpg";
import LinkedIn from "../../Images/LinkedIn.svg";
import GitHub from "../../Images/GitHub.svg";

const About = () => {
  return (
    <div className={styles.Container}>
      <h2 className={styles.Header}>About Me</h2>
      <div className={styles.PictureImageContainer}>
        <img
          className={styles.Headshot}
          src={Headshot}
          alt="Head shot of Alex Goldschmidt"
        />
        <p className={styles.Biography}>
          Hello! My name is Alex and I am a senior at the University of Florida.
          When it comes to programming, I thoroughly enjoy building cool
          projects centered around web development, as well as solving complex
          problems. For such endeavors, I choose to code in React or vanilla
          JavaScript. I can also code for data analysis purposes using Python,
          SQL, and R.
          <br /> <br />
          Outside of work, I am also dedicated to maintaining a healthy
          lifestyle through regular workout sessions and staying informed by
          listening to various podcasts on different topics.
        </p>
      </div>
      <div className={styles.IconContainer}>
        <img
          className={styles.LinkedInIcon}
          src={LinkedIn}
          alt="LinkedIn Account"
          onClick={() =>
            window.open("https://www.linkedin.com/in/alexgoldschmidt103/")
          }
        />
        <img
          className={styles.GitHubIcon}
          src={GitHub}
          alt="GitHub Account"
          onClick={() => window.open("https://github.com/alex-goldschmidt")}
        />
      </div>
    </div>
  );
};

export default About;
