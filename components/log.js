import React from 'react';
import ReactDOM from 'react-dom';

export default class Log extends React.Component {
    render() {
        return (
            <div>
                <table className="bordered striped table-responsive">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fire location</th>
                            <th>Fire magnitude</th>
                            <th>Trapped people</th>
                            <th>Reporter's phone number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reports.map((data, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{data.fire_origin}</td>
                                <td>{data.fire_magnitude}</td>
                                <td>{data.trapped_people}</td>
                                <td>{data.phone_number}</td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        );
    }
}