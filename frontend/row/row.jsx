import React from 'react';
import { Seat } from '../seat/seat.jsx';
import './row.css';

export class Row extends React.Component {
  state = {
    occupancy: 'free',
    seatNumber: 23,
  }

  
  // componentDidMount() {
  //   fetch('http://bootcamp.podlomar.org/api/contacts')
  //     .then(resp => resp.json())
  //     .then(json => this.setState({contacts: json}));
  // }

  render() {
    // if (this.state.contacts.length === 0) {
    //   return <h1>Waiting for the data</h1>;
    // }

    return (
      <div className="carriage-row">
        {
          // this.state.seat.map(seat => {
          //   return (
          <>
            <Seat 
            occupancy={this.state.occupancy}
            seatNumber={this.state.seatNumber}
            />
            <Seat 
            // vacancy={this.state.vacancy}
            // seatNumber={this.state.number}
            />
            <div class="aisle-spacer"></div>
            <Seat 
            // vacancy={this.state.vacancy}
            // seatNumber={this.state.number}
            />
            <Seat 
            // vacancy={this.state.vacancy}
            // seatNumber={this.state.number}
            />
          </>
          // })
        }
      </div>
    );
  }
};