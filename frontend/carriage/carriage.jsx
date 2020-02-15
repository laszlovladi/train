import React from 'react';
import { Seat } from '../seat/seat.jsx';
import './carriage.css';

export let seats = [
  ['free', 'free', 'free', 'free'],
  ['free', 'free', 'free', 'free'],
  ['occupied', 'occupied', 'free', 'free'],
  ['free', 'free', 'free', 'free'],
  ['free', 'free', 'occupied', 'occupied'],
  ['free', 'free', 'free', 'free'],
  ['free', 'occupied', 'free', 'free'],
  ['free', 'free', 'free', 'free'],
  ['free', 'free', 'free', 'occupied'],
  ['free', 'free', 'free', 'free']
  ];

export class Carriage extends React.Component {
  static previous = 0;

  state = {
    seats: seats,
    seatsToBuy: 1,
    seatsToBuyArr: [],
  };
  
  switch = (row, i, j) => {
    if (row[j-1] === 'free') {
      seats[i][j-1] = "selected";
      this.setState({seats: seats});
      this.state.seatsToBuyArr.push(i*4+j);
      if (this.state.seatsToBuyArr.length > this.state.seatsToBuy) {
        let deletedSeat = this.state.seatsToBuyArr.shift(0);
        seats[Math.floor((deletedSeat-1)/4)][(deletedSeat-1)%4] = "free";
      }
    } else if (row[j-1] === 'selected') {
      seats[i][j-1] = "free";
      let deletedSeat = this.state.seatsToBuyArr.splice(this.state.seatsToBuyArr.indexOf(i*4+j), 1);
      this.setState({seats: seats});
    }
  }

  increment(){
    if (this.state.seatsToBuy < seats.length*4){
      this.setState({seatsToBuy: ++this.state.seatsToBuy});
    }
  }

  decrement(){
    if (this.state.seatsToBuy > 1){
      this.setState({seatsToBuy: --this.state.seatsToBuy});
      let deletedSeat = this.state.seatsToBuyArr.shift(0);
      seats[Math.floor((deletedSeat-1)/4)][(deletedSeat-1)%4] = "free";
    this.setState({seats: seats});
    }
  }

  render() {
    return (
      <div className="carriage">
        <div className="toBuy">
          <button className="minus" onClick={() => {this.decrement()}}> - </button>
          <div className="seatsToBuy">
            {this.state.seatsToBuy}
          </div>
          <button className="plus" onClick={() => {this.increment()}}> + </button>
        </div>
        <>
        {
          this.state.seats.map((row, i) => {
            return (
              <div className="carriage-row">
                <Seat 
                  occupancy={row[0]}
                  seatNumber={(i*4+1)}
                  handleClick={()=>{
                    this.switch(row, i, 1);
                  }}
                />
                <Seat
                  occupancy={row[1]}
                  seatNumber={(i*4+2)}
                  handleClick={() => {
                    this.switch(row, i, 2);
                  }}
                />
                <div className="aisle-spacer"></div>
                <Seat 
                  occupancy={row[2]}
                  seatNumber={(i*4+3)}
                  handleClick={() => {
                    this.switch(row, i, 3);
                  }}
                />
                <Seat 
                  occupancy={row[3]}
                  seatNumber={(i*4+4)}
                  handleClick={() => {
                    this.switch(row, i, 4);
                  }}
                />
              </div>
            );
          })
        }
        </>
      </div>
    );
  }
};