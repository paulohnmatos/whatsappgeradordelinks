import React from 'react';
import './index.css';

function Corpo2(){
    return(
        <section id="regras">
            <div>
                <p> <span>1°</span> Lembre-se de que este número de telefone deve ter uma conta ativa no WhatsApp.</p>
                <p> <span>2°</span> A mensagem pode conter caracteres especiais como espaços e acentos.</p>
                <p> <span>3°</span> Caso o número não seja digitado ainda assim o link irá funcionar, nesse caso o whatsapp irá abrir uma lista de contatos para o 
                    usuário selecionar a quem a mensagem será enviada.</p>
                <p> <span>4°</span> Não guardamos nenhum dado informado.</p>
            </div>
        </section>
    );
}

export default Corpo2;