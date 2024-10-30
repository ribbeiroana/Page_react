import React, { useState, useEffect } from 'react';

// MY IMPORTS
import styles from './styles.css';
import mobile from './mobile.css';

import Elipse from '../../components/Elipse';

import ebook from '../../image/Ebook.png';

function Home(){

    const [size, setSize] = useState(window.innerWidth);

    const facebook = "https//ijuiouuiysui";

    useEffect(() => {
        windowSize();
    }, []);

    function windowSize(){
        setSize(window.innerWidth);
    }

    return(
        <>
            <header className='container'>
                {/* ELIPSE -> CICLE */}
                <div className='elipse-container'>
                    <div className='elpise-left'>
                        <Elipse size={120} opacity={0.2} styles={'cicle-left-one'}/>
                        <Elipse size={120} opacity={0.4} styles={'cicle-left-two'}/>
                        <Elipse size={180} opacity={0.6} styles={'cicle-left-three'}/>
                    </div>
                        
                    <div className='elipse-right'>
                        <Elipse size={120} opacity={0.2} styles={'cicle-right-one'}/>
                        <Elipse size={120} opacity={0.5} styles={'cicle-right-two'}/>
                        <Elipse size={180} opacity={0.6} styles={'cicle-right-three'}/>
                        <Elipse size={180} opacity={0.98} styles={'cicle-right-four'}/>
                    </div>
                </div>

                {/* INFORMAÇÕES E FORM */}
                <div className='information-container'>
                    <div className='information-left'>
                        <div className='information-text'>
                            <h3>Descubra</h3>
                            <h1>
                                Transforme sua alimentação e <br/>
                                tenha mais qualidade de vida! 
                            </h1>

                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                            </p>

                            <h4>
                                Não perca essa oportunidade de mudar seus hábitos 
                            </h4>

                            <p>
                                .There are many variations of passages of Lorem Ipsum available
                            </p>

                            <p>
                                .There are many variations of passages
                            </p>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content
                            </p>
                            <p>
                                .There are many variations of passages
                            </p>
                        </div>
                        <div className='information-img'>
                            <img src={ebook} alt="imagem E-book" />
                        </div>
                    </div>
                    <div className='infomation-right'>
                        <form> 
                            <div className='form-input'>
                                <input type="text" className='input' id='firstName'/>
                                <label htmlFor='firstName' className='label-input'>Primeiro Nome *</label>
                            </div>

                            <div className='form-input'>
                                <input type="text" className='input' id='lasttName'/>
                                <label htmlFor='lasttName' className='label-input'>Sobre Nome *</label>
                            </div>

                            <div className='form-input'>
                                <input type="text" className='input' id='email' />
                                <label htmlFor='email' className='label-input'>E-mail *</label>
                            </div>

                            <div className='form-text'>
                                <span>
                                    Inscreva-se para receber em primeira mão as melhores dicas e receitas saudáveis que irão transformar sua alimentação e melhorar sua qualidade de vida.
                                </span>
                            </div>
                            <div className='form-enquete'>
                                <input type="radio" id='formYes' name='option'/>
                                <label htmlFor='formYes'>Sim, eu quero me escrever!</label>
                            </div>

                            <div className='form-enquete'>
                                <input type="radio" id='formNo' name='option'/>
                                <label htmlFor='formNo'>Não, Estou bem obrigado!</label>
                            </div>

                            <button className='form-button'>Download E-book</button>
                        </form>
                    </div>
                </div>

            </header>

            <main>
                <section className='services'>
                    <span>
                        Além do nosso e-book de receitas gratuito, oferecemos um produto completo para quem busca uma mudança duradoura em sua alimentação e saúde. Com nosso programa, você terá acesso a consultas online com um nutricionista, acompanhamento em grupo pelo Telegram e muito mais. Transforme sua vida agora mesmo e alcance seus objetivos de forma sustentável. Saiba mais em nossa página de produtos.
                    </span>
                </section>

                <section className='social-media'>
                    <div className='contact'>
                        <a href={facebook} target='blank' className='face'>
                            <ion-icon clas='face' name="logo-facebook"></ion-icon>
                            <span>Receitas sabor & Saúde</span>
                        </a>
                    </div>

                    <div className='contact'>
                        <a href={facebook} target='blank'>
                            <ion-icon name="logo-instagram"></ion-icon>
                            <span>Receitas sabor & Saúde</span>
                        </a>
                    </div>

                    <div className='contact'>
                        <a href={facebook} target='blank'>
                            <ion-icon name="logo-whatsapp"></ion-icon>
                            <span>Receitas sabor & Saúde</span>
                        </a>
                    </div>
                </section>
            </main>

            <footer>
                <a href={'3'} target='blank' >SAIBA MAIS</a>
            </footer>
        </>
    )
}

export default Home;