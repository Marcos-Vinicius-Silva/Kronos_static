import { useState } from "react";
import { returnIcon } from "../../components/Icons/returnIcons";
import { redirect } from "../../components/Redirecionar/redirect";
import Contacts from "../../contacts";
import Products from "../../products";
import Product from "../../products/product";
import MainHome from "../MainHome";
import styles from "./HeaderHome.module.scss";

export default function HeaderHome() {
  const [activedScreen, setActivedScreen] = useState({ screen: "MainHome" });
  const [activedScreenMobile, setActivedScreenMobile] = useState(false);

  function returnScreen(screen: string) {
    switch (screen) {
      case "MainHome":
        return <MainHome />;
      case "Contatos":
        return <Contacts />;
      case "Produtos":
        return <Products setActivedScreen={setActivedScreen} />;
      case "Produto":
        return <Product setActivedScreen={setActivedScreen} />;
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
                    setActivedScreen({ screen: "MainHome" });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setActivedScreen({ screen: "Produtos" });
                  }}
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setActivedScreen({ screen: "Contatos" });
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
                activedScreen.screen === "MainHome"
                  ? styles.activedScreen
                  : styles.desativedScreen
              }
              onClick={() => {
                setActivedScreen({ screen: "MainHome" });
              }}
            >
              Home
            </a>
            <a
              className={
                activedScreen.screen === "Produtos"
                  ? styles.activedScreen
                  : styles.desativedScreen
              }
              onClick={() => {
                setActivedScreen({ screen: "Produtos" });
              }}
            >
              Produtos
            </a>
            <a
              className={
                activedScreen.screen === "Contatos"
                  ? styles.activedScreen
                  : styles.desativedScreen
              }
              onClick={() => {
                setActivedScreen({ screen: "Contatos" });
              }}
            >
              Contatos
            </a>
          </div>

          <div className={styles.header__nav__inf}>
            <div>
              <div className={styles.header__nav__inf__logo}>
                <div
                  className={styles.header__nav__inf__logo__insta}
                  title="ir ao instagram"
                  onClick={() => redirect("instagram")}
                ></div>
                <div
                  className={styles.header__nav__inf__logo__whats}
                  title="ir ao whatsapp"
                  onClick={() => redirect("whatsapp")}
                ></div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {activedScreen ? returnScreen(activedScreen.screen) : "Error"}
    </>
  );
}
