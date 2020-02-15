import React from 'react';
import { Seat } from '../seat/seat.jsx';
import './carriage.css';

export let seats = [
  [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'}],
  [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'}],
  [{occupancy: 'occupied'},{occupancy: 'occupied'},{occupancy: 'free'},{occupancy: 'free'}],
  [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'}],
  [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'occupied'},{occupancy: 'occupied'}],
  [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'}],
  [{occupancy: 'free'},{occupancy: 'occupied'},{occupancy: 'free'},{occupancy: 'free'}],
  [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'}],
  [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'occupied'}],
  [{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'},{occupancy: 'free'}]
  ];

export default {
  seats,  
}

export class Carriage extends React.Component {
  static previous = 0;

  state = {
    seats: seats,
  };
  
  switch = (row, i, j) => {
    console.log(seats);
    if (row[j-1].occupancy === 'free') {
      if (Carriage.previous !== 0){
        seats[Math.floor((Carriage.previous-1)/4)][(Carriage.previous-1)%4] = {occupancy: "free"};
      }
      seats[i][j-1] = {occupancy: "selected"};
      this.setState({seats: seats});
      Carriage.previous = (i*4+j);
    } else if (row[j-1].occupancy === 'selected') {
      seats[i][j-1] = {occupancy: "free"};
      this.setState({seats: seats});
    }
  }

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
                  handleClick={()=>{
                    this.switch(row, i, 1);
                  }}
                />
                <Seat
                  occupancy={row[1].occupancy}
                  seatNumber={(i*4+2)}
                  handleClick={() => {
                    this.switch(row, i, 2);
                  }}
                />
                <div className="aisle-spacer"></div>
                <Seat 
                  occupancy={row[2].occupancy}
                  seatNumber={(i*4+3)}
                  handleClick={() => {
                    this.switch(row, i, 3);
                  }}
                />
                <Seat 
                  occupancy={row[3].occupancy}
                  seatNumber={(i*4+4)}
                  handleClick={() => {
                    this.switch(row, i, 4);
                  }}
                />
              </div>
            );
          })
        }
      </div>
    );
  }
};