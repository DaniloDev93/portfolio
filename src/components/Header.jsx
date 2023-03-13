import './style/header.sass'

import { BsCodeSlash, BsArrowDownShort } from 'react-icons/bs'
import { DiHtml5 , DiCss3 , DiSass , DiJavascript1 , DiReact } from 'react-icons/di'

const Header = () => {

    const list = [
        {   
            id:1,
            name: "icone html", 
            icon: <DiHtml5/>,
        },
        {
            id:2,
            name: "icone css", 
            icon: <DiCss3/>,
        },
        {
            id:3,
            name: "icone sass", 
            icon: <DiSass/>,
        },
        {
            id:4,
            name: "icone javascript", 
            icon: <DiJavascript1/>,
        },
        {
            id:5,
            name: "icone react", 
            icon: <DiReact/>,
        }
    ]

    return(
        <>
            <div id="logo">
                <BsCodeSlash/>
            </div>

            <div id="resume">
                <p id='port-title'>portfolio</p>
                <h1>Danilo Perdigão.</h1>
                <p>
                    Sou um estudante universitário, 
                    antenado em novas tecnologias web baseado em React JS. 
                    Vamos começar a rolar e aprender mais sobre mim.
                </p>
            </div>

            <div id="btn-direction-about">
                <a href="#container-about">
                    <button>
                        <span>Saiba mais</span> 
                        <BsArrowDownShort/>
                    </button>
                </a>    
            </div>

            <div id="techs">
                {list.map((tech) => (
                    <div id="list-icons" key={tech.id} alt={tech.name}>
                        {tech.icon}
                    </div>
                ))}
                
            </div>

        </>
    )
}

export default Header;