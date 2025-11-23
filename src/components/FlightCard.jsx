import { Badge } from 'react-bootstrap';

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    border: '1px solid #e9ecef',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'all 0.2s ease-in-out',
    height: '100%',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }
  },
  header: {
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #e9ecef',
    padding: '0.75rem 1.25rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem'
  },
  body: {
    padding: '1.25rem'
  },
  flightInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  airport: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
    color: '#2c3e50'
  },
  city: {
    fontSize: '0.875rem',
    color: '#6c757d',
    marginBottom: '0.5rem',
    display: 'block'
  },
  time: {
    fontSize: '1.125rem',
    fontWeight: '500',
    color: '#212529',
    marginTop: '0.5rem'
  },
  divider: {
    color: '#6c757d',
    fontSize: '0.75rem',
    margin: '0.5rem 0'
  },
  gateContainer: {
    textAlign: 'center',
    padding: '0.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '0.25rem',
    minWidth: '80px'
  },
  gateLabel: {
    fontSize: '0.75rem',
    color: '#6c757d',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '0.25rem'
  },
  gateValue: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#2c3e50'
  },
  airline: {
    fontWeight: '500',
    color: '#2c3e50'
  },
  flightNumber: {
    fontWeight: '600',
    color: '#2c3e50',
    marginRight: '0.25rem'
  },
  statusBadge: {
    fontSize: '0.75rem',
    padding: '0.35em 0.65em',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }
};

const FlightCard = ({ flight }) => {
  const { 
    flightNumber, 
    departure, 
    destination, 
    departureTime, 
    status, 
    gate, 
    airline 
  } = flight;

  const statusVariant = {
    'On Time': 'success',
    'Delayed': 'warning',
    'Cancelled': 'danger',
    'Boarding': 'info',
    'Departed': 'primary'
  }[status] || 'secondary';

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div>
          <span style={styles.flightNumber}>{flightNumber}</span>
          <span style={styles.airline}> - {airline}</span>
        </div>
        <Badge bg={statusVariant} style={styles.statusBadge}>
          {status}
        </Badge>
      </div>
      
      <div style={styles.body}>
        <div style={styles.flightInfo}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={styles.airport}>{departure.airport}</div>
            <span style={styles.city}>{departure.city}</span>
            <div style={styles.time}>{departure.time}</div>
          </div>
          
          <div style={{ textAlign: 'center', flex: '0 0 auto' }}>
            <div style={styles.divider}>
              <i className="bi bi-arrow-right"></i>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6c757d' }}>
              {new Date(departureTime).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
          </div>
          
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={styles.airport}>{destination.airport}</div>
            <span style={styles.city}>{destination.city}</span>
            <div style={styles.time}>{destination.time}</div>
          </div>
          
          <div style={styles.gateContainer}>
            <div style={styles.gateLabel}>Gate</div>
            <div style={styles.gateValue}>{gate || 'TBD'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
