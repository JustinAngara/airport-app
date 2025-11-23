import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container className="text-center py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details my-4">
              <p className="lead">
                Sorry, the page you are looking for does not exist or has been moved.
              </p>
            </div>
            <div className="error-actions mt-4">
              <Button as={Link} to="/" variant="primary" className="me-3">
                <i className="bi bi-house-door-fill me-2"></i>
                Take Me Home
              </Button>
              <Button as={Link} to="/flights" variant="outline-secondary">
                <i className="bi bi-airplane me-2"></i>
                View Flights
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
