import React from 'react';
import { Seat } from '../seat/seat.jsx';
import './carriage.css';

export class Carriage extends React.Component {
  state = {seats: [
    [{occupancy: 'selected'},{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'}],
    [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'}],
    [{occupancy: 'occupied'},{occupancy: 'occupied'},{occupancy: 'free'},{occupancy: 'free'}],
    [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'}],
    [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'occupied'},{occupancy: 'occupied'}],
    [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'}],
    [{occupancy: 'free'},{occupancy: 'occupied'},{occupancy: 'free'},{occupancy: 'free'}],
    [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'}],
    [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'occupied'}],
    [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'}]
    ]
  };
  
  render() {
    return (
      <div className="carriage">
        {
          this.state.seats.map((row, i) => {
            return (
              <div className="carriage-row">
                <Seat 
                  occupancy={row[0].occupancy}
                  seatNumber={(i*4+1)}
                />
                <Seat 
                  occupancy={row[1].occupancy}
                  seatNumber={(i*4+2)}
                />
                <div className="aisle-spacer"></div>
                <Seat 
                  occupancy={row[2].occupancy}
                  seatNumber={(i*4+3)}
                />
                <Seat 
                  occupancy={row[3].occupancy}
                  seatNumber={(i*4+4)}
                />
              </div>
            );
          })
        }
      </div>
    );
  }
};