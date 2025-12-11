const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    border: '1px solid #e9ecef',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'all 0.2s ease-in-out',
    height: '100%',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transform: 'translateY(-2px)'
    }
  },
  cardBody: {
    display: 'flex',
    alignItems: 'center',
    padding: '1.25rem'
  },
  iconContainer: {
    borderRadius: '50%',
    padding: '0.75rem',
    marginRight: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3.5rem',
    height: '3.5rem'
  },
  icon: {
    fontSize: '1.5rem'
  },
  title: {
    fontSize: '0.875rem',
    color: '#6c757d',
    marginBottom: '0.25rem',
    fontWeight: '500'
  },
  value: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#2c3e50',
    margin: '0'
  },
  // Color variants
  primary: { backgroundColor: 'rgba(13, 110, 253, 0.1)', color: '#0d6efd' },
  success: { backgroundColor: 'rgba(25, 135, 84, 0.1)', color: '#198754' },
  warning: { backgroundColor: 'rgba(255, 193, 7, 0.1)', color: '#ffc107' },
  danger: { backgroundColor: 'rgba(220, 53, 69, 0.1)', color: '#dc3545' },
  info: { backgroundColor: 'rgba(13, 202, 240, 0.1)', color: '#0dcaf0' },
  secondary: { backgroundColor: 'rgba(108, 117, 125, 0.1)', color: '#6c757d' }
};

const AdminSummaryCard = ({ title, value, icon, variant = 'primary' }) => {
  const variantStyle = styles[variant] || styles.primary;
  
  return (
    <div style={styles.card}>
      <div style={styles.cardBody}>
        <div style={{ ...styles.iconContainer, ...variantStyle }}>
          <span style={styles.icon}>{icon}</span>
        </div>
        <div>
          <div style={styles.title}>{title}</div>
          <h4 style={styles.value}>{value}</h4>
        </div>
      </div>
    </div>
  );
};

export default AdminSummaryCard;
