import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container className="mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Welcome to Airport Management System</h1>
        <p className="lead text-muted">
          Efficiently manage flights, passengers, and airport operations with our comprehensive management system.
        </p>
      </div>
      
      <Row className="g-4">
        <Col md={4}>
          <div className="h-100 border rounded-3 p-4 d-flex flex-column">
            <h3 className="mb-3">Flight Information</h3>
            <p className="text-muted mb-4">
              View real-time flight schedules, status, and details for all incoming and outgoing flights.
            </p>
            <Button 
              as={Link} 
              to="/flights" 
              variant="primary" 
              className="mt-auto align-self-stretch"
            >
              View Flights
            </Button>
          </div>
        </Col>
        
        <Col md={4}>
          <div className="h-100 border rounded-3 p-4 d-flex flex-column">
            <h3 className="mb-3">Admin Dashboard</h3>
            <p className="text-muted mb-4">
              Access administrative tools to manage flights, passengers, and airport operations.
            </p>
            <Button 
              as={Link} 
              to="/admin" 
              variant="outline-primary" 
              className="mt-auto align-self-stretch"
            >
              Go to Admin
            </Button>
          </div>
        </Col>
        
        <Col md={4}>
          <div className="h-100 border rounded-3 p-4 d-flex flex-column">
            <h3 className="mb-3">About Us</h3>
            <p className="text-muted mb-4">
              Learn more about our airport, services, and how we're making air travel better.
            </p>
            <Button 
              variant="outline-secondary" 
              className="mt-auto align-self-stretch"
              disabled
            >
              Coming Soon
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
