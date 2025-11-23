import { Card } from 'react-bootstrap';

const AdminSummaryCard = ({ title, value, icon, variant = 'primary' }) => {
  const variantClass = `bg-${variant} bg-opacity-10 text-${variant}`;
  
  return (
    <Card className="h-100 border-0 shadow-sm">
      <Card.Body className="d-flex align-items-center">
        <div className={`rounded-circle p-3 me-3 ${variantClass}`}>
          <span style={{ fontSize: '1.5rem' }}>{icon}</span>
        </div>
        <div>
          <h6 className="mb-1 text-muted">{title}</h6>
          <h4 className="mb-0">{value}</h4>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AdminSummaryCard;
