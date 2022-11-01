import {AujourdHui} from './aujourdhui';
import {Clock} from './clock';
import React from 'react';


export class Home extends React.Component{
    render () {
        return (
            <header className="App-header">
                <div className="flex-column">
                    <div className="flex-row">
                        <span>Guirado Léo </span>
                        <AujourdHui/>
                    </div>
                    <div className="flex-row">
                        <span>10 ans d'exp Pro (hors IT) </span>
                        <Clock/>
                    </div>
                    <div className="flex-row">
                        <span>Dev FullStack spécialisé Back-End </span>
                    </div>
                </div>
            </header>
        )
    }
} 
