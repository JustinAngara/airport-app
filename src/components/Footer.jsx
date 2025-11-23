import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>Airport Management System</h5>
            <p className="text-muted">
              Efficiently manage flights, passengers, and airport operations with our comprehensive management system.
            </p>
          </Col>
          <Col md={2} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted text-decoration-none">Home</a></li>
              <li><a href="/flights" className="text-muted text-decoration-none">Flights</a></li>
              <li><a href="/admin" className="text-muted text-decoration-none">Admin</a></li>
              <li><a href="#" className="text-muted text-decoration-none">About Us</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-3">
            <h5>Contact Us</h5>
            <address className="text-muted">
              123 Airport Way<br />
              New York, NY 10001<br />
              <abbr title="Phone" className="text-light">P:</abbr> (123) 456-7890
            </address>
          </Col>
          <Col md={3}>
            <h5>Connect With Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
            </div>
          </Col>
        </Row>
        <hr className="mt-4 mb-3" />
        <div className="text-center text-muted">
          <small>© {new Date().getFullYear()} Airport Management System. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
