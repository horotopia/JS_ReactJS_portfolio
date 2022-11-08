import React from 'react';
import portrait from './../static/ordi.jpg'


export class About extends React.Component{
    render () {
        return (
            <div className="about-row">
                <img src={portrait} className="portrait" alt="portrait" />
                <p>à propos de moi</p>
            </div>
        )
    }
}