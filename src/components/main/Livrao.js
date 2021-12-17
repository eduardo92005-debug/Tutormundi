import React from 'react';
import logo from './livrao/img/livro.png';

export default class Livrao extends React.Component{
    render(){
        return(
            <div className="livrao">
                <img src={logo} alt="Logo"/>
            </div>
        );
    }
}