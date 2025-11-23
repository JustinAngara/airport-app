import React from 'react';
import FlightCard from './FlightCard';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
    padding: '1rem 0'
  },
  flightItem: {
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)'
    }
  }
};

const FlightList = ({ flights }) => {
  return (
    <div style={styles.container}>
      {flights.map((flight) => (
        <div key={flight.id} style={styles.flightItem}>
          <FlightCard flight={flight} />
        </div>
      ))}
    </div>
  );
};

export default FlightList;
