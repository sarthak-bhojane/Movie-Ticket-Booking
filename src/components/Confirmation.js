import React from 'react';

const Confirmation = () => {
  // Assume booking details are passed via state or context
  const bookingDetails = {
    movie: 'Movie Title',
    seats: [1, 2, 3],
    showtime: '7:00 PM',
    totalPrice: 30
  };

  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Movie: {bookingDetails.movie}</p>
      <p>Seats: {bookingDetails.seats.join(', ')}</p>
      <p>Showtime: {bookingDetails.showtime}</p>
      <p>Total Price: ${bookingDetails.totalPrice}</p>
    </div>
  );
};

export default Confirmation;
