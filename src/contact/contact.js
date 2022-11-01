import React from 'react';


export class Contact extends React.Component{
    render () {
        return (
            <div>
                <div className='flex-row'>
                <div className="flex-column">
                    <h4>Vous rejoindre</h4>
                    <span>Vos offres</span>
                    <span>Mes disponibilités</span>
                </div>
                <div className="flex-column">
                    <h4>Me contacter</h4>
                    <span>Tél : 06 86 54 43 66</span>
                    <span>Mail : guirado.leo@gmail.com</span>
                    <span>Dispo : Ile-de-France (en particulier RER A et E ou proche du plessis trévise)</span>
                </div>
                <div className="flex-column">
                    <h4>Liens externes</h4>
                    <span>GitHub</span>
                    <span>LinkedIn</span>
                </div>
            </div>
            </div>
        )
    }
}