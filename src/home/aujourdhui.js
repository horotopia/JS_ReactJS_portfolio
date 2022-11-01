import React from 'react';

export class AujourdHui extends React.Component {
    render () {
        const date = new Date()
        return <div>
            {date.toLocaleDateString()}
        </div>
    }
}