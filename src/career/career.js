import React from 'react';

import Acensi from './../static/acensi.svg';
import Hotellerie from './../static/Comfort.jpg';
import choco from './../static/choco.jpg';
import patiss from './../static/patiss.jpg';

export class Career extends React.Component{
    render () {
        return (
            <div>
                <div>Expériences professionnelle</div>
                <div className="career-row">
                    <div className="career-column">
                        <div className="card">
                            <h3>Acensi</h3>
                            <img src={Acensi} className="Acensi" alt="Acensi"/>
                        </div>
                        <div className="card">
                            <h3>Hotellerie</h3>
                            <img src={Hotellerie} className="Hotellerie" alt="Hotellerie"/>
                        </div>
                        <div className="card">
                            <h3>Chocolaterie</h3>
                            <img src={choco} className="Choco" alt="Chocolaterie"/>
                        </div>
                        <div className="card">
                            <h3>Pâtisserie</h3>
                            <img src={patiss} className="Patiss" alt="Pâtisserie"/>
                        </div>
                    </div>
                    <div className="career-column">
                    <div className="card">
                            <h3>Pâtisserie</h3>
                            <img src={patiss} className="Patiss" alt="Pâtisserie"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}