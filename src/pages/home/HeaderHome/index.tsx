import { useState } from "react";
import { returnIcon } from "../../components/Icons/returnIcons";
import { redirect } from "../../components/Redirecionar/redirect";
import Contacts from "../../contacts";
import Products from "../../products";
import MainHome from "../MainHome";
import styles from "./HeaderHome.module.scss";

export default function HeaderHome() {
  const [activedScreen, setActivedScreen] = useState("MainHome");
  const [activedScreenMobile, setActivedScreenMobile] = useState(false);

  function returnScreen(screen: string) {
    switch (screen) {
      case "MainHome":
        return <MainHome />;
      case "Contatos":
        return <Contacts />;
      case "Produtos":
        return <Products />;
    }
  }
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.header__nav}>
          <div
            className={styles.header__nav__menuMobileIcon}
            onClick={() => setActivedScreenMobile(!activedScreenMobile)}
          >
            {returnIcon("FcMenu")}
          </div>
          <div className={styles.header__nav__logo}></div>

          <div
            className={`${styles.header__nav__menuMobile} ${
              activedScreenMobile === true ? styles.display_flex : ""
            }`}
          >
            <div
              className={styles.header__nav__menuMobile__out}
              onClick={() => setActivedScreenMobile(!activedScreenMobile)}
            >
              {returnIcon("AiOutlineClose")}
            </div>
            <ul>
              <li>
                <a
                  onClick={() => {
                    setActivedScreen("MainHome");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setActivedScreen("Produtos");
                  }}
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setActivedScreen("Contatos");
                  }}
                >
                  Contatos
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.header__nav__pages}>
            <a
              className={
                activedScreen === "MainHome"
                  ? styles.activedScreen
                  : styles.desativedScreen
              }
              onClick={() => {
                setActivedScreen("MainHome");
              }}
            >
              Home
            </a>
            <a
              className={
                activedScreen === "Produtos"
                  ? styles.activedScreen
                  : styles.desativedScreen
              }
              onClick={() => {
                setActivedScreen("Produtos");
              }}
            >
              Produtos
            </a>
            <a
              className={
                activedScreen === "Contatos"
                  ? styles.activedScreen
                  : styles.desativedScreen
              }
              onClick={() => {
                setActivedScreen("Contatos");
              }}
            >
              Contatos
            </a>
          </div>
        </nav>

        <div className={styles.header__inf}>
          <div>
            <div className={styles.header__inf__logo}>
              <div
                className={styles.header__inf__logo__insta}
                title="ir ao instagram"
                onClick={() => redirect("instagram")}
              ></div>
              <div
                className={styles.header__inf__logo__whats}
                title="ir ao whatsapp"
                onClick={() => redirect("whatsapp")}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {activedScreen ? returnScreen(activedScreen) : "Error"}
    </>
  );
}
