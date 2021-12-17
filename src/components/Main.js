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
                <Estrela />
                <div className="main--buttons">
                    <button id="confirmar" type="button" class="btn btn-secondary">CONFIRMAR</button>
                    <p id="pular" class="text-md-left font-weight-normal text-info">PULAR</p>
                </div>
            </div>
        );
    }
}