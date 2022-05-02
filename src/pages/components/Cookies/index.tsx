import { useEffect, useState } from "react";
import styles from "./Cookies.module.scss";

export default function Coockies() {
  const [cookies, setCookies] = useState(true);

  

  useEffect(() => {
    if(localStorage.getItem("cookies") === null) {
      setCookies(false)
    }
  }, [])


  const setCookiesLocaleStorage = () => {
    setCookies(true)
    localStorage.setItem("cookies", JSON.stringify(true));
  };

  return (
    <>
      <div className={cookies === true ? styles.cookies_none : styles.cookies}>
        <div className={styles.cookies__info}>
          <p>
            Para otimizar sua experiência durante a navegação, fazemos uso de
            cookies. Ao continuar no site, consideramos que você está de acordo
            com nossa Política de cookies
          </p>
        </div>
        <div className={styles.cookies__button}>
          <button onClick={() => setCookiesLocaleStorage()}>
            Aceitar e Continuar
          </button>
        </div>
      </div>
    </>
  );
}
