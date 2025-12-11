import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const styles = {
  navbar: {
    backgroundColor: '#212529',
    padding: '0.5rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: '0',
    zIndex: '1020',
    marginBottom: '1.5rem'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.25rem',
    fontWeight: '600',
    padding: '0.5rem 0',
    '&:hover': {
      color: '#fff',
      textDecoration: 'none'
    }
  },
  brandIcon: {
    marginRight: '0.5rem',
    fontSize: '1.5rem'
  },
  toggleButton: {
    padding: '0.25rem 0.75rem',
    fontSize: '1.25rem',
    lineHeight: '1',
    backgroundColor: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '0.25rem',
    color: 'rgba(255, 255, 255, 0.75)',
    cursor: 'pointer',
    display: 'none',
    '@media (max-width: 991.98px)': {
      display: 'block'
    }
  },
  navCollapse: {
    flexBasis: '100%',
    flexGrow: '1',
    alignItems: 'center',
    '@media (min-width: 992px)': {
      display: 'flex !important',
      flexBasis: 'auto'
    }
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '0',
    marginBottom: '0',
    listStyle: 'none',
    marginTop: '0.5rem',
    '@media (min-width: 992px)': {
      flexDirection: 'row',
      marginLeft: '1rem',
      marginTop: '0'
    }
  },
  navItem: {
    marginBottom: '0.25rem',
    '@media (min-width: 992px)': {
      marginRight: '0.5rem',
      marginBottom: '0'
    }
  },
  navLink: {
    display: 'block',
    padding: '0.5rem 1rem',
    color: 'rgba(255, 255, 255, 0.75)',
    textDecoration: 'none',
    transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out',
    borderRadius: '0.25rem',
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.9)',
      textDecoration: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    '&.active': {
      color: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.15)'
    }
  },
  '@media (max-width: 991.98px)': {
    navCollapse: {
      display: 'none',
      '&.show': {
        display: 'flex',
        flexBasis: '100%',
        flexDirection: 'column',
        paddingTop: '1rem'
      }
    }
  }
};

const NavigationBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  return (
    <header style={styles.navbar}>
      <div style={styles.container}>
        <Link to="/" style={styles.brand}>
          <i className="bi bi-airplane" style={styles.brandIcon}></i>
          Airport Management
        </Link>
        
        <button 
          type="button" 
          onClick={toggleNavbar}
          style={styles.toggleButton}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        
        <nav 
          id="basic-navbar-nav" 
          style={{
            ...styles.navCollapse,
            ...(isOpen ? { display: 'flex' } : {})
          }}
        >
          <ul style={styles.nav}>
            <li style={styles.navItem}>
              <Link 
                to="/" 
                style={{
                  ...styles.navLink,
                  ...(isActive('/') ? styles.navLink.active : {})
                }}
                className={isActive('/')}
              >
                Home
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link 
                to="/flights" 
                style={{
                  ...styles.navLink,
                  ...(isActive('/flights') ? styles.navLink.active : {})
                }}
                className={isActive('/flights')}
              >
                Flights
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link 
                to="/admin" 
                style={{
                  ...styles.navLink,
                  ...(isActive('/admin') ? styles.navLink.active : {})
                }}
                className={isActive('/admin')}
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
