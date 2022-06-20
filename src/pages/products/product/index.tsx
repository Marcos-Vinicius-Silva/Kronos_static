import { useEffect, useState } from "react";
import { returnIcon } from "../../components/Icons/returnIcons";
import styles from "./Product.module.scss";
import React, { SetStateAction } from "react";
import { redirect } from "../../components/Redirecionar/redirect";

interface Props {
  setActivedScreen: React.Dispatch<SetStateAction<{ screen: string }>>;
}

export default function Product({ setActivedScreen }: Props) {
  let Products = require("../../../assets/api/products.json").products;
  let ProductId = localStorage.getItem("Product");
  let formato = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  };

  const [imgSelected, setImgSelected] = useState("");

  const handleMouseEvent = (e: any) => {
    setImgSelected(e);
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

          <h1>Produtos/Produto</h1>
        </div>

        <section className={styles.main__section}>
          {Products.map((item: any, index: any) => {
            if (ProductId == item.id)
              return (
                <div key={index} className={styles.main__section__product}>
                  <div className={styles.main__section__product__imgs}>
                    {item.imgs.map((img: any, index: any) => (
                      <div
                        key={index}
                        onMouseOver={() => handleMouseEvent(img.name)}
                      >
                        {returnIcon(`${img.name}`)}
                      </div>
                    ))}
                  </div>

                  <div className={styles.main__section__product__img}>
                    {returnIcon(`${imgSelected}`) ||
                      returnIcon(`${item.imgs[0].name}`)}
                  </div>

                  <div className={styles.main__section__product__inf}>
                    <h1>{item.name}</h1>
                    <p
                      className={styles.main__section__product__inf__lastPrice}
                    >
                      {item.lastPrice.toLocaleString("pt-BR", formato)}
                    </p>
                    <p className={styles.main__section__product__inf__price}>
                      {item.price.toLocaleString("pt-BR", formato)}
                    </p>

                    <button
                      className={styles.main__section__product__inf__button}
                      onClick={() => redirect("whatsapp")}
                    >
                      CONVERSAR NO WHATSSAPP
                    </button>
                  </div>
                </div>
              );
          })}
          
        </section>   
        <div className={styles.main__separator}></div>
        <section className={styles.main__sectionDetails}>
        {Products.map((item: any, index: any) => {
            if (ProductId == item.id)
              return (
                <div key={index} className={styles.main__sectionDetails__container}>
                  <h1>Detalhes do Produtos</h1>
                  <h1 className={styles.main__sectionDetails__container__name}>{item.name}</h1>
                  <p>{item.description}</p>
                 
                </div>
              );
          })}
          
        </section>
      </main>
    </>
  );
}
