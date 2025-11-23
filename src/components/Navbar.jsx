import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const location = useLocation();
  
  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      className="mb-4 py-2 shadow-sm sticky-top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <i className="bi bi-airplane me-2"></i>
          Airport Management
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-3">
            <Nav.Link 
              as={Link} 
              to="/" 
              active={location.pathname === "/"}
              className="px-3 py-2 rounded"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/flights"
              active={location.pathname === "/flights"}
              className="px-3 py-2 rounded"
            >
              Flights
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/admin"
              active={location.pathname === "/admin"}
              className="px-3 py-2 rounded"
            >
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
