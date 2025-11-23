import { Form, Row, Col, Button } from 'react-bootstrap';

const FilterBar = ({ 
  searchTerm, 
  onSearchChange, 
  statusFilter, 
  onStatusChange,
  onResetFilters 
}) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Form>
          <Row className="align-items-end">
            <Col md={5}>
              <Form.Group controlId="search">
                <Form.Label>Search Flights</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Flight number, destination, or airline..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </Form.Group>
            </Col>
            
            <Col md={4}>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Select 
                  value={statusFilter}
                  onChange={(e) => onStatusChange(e.target.value)}
                >
                  <option value="">All Statuses</option>
                  <option value="On Time">On Time</option>
                  <option value="Delayed">Delayed</option>
                  <option value="Boarding">Boarding</option>
                  <option value="Departed">Departed</option>
                  <option value="Cancelled">Cancelled</option>
                </Form.Select>
              </Form.Group>
            </Col>
            
            <Col md={3} className="d-flex">
              <Button 
                variant="outline-secondary" 
                className="ms-auto"
                onClick={onResetFilters}
              >
                Reset Filters
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FilterBar;
