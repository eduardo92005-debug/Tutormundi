import React from 'react';
import Livrao from './main/Livrao';
import Estrela from './main/Estrela';
import Textao from './main/Textao';

export default class Main extends React.Component{
    render(){
        return(
            <div className="main">
                <Livrao />
                <Textao />
                <div class = "container-estrelas">
                    <Estrela />
                    <Estrela />
                    <Estrela />
                    <Estrela />
                    <Estrela />
                </div>
                <div className="main--buttons">
                    <button id="main--buttons-confirmar" type="button" class="button is-primary is-rounded has-text-weight-semibold">CONFIRMAR</button>
                    <p id="main--buttons-pular" class="has-text-weight-medium">PULAR</p>
                </div>
            </div>
        );
    }
}