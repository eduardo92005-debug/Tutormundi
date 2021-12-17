import React from 'react';
import estrela_vazia from './estrela/img/estrela_vazia.svg';
import estrela_cheia from './estrela/img/estrela_cheia.svg';

export default class Estrela extends React.Component{
    constructor(){
        super();
        this.state = {
            esta_preenchida: false
        }
    }
    avaliar = (evt) => {
        if(this.state.esta_preenchida === false){
            this.setState({
                esta_preenchida: true
            });
            evt.currentTarget.position = 'static';
            evt.currentTarget.src = estrela_cheia;

        } else {
            this.setState({
                esta_preenchida: false
            });
            evt.currentTarget.position = 'static';
            evt.currentTarget.src = estrela_vazia;
        }
        }
    render(){
        return(
            <div className="estrela">
                    <img class="estrela--img" src={estrela_vazia} alt="Estrela" onClick={this.avaliar}/>
                    <img class="estrela--img" src={estrela_vazia} alt="Estrela" onClick={this.avaliar}/>
                    <img class="estrela--img" src={estrela_vazia} alt="Estrela" onClick={this.avaliar}/>
                    <img class="estrela--img" src={estrela_vazia} alt="Estrela" onClick={this.avaliar}/>
                    <img class="estrela--img" src={estrela_vazia} alt="Estrela" onClick={this.avaliar}/>
            </div>
        );
    }
}