import './style/about.sass'

import { FaUserGraduate } from 'react-icons/fa'
import { MdOutlineQrCode2, MdLocationOn, MdMonitorWeight} from 'react-icons/md'

import curriculo from '../assets/curriculo.pdf'

const About = () => {

    const listCards = [
        {
            id: 1,
            title_card: "qrcode generator",
            text_card: "sistema para gerar qrcode através da url disponibilizando link para download.",
            icon_card: <MdOutlineQrCode2/>,
            link_card: "https://danilodev93.github.io/qrcode/"
        },
        {
            id: 2,
            title_card: "cep location",
            text_card: "sistema responsável por buscar o endereço através do CEP.",
            icon_card: <MdLocationOn/>,
            link_card: "https://danilodev93.github.io/generator/"
        },
        {
            id: 3,
            title_card: "calculando imc",
            text_card: "sistema calcula o imc do usuário retornando o índice de massa corporal.",
            icon_card: <MdMonitorWeight/>,
            link_card: "https://danilodev93.github.io/imc/"
        }
    ]

    return(
        <>
            <div id="container">
                <p id='about-title'>sobre</p>
                <p id="about-title-none">sobre</p>
                <p id='icon-student'><FaUserGraduate/></p>
                <p id='resume-about'>
                    Cursando Ciência de Dados pela universidade Unifatecie
                    com previsão de conclusão em 2025. Também faço curso
                    técnico em informática pelo Senac. Estudo programação a alguns anos pelo youtube,
                    através de tutoriais.
                </p>

                <p id='about-title-none'>projetos</p>
                
                <div id="card-container">
                <p id='about-title'>projetos</p>
                    {listCards.map((item) => (
                        <div id="card" key={item.id} alt={item.title_card}>
                            <a href={item.link_card} target={'_blank'}>
                                <p id='title-card'>{item.title_card}</p>
                                <p id="text-card">
                                    {item.text_card}
                                </p>
                                <p id="icon-card">
                                    {item.icon_card}
                                </p>
                            </a> 
                        </div>
                    ))}
                </div>

                <div id="btn-container">
                    <a href={curriculo} download="curriculo Danilo Perdigao">
                        <button>download cv</button>
                    </a>
                    <a href="#container-form">
                        <button id='contato'>entre em contato</button>
                    </a>  
                </div>
                
            </div>
        </>
    )
}

export default About;