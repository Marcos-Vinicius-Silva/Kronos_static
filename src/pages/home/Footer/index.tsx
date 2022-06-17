import styles from "./Footer.module.scss";
import { returnIcon } from "../../components/Icons/returnIcons";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.footer__section}>      
          <div className={styles.footer__section__powerBy}>
          &copy; 2022 Copyrigth Marcos Vinicius
          </div>
        </section>
      </footer>
    </>
  );
}
