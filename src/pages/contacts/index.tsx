import styles from './Contacts.module.scss'
import nargas from './nargas.jpg'

export default function Contacts() {
    return <>



<main>
    <div>
        <h1 className={styles.teste}>Contatos</h1>

        <li><strong>informaçoes de contato</strong></li>
        <li><strong>+55(19)987691385</strong></li>
        <li><strong>tabacariakronoshookah@gmail.com</strong></li>
        <li><strong>www.kronoshookan.com.br</strong></li>

        <h2><strong>ficamos localizados no bairro jd alvorada</strong></h2>
        <li><strong>proximo av:luiz gonzaga de nascineto</strong></li>
        <li><strong>rua 3 do jd alvorada ant:nao sei o nome (numero:1000)</strong></li>

        <h3>venham conhecer o nosso espaço e fazer aquela super sessão vc e amigos</h3>  
    </div>
    <div>
        <form action="">
            <h1>contate-nos</h1>
            <div>
                
                <input type="text" id='name' placeholder='nome'/>

                
                <input type="text" id='lastName' placeholder='sobrenome'/>



            </div>

                <div>
                    
                    <input type="email" id='email' placeholder='email'/>
                    
                    
                    <input type="tel" id='tel' placeholder='telefone'/>

                </div>

                <div>
                
                    <input type="text" id='adress' placeholder='endereço'/>
                </div>

                <div>
                
                    <input type="text" placeholder='digite sua mensagem aqui'/>
                </div>

                <button>enviar</button>
            
        </form>
    </div>
    <img src={nargas}/>
</main>





        
        
        






    </>
}