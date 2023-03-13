import './style/form.sass'

import { MdLocalPostOffice } from 'react-icons/md'
import emailjs from '@emailjs/browser'
import { useState } from 'react';


const Form = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");


    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nome,
            message: mensagem,
            email: email
        }

        if (nome != "" || email != "" || mensagem != "") {
            emailjs.send("service_j2mrht7", "template_6zw5rcn", templateParams, "UIlOEPoft30_XXbQY")
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text)
                alert("E-mail enviado com sucesso.")

                setNome('')
                setEmail('')
                setMensagem('')
            }, (err) => {
                console.log("ERRO: " , err)
            })
        }
    }

    return (
        <>
            <div id="container-form">
                <p id="form-title">contato</p>
                <p id="form-subtitle">Preencha todos os campos.</p>

                <div id="icon">
                    <MdLocalPostOffice />
                </div>

                <form action="" onSubmit={sendEmail}>
                    <input type="text" placeholder='Seu nome' required 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}/>
                    <input type="email" placeholder='Seu e-mail' required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Sua mensagem...' required
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}></textarea>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </>
    );
}

export default Form;