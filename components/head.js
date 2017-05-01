import React from 'react';
import ReactDOM from 'react-dom';

export default class Head extends React.Component {
    render() {
        return (
            <div>
                <thead>
                    <th>
                        Fire location</th>
                    <th>
                        Fire magnitude</th>
                    <th>
                        Trapped people</th>
                    <th>
                        Reporter's phone number</th>
                </thead>
            </div>
        );
    }
}