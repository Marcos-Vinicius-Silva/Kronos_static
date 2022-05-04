import { useEffect, useState } from "react";
import { returnIcon } from "../../components/Icons/returnIcons";
import styles from "./Product.module.scss";
import img01 from "../../../assets/Projects/carvao01.jpg";
import img02 from "../../../assets/Projects/carvao02.jpg";

export default function Product() {
  let Products = require("../../../assets/api/products.json").products;
  let ProductId = localStorage.getItem("Product");
  let formato = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  };

  const [imgSelected, setImgSelected] = useState('')

  const handleMouseEvent = (e: any) => {
    setImgSelected(e)
  };
  
  return (
    <>
      <main className={styles.main}>
        <div className={styles.main__goBack}>
            {returnIcon('FiArrowLeftCircle')}

            <h1>Produtos/Produto</h1>
        </div>
        
        <section className={styles.main__section}>
          {Products.map((item: any, index: any) => {           
            if (ProductId == item.id)
              return (
                <div key={index} className={styles.main__section__product}>                 
                  <div className={styles.main__section__product__imgs} >
                    
                    {item.imgs.map((img: any, index: any) => (           
                      <div key={index} onMouseOver={()=> handleMouseEvent(img.name)}>
                        {returnIcon(`${img.name}`)}                       
                      </div>                                   
                    ))}
                  </div>

                  <div className={styles.main__section__product__img}>
                  {returnIcon(`${imgSelected}`) || returnIcon(`${item.imgs[0].name}`) }
                  </div>

                  <div className={styles.main__section__product__inf}>
                    <h1>{item.name}</h1>
                    <p className={styles.main__section__product__inf__lastPrice}>{item.lastPrice.toLocaleString("pt-BR", formato)}</p>
                    <p className={styles.main__section__product__inf__price}>{item.price.toLocaleString("pt-BR", formato)}</p>
                  
                    <button className={styles.main__section__product__inf__button}>CONVERSAR NO WHATSSAPP</button>
                  </div>
                </div>
              );
          })}
        </section>
      </main>
    </>
  );
}
