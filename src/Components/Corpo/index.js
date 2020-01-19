import React, { useState } from 'react';
import './index.css';
import InputMask from "react-input-mask";

function Corpo(){

    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [ddis, setDdis] = useState('55');
    const [linkg, setLinkg] = useState('');
    const ddi = [
        { valor: '55',texto: 'BRA +55'},
    ];
        
    function handleSubmit(event) {
        event.preventDefault();
        if(!message.length > 0 && !phone.length > 0){
            document.getElementById('alert_error').style.display = 'block';
            setTimeout(function(){
                document.getElementById('alert_error').style.display = 'none';
            }, 2000);
            return false;
        }
        const base_url = "https://wa.me/";
        let text = '';
        let number = '';
        if(message.length > 0){ 
            text = "?text="+encodeURIComponent(message); 
        }
        if(phone.length > 0){ 
            number = ddis+phone.replace(/[^\d]+/g,''); 
        }
        const new_url = base_url+number+text;
        setLinkg(new_url);
        document.getElementById('content_one').style.display = 'none';
        document.getElementById('content_two').style.display = 'block';
        document.getElementById('receive_link').value = new_url;
        
    }

    function Copytext(){
        document.getElementById('receive_link').select();
        document.execCommand('copy');
        document.getElementById('btn_copy').textContent = 'Copiado!';
        setTimeout(function(){
            document.getElementById('btn_copy').textContent = 'Copiar Link';
        }, 2000);
    }

    function MudarCaixa(){
        document.getElementById('content_one').style.display = 'block';
        document.getElementById('content_two').style.display = 'none';
        setPhone('');
        setMessage('');
    }

    function GerarNovamente(){
        document.getElementById('receive_link').value = linkg;
    }

    return(
        <section id="content_body">

            <div className="alert_error" id="alert_error">
                <p id="erro_alert">É obrigatório que pelo menos um dos dois campos esteja preenchido.</p>
            </div>

            <div className="content_all">
                <h1>GERADOR DE LINK PARA WHATSAPP</h1>
                <div id="content_one">
                    <form onSubmit={handleSubmit} method="POST">
                         <div className="content_form">
                            <label htmlFor="phone" className="my_label">N° DO telefone</label>
                            <div className="sub_form">
                                <InputMask 
                                    mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} 
                                    onChange={event => setPhone(event.target.value)} 
                                    value={phone}
                                    className="my_form"
                                    name="phone" 
                                    id="phone"
                                    placeholder="EX: (99) 9 9999-9999" 
                                />
                                <select name="language" id="language" className="my_select" onChange={event => setDdis(event.target.value)}>
                                    {ddi.map(ddi => (
                                        <option 
                                            key={ddi.valor}
                                            value={ddi.valor} 
                                        >{ddi.texto}</option>
                                    ))}
                                </select>
                            </div>
                            <label htmlFor="message" className="my_label">mensagem pré-preenchida</label>
                            <input 
                                type="text" 
                                className="my_form" 
                                id="message" 
                                name="message" 
                                placeholder="Escreva o texto"
                                onChange={event => setMessage(event.target.value)}
                                value={message}/>
                            
                            <div className="content_group">
                                <button type="submit" className="my_button">gerar link</button>
                            </div>
                         </div>
                     </form>
                </div>
                <div id="content_two">
                    <p className="p_ajust"><span>Pronto!</span> aqui está seu link, agradeçemos a preferência.</p>
                    <input type="text" className="my_form" id="receive_link"/>
                    <div className="content_group">
                        <button type="button" className="my_button" id="btn_copy" onClick={Copytext}>copiar link</button>
                        <button type="button" className="my_button c2" id="btn2" onClick={MudarCaixa}>gerar novo link</button>
                        <button type="button" className="my_button c2" id="btn3" onClick={GerarNovamente}>gerar link novamente</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Corpo;