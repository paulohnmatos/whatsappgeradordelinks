import React from 'react';
import './index.css';

function RodaPe(){

    const now = new Date();

    return(
        <footer>
            <p>
                <span>{now.getFullYear()}</span> &nbsp;
                <span>&copy;</span> &nbsp;
                <span>ty4me.com.br</span>
            </p>
        </footer>
    );
}

export default RodaPe;