import { returnIcon } from "../../components/Icons/returnIcons";
import { redirect } from "../../components/Redirecionar/redirect";
import styles from "./MainHome.module.scss";


export default function MainHome() {

  return (
    <>
      <main className={styles.main}>
        <section className={styles.main__section}>
          <div className={styles.main__section__infos}>
            <h1>Proxima Sexta Feira com DJ Emily Raquel</h1>
            <p>
              Todo texto é produzido para alguém. Assim, para aqueles que
              escrevem na internet, é necessária uma preocupação com o modo como
              o texto é construído para que ele seja “aceito” pelo receptor..
            </p>

            <div className={styles.main__section__infos__container}>
              <div
                className={styles.main__section__infos__container__localizacao}
                onClick={() => redirect("localizacao")}
                title="Ir a Localização"
              >
                {returnIcon("localizacao")}
                <h1>Local</h1>
                <p>Av Janio Quadros, 259, Centro Monte Mor/SP - CEP 13190-000</p>
              </div>
              <div
                className={styles.main__section__infos__container__calendario}
              >
                {returnIcon("calendario")}
                <h1>Data</h1>
                <p>20/06/2022</p>
              </div>
            </div>
          </div>
          <div className={styles.main__section__img}>
            <div className={styles.main__section__img__banner}>          
            {returnIcon('banner')}
            </div>

            <div className={styles.main__section__img__background}></div>
          </div>
        </section>
      </main>
    </>
  );
}
