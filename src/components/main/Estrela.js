import React from 'react';
import estrela_vazia from './estrela/img/estrela_vazia.svg';
import estrela_cheia from './estrela/img/estrela_cheia.svg';

export default class Estrela extends React.Component{
    constructor(){
        super();
        this.state = {
            contador: 0
        }
    }

    avaliar = (evt) => {
        var confirmar_but = document.getElementById("main--buttons-confirmar");
        if(this.state.contador === 0){
            this.setState({
                contador: this.state.contador + 1
            });
            evt.currentTarget.position = 'static';
            evt.currentTarget.src = estrela_cheia;
            confirmar_but.style.background ="#2CC6D0";
            this.setState({contador: this.state.contador + 1});

        } else {
            this.setState({contador: this.state.contador - 1});
            evt.currentTarget.position = 'static';
            evt.currentTarget.src = estrela_vazia;
        } 
    }
    render(){
        return(
            <div className="estrela">
                    <img class="estrela--img" src={estrela_vazia} alt="Estrela" onClick={this.avaliar}/>
            </div>
        );
    }
}