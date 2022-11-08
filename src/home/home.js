import {AujourdHui} from './aujourdhui';
import {Clock} from './clock';
import React from 'react';

import logo from './../static/logo.jpg'

export class Home extends React.Component{
    render () {
        return (
            <header className="App-header">
                <div className="App-header-left">
                    <div className="App-header-presentation">
                        <img src={logo} className="logo" alt="Guirado Léo logo" />
                        <div className="App-header-name-job">
                            <span>Guirado Léo </span>
                            <span>Dev FullStack spécialisé Back-End </span>
                        </div>
                    </div>
                    <div className="App-header-features">
                        <span className="button">Thèmes </span>
                        <AujourdHui/>
                        <Clock/>
                    </div>
                </div>
                <div className="App-header-right">
                            <span className="button">CV </span>
                            <span className="button">in </span>
                            <span className="button">git </span>
                </div>
            </header>
        )
    }
} 
