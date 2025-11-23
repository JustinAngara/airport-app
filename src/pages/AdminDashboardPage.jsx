import { Container, Row, Col, Button, Table, Badge } from 'react-bootstrap';

const styles = {
  statCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    height: '100%',
    boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'
  },
  statValue: {
    fontSize: '1.75rem',
    fontWeight: '600',
    margin: '0.5rem 0 0',
    color: '#212529'
  },
  statLabel: {
    color: '#6c757d',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '0'
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#212529'
  },
  card: {
    marginBottom: '1.5rem',
    border: '1px solid rgba(0, 0, 0, 0.125)',
    borderRadius: '0.5rem',
    overflow: 'hidden'
  },
  cardHeader: {
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
    padding: '1rem 1.25rem'
  },
  cardBody: {
    padding: '1.25rem'
  },
  activityItem: {
    padding: '0.75rem 1.25rem',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
  },
  actionButton: {
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
    minWidth: '140px',
    textAlign: 'left'
  },
  statusBadge: {
    fontSize: '0.75rem',
    padding: '0.35em 0.65em',
    fontWeight: '500'
  }
};

const AdminDashboardPage = () => {
  // Mock data
  const stats = {
    totalFlights: 128,
    activeFlights: 24,
    totalPassengers: 5243,
    availableGates: 8
  };

  const recentActivity = [
    { id: 1, action: 'Flight AA123 has been delayed', time: '5 minutes ago' },
    { id: 2, action: 'New flight BA456 added', time: '1 hour ago' },
    { id: 3, action: 'Gate changed for DL789', time: '2 hours ago' },
    { id: 4, action: 'System maintenance completed', time: '1 day ago' },
  ];

  const flights = [
    { id: 1, number: 'AA123', route: 'JFK → LAX', departure: '08:00 AM', status: 'On Time', statusVariant: 'success' },
    { id: 2, number: 'DL456', route: 'LAX → ORD', departure: '09:15 AM', status: 'Delayed', statusVariant: 'warning' },
    { id: 3, number: 'UA789', route: 'ORD → DFW', departure: '10:30 AM', status: 'Boarding', statusVariant: 'info' },
  ];

  return (
    <Container className="py-4">
      <h1 style={styles.sectionTitle}>Admin Dashboard</h1>
      
      <Row className="g-4 mb-4">
        <Col md={3}>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>Total Flights</div>
            <div style={styles.statValue}>{stats.totalFlights}</div>
          </div>
        </Col>
        <Col md={3}>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>Active Flights</div>
            <div style={styles.statValue}>{stats.activeFlights}</div>
          </div>
        </Col>
        <Col md={3}>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>Passengers Today</div>
            <div style={styles.statValue}>{stats.totalPassengers.toLocaleString()}</div>
          </div>
        </Col>
        <Col md={3}>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>Available Gates</div>
            <div style={{ ...styles.statValue, color: stats.availableGates > 2 ? '#198754' : '#fd7e14' }}>
              {stats.availableGates}
            </div>
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col md={8}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h5 style={styles.sectionTitle}>Quick Actions</h5>
            </div>
            <div style={styles.cardBody}>
              <div className="d-flex flex-wrap">
                <Button variant="primary" style={styles.actionButton}>
                  <i className="bi bi-plus-circle me-2"></i>Add Flight
                </Button>
                <Button variant="outline-secondary" style={styles.actionButton}>
                  <i className="bi bi-pencil-square me-2"></i>Edit Flight
                </Button>
                <Button variant="outline-danger" style={styles.actionButton}>
                  <i className="bi bi-x-circle me-2"></i>Cancel Flight
                </Button>
                <Button variant="outline-info" style={styles.actionButton}>
                  <i className="bi bi-people me-2"></i>Manage Crew
                </Button>
              </div>
            </div>
          </div>
          
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h5 style={styles.sectionTitle}>Flight Status Overview</h5>
            </div>
            <div style={styles.cardBody}>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Flight</th>
                    <th>Route</th>
                    <th>Departure</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {flights.map(flight => (
                    <tr key={flight.id}>
                      <td>{flight.number}</td>
                      <td>{flight.route}</td>
                      <td>{flight.departure}</td>
                      <td>
                        <Badge bg={flight.statusVariant} style={styles.statusBadge}>
                          {flight.status}
                        </Badge>
                      </td>
                      <td>
                        <Button variant="outline-primary" size="sm">View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
        
        <Col md={4}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h5 style={styles.sectionTitle}>Recent Activity</h5>
            </div>
            <div>
              {recentActivity.map(activity => (
                <div key={activity.id} style={styles.activityItem}>
                  <div className="d-flex justify-content-between">
                    <div>{activity.action}</div>
                    <small className="text-muted">{activity.time}</small>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center p-3 border-top">
              <Button variant="link" size="sm">View All Activity</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboardPage;
