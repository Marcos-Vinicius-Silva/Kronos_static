import styles from "./Products.module.scss";
import carvao from "../../assets/Projects/6c703e160e(2).jpg";
import React, { SetStateAction, useState } from "react";
import { returnIcon } from "../components/Icons/returnIcons";
import Select from "react-select";

interface Props {
  setActivedScreen: React.Dispatch<SetStateAction<{ screen: string }>>;
}

export default function Products({ setActivedScreen }: Props) {
  const [Products, setProducts] = useState(
    require("../../assets/api/products.json").products
  );

  let formato = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  };
  const options = [
    { value: "menorPreco", label: "Menor Preço" },
    { value: "maiorPreco", label: "Maior Preço" },
    { value: "maisRelevante", label: "Mais Relevante" },
  ];

  localStorage.setItem("Product", JSON.stringify("0"));

 

  const redirectProduct = (id: string) => {
    setActivedScreen({ screen: "Produto" });
    localStorage.setItem("Product", id);
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.main__goBack}>
          <div
            onClick={() => {
              setActivedScreen({ screen: "Produtos" });
            }}
          >
            {returnIcon("FiArrowLeftCircle")}
          </div>

          <h1>Produtos</h1>

        </div>
        <section className={styles.main__section}>
          {Products.map((Product: any, index: any) => (
            <div key={index} className={styles.main__section__product}>
              <div className={styles.main__section__product__container}>
                <img
                  src={carvao}
                  className={styles.main__section__product__container__logo}
                />
              </div>
              <div className={styles.main__section__product__inf}>
                <h1 className={styles.main__section__product__inf__title}>
                  {Product.name}
                </h1>
                <h2 className={styles.main__section__product__inf__lastPrice}>
                  {Product.lastPrice.toLocaleString("pt-BR", formato)}
                </h2>
                <h2 className={styles.main__section__product__inf__price}>
                  {Product.price.toLocaleString("pt-BR", formato)}
                </h2>

                <button
                  className={styles.main__section__product__inf__button}
                  onClick={() => redirectProduct(Product.id)}
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
