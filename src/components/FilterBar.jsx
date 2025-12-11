import { Button } from 'react-bootstrap';

const styles = {
  container: {
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    border: '1px solid #e9ecef',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    padding: '1.25rem',
    marginBottom: '1.5rem'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    alignItems: 'flex-end'
  },
  formGroup: {
    flex: '1 1 300px',
    marginBottom: '0'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#495057'
  },
  input: {
    width: '100%',
    padding: '0.5rem 0.75rem',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    color: '#212529',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    '&:focus': {
      borderColor: '#86b7fe',
      outline: '0',
      boxShadow: '0 0 0 0.25rem rgba(13, 110, 253, 0.25)'
    }
  },
  select: {
    display: 'block',
    width: '100%',
    padding: '0.5rem 2.25rem 0.5rem 0.75rem',
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#212529',
    backgroundColor: '#fff',
    backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23343a40\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M2 5l6 6 6-6\'/%3e%3c/svg%3e")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0.75rem center',
    backgroundSize: '16px 12px',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem',
    appearance: 'none',
    '&:focus': {
      borderColor: '#86b7fe',
      outline: '0',
      boxShadow: '0 0 0 0.25rem rgba(13, 110, 253, 0.25)'
    }
  },
  button: {
    display: 'inline-block',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#6c757d',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundColor: 'transparent',
    border: '1px solid #6c757d',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    borderRadius: '0.25rem',
    transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#6c757d',
      borderColor: '#6c757d'
    },
    '&:focus': {
      outline: '0',
      boxShadow: '0 0 0 0.25rem rgba(108, 117, 125, 0.25)'
    }
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: '1 1 100%',
    marginTop: '0.5rem'
  }
};

const FilterBar = ({ 
  searchTerm, 
  onSearchChange, 
  statusFilter, 
  onStatusChange,
  onResetFilters 
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="search">
            Search Flights
          </label>
          <input
            id="search"
            type="text"
            placeholder="Flight number, destination, or airline..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            style={styles.input}
          />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="status">
            Status
          </label>
          <select
            id="status"
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
            style={styles.select}
          >
            <option value="">All Statuses</option>
            <option value="On Time">On Time</option>
            <option value="Delayed">Delayed</option>
            <option value="Boarding">Boarding</option>
            <option value="Departed">Departed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        
        <div style={styles.buttonContainer}>
          <button 
            type="button"
            onClick={onResetFilters}
            style={styles.button}
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
