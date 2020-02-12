import React from 'react';
import './seat.css';


export class Seat extends React.Component {
  state = {
    occupancy: this.props.occupancy,
  }

  handleClick = () => {
    console.log('click');
    if (this.state.occupancy === 'free') {
      this.setState({ occupancy: 'selected' });
    } else if (this.state.occupancy === 'selected') {
      this.setState({ occupancy: 'free' });
    }
  }
  
  render() {
    let toggleClass = 'train-seat__seat--';
    if (this.state.occupancy === 'free') {
      toggleClass += 'free';
    } else if (this.state.occupancy === 'selected') {
      toggleClass += 'selected';
    } else if (this.state.occupancy === 'occupied') {
      toggleClass += 'occupied';
    }

    return (
      <svg onClick={this.handleClick}
        className="train-seat"
        width="100" 
        height="100" 
        viewBox="0 0 100 100"
        >
        <g className={`train-seat__seat `+toggleClass}>             {/*                 free occupied selected*/}
        <rect x="10" y="15" width="80" height="70" rx="15" ry="15" />
        <rect x="30" y="10" width="52" height="15" rx="3" ry="3" />
        <rect x="30" y="75" width="52" height="15" rx="3" ry="3" />
        <rect x="70" y="10" width="20" height="80" rx="9.821" ry="10" />
        </g>
    
        <text className="train-seat__number" x="25" y="60">
          { this.props.seatNumber }
        </text>
      </svg>
    );
  }
};

