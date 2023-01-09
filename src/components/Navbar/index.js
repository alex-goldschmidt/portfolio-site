import { Link } from "@mui/material";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.outline}>
      <div className={styles.content}>
        <h2 className={styles.Header}>Alex Goldschmidt</h2>

        <div className={styles.Links}>
          <Link className={styles.link} to="">
            Projects
          </Link>
          <Link className={styles.link} to="">
            Resume
          </Link>
          <Link className={styles.link} to="">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
