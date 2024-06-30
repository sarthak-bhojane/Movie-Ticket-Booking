import React, { useState } from 'react';
import '../App.css'; // Import custom CSS from the correct directory

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div>
      <h2>Select Seats</h2>
      <div className="seating-chart">
        {Array.from({ length: 60 }, (_, i) => (
          <div
            key={i}
            className={`seat ${selectedSeats.includes(i) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(i)}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-3">Proceed to Payment</button>
    </div>
  );
};

export default SeatSelection;
