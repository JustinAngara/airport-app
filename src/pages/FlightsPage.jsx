import { useState, useEffect } from 'react';
import { Container, Spinner, Alert, Badge } from 'react-bootstrap';
import FlightList from '../components/FlightList';
import FilterBar from '../components/FilterBar';

// Mock data - in a real app, this would come from an API
const mockFlights = [
  {
    id: 'FL123',
    flightNumber: 'AA123',
    airline: 'American Airlines',
    departure: {
      airport: 'JFK',
      city: 'New York',
      time: '08:00 AM'
    },
    destination: {
      airport: 'LAX',
      city: 'Los Angeles',
      time: '11:30 AM'
    },
    departureTime: '2025-12-15T08:00:00',
    status: 'On Time',
    gate: 'B12',
    terminal: '4'
  },
  {
    id: 'FL124',
    flightNumber: 'DL456',
    airline: 'Delta Airlines',
    departure: {
      airport: 'LAX',
      city: 'Los Angeles',
      time: '09:15 AM'
    },
    destination: {
      airport: 'ORD',
      city: 'Chicago',
      time: '03:45 PM'
    },
    departureTime: '2025-12-15T09:15:00',
    status: 'Delayed',
    gate: 'A5',
    terminal: '2'
  },
  {
    id: 'FL125',
    flightNumber: 'UA789',
    airline: 'United Airlines',
    departure: {
      airport: 'ORD',
      city: 'Chicago',
      time: '10:30 AM'
    },
    destination: {
      airport: 'DFW',
      city: 'Dallas',
      time: '01:15 PM'
    },
    departureTime: '2025-12-15T10:30:00',
    status: 'Boarding',
    gate: 'C8',
    terminal: '1'
  }
];

const styles = {
  container: {
    padding: '2rem 0'
  },
  header: {
    marginBottom: '2rem',
    color: '#2c3e50',
    fontWeight: '600'
  },
  resultsCount: {
    color: '#6c757d',
    marginBottom: '1.5rem',
    fontSize: '1.1rem'
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '300px'
  },
  loadingText: {
    marginTop: '1rem',
    color: '#6c757d'
  },
  errorContainer: {
    marginTop: '2rem'
  }
};

const FlightsPage = () => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // In a real app, this would be an API call
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setFlights(mockFlights);
        setFilteredFlights(mockFlights);
        setLoading(false);
      } catch (err) {
        setError('Failed to load flights. Please try again later.');
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  // Apply filters
  useEffect(() => {
    let result = [...flights];

    // Apply search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(flight => 
        flight.flightNumber.toLowerCase().includes(term) ||
        flight.airline.toLowerCase().includes(term) ||
        flight.departure.airport.toLowerCase().includes(term) ||
        flight.destination.airport.toLowerCase().includes(term)
      );
    }

    // Apply status filter
    if (statusFilter) {
      result = result.filter(flight => flight.status === statusFilter);
    }

    setFilteredFlights(result);
  }, [searchTerm, statusFilter, flights]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleStatusChange = (value) => {
    setStatusFilter(value);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setStatusFilter('');
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p style={styles.loadingText}>Loading flights...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.errorContainer}>
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  return (
    <Container style={styles.container}>
      <h1 style={styles.header}>Flight Information</h1>
      
      <FilterBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        statusFilter={statusFilter}
        onStatusChange={handleStatusChange}
        onResetFilters={handleResetFilters}
      />
      
      <div style={styles.resultsCount}>
        Showing {filteredFlights.length} {filteredFlights.length === 1 ? 'flight' : 'flights'}
      </div>
      
      {filteredFlights.length > 0 ? (
        <FlightList flights={filteredFlights} />
      ) : (
        <Alert variant="info">
          No flights found matching your criteria. Try adjusting your filters.
        </Alert>
      )}
    </Container>
  );
};

export default FlightsPage;
