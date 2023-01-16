import { Link } from "@mui/material";
import styles from "./navbar.module.css";
import Resume from "./Alex Goldschmidt Resume.pdf";

const Navbar = () => {
  return (
    <div className={styles.outline}>
      <div className={styles.content}>
        <h2 className={styles.Header}>Alex Goldschmidt</h2>
        <div className={styles.Links}>
          <Link className={styles.link} href="/">
            Projects
          </Link>
          <Link className={styles.link} target="_blank" href={Resume}>
            Resume
          </Link>
          <Link className={styles.link} href="/About">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
