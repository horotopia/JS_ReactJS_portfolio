import React from 'react';

import backEnd from './../static/back.jpg';

export class Skills extends React.Component{
    render () {
        return (
            <div>
                <div>IT Skills</div>
                <div className="flex-row">
                    <div className="card">
                        <h3>Back-End</h3>
                        <img src={backEnd} className="Back-logo" alt="Back-end" />
                    </div>
                    <div className="card">
                        <h3>Fullstack</h3>
                    </div>
                    <div className="card"><h3>Front-End</h3></div>
                </div>
            </div>
        )
    }
}