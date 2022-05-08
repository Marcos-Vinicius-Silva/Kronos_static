import styles from './Contacts.module.scss'
import nargas from './nargas.jpg'
import whatsapp from  "./whatsapp.png"
import email from "./email.png"
import site from "./site.png"

export default function Contacts() {
    return <>



        <main className={styles.main}>
            <section className={styles.main__section}>
                <div className={styles.main__section__info}> 
                    <h1 className={styles.main__section__info__title} >Contatos</h1>

                    <li><strong>informaçoes de contato</strong></li>
                    <li><img src={whatsapp} alt="" className={styles.main__section__info__imgWhatsapp} /> <strong>+55(19)987691385</strong></li>
                    <li><img src={email} alt="" className={styles.main__section__info__email} /><strong>tabacariakronoshookah@gmail.com</strong></li>
                    <li><img src={site} alt="" className={styles.main__section__info__site} /><strong>www.kronoshookan.com.br</strong></li>
                    
                    

                    <h2><strong>ficamos localizados no bairro jd alvorada</strong></h2>
                    <li><strong>proximo av:luiz gonzaga de nascineto</strong></li>
                    <li><strong>rua 3 do jd alvorada ant:nao sei o nome (numero:1000)</strong></li>

                    <h3>venham conhecer o nosso espaço e fazer aquela super sessão vc e amigos</h3>
                </div>
                <div className={ styles.main__section__contate}>
                    <form className={styles.main__section__contate__form}>
                        <h1>Contate-nos</h1>
                        <div className={styles.main__section__contate__form__input}>

                            <input type="text" id='name' placeholder='nome' />

                            <input type="text" id='lastName' placeholder='sobrenome' />

                        </div>

                        <div className={styles.main__section__contate__form__input}>

                            <input type="email" id='email' placeholder='email' />


                            <input type="tel" id='tel' placeholder='telefone' />

                        </div>

                        <div className={styles.main__section__contate__form__inputAdress}>

                            <input type="text" id='adress' placeholder='endereço' />
                        </div>

                        <div className={styles.main__section__contate__form__message}>

                            <input type="text" placeholder='digite sua mensagem aqui' />
                        </div>

                        <button>enviar</button>

                    </form>
                </div>
            </section>

            <img src={nargas} />
        </main>














    </>
}