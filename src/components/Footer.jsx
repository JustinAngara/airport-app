const styles = {
  footer: {
    backgroundColor: '#212529',
    color: '#fff',
    padding: '2rem 0',
    marginTop: '3rem'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px'
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -15px'
  },
  col: {
    padding: '0 15px',
    marginBottom: '1.5rem',
    '@media (min-width: 768px)': {
      flex: '0 0 50%',
      maxWidth: '50%'
    },
    '@media (min-width: 992px)': {
      flex: '0 0 25%',
      maxWidth: '25%'
    }
  },
  colMd4: {
    flex: '0 0 100%',
    maxWidth: '100%',
    '@media (min-width: 768px)': {
      flex: '0 0 33.333333%',
      maxWidth: '33.333333%'
    }
  },
  colMd3: {
    flex: '0 0 100%',
    maxWidth: '100%',
    '@media (min-width: 768px)': {
      flex: '0 0 50%',
      maxWidth: '50%'
    },
    '@media (min-width: 992px)': {
      flex: '0 0 25%',
      maxWidth: '25%'
    }
  },
  colMd2: {
    flex: '0 0 100%',
    maxWidth: '100%',
    '@media (min-width: 768px)': {
      flex: '0 0 50%',
      maxWidth: '50%'
    },
    '@media (min-width: 992px)': {
      flex: '0 0 16.666667%',
      maxWidth: '16.666667%'
    }
  },
  heading: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
    color: '#fff',
    fontWeight: '500'
  },
  textMuted: {
    color: '#adb5bd',
    lineHeight: '1.6',
    marginBottom: '1rem',
    fontSize: '0.875rem'
  },
  listUnstyled: {
    listStyle: 'none',
    paddingLeft: '0',
    marginBottom: '1rem'
  },
  listItem: {
    marginBottom: '0.5rem'
  },
  link: {
    color: '#adb5bd',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
      color: '#fff',
      textDecoration: 'none'
    }
  },
  address: {
    color: '#adb5bd',
    fontStyle: 'normal',
    lineHeight: '1.6',
    marginBottom: '1rem',
    fontSize: '0.875rem'
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem'
  },
  socialLink: {
    color: '#fff',
    fontSize: '1.25rem',
    transition: 'opacity 0.2s ease-in-out',
    '&:hover': {
      opacity: '0.8',
      color: '#fff'
    }
  },
  divider: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    margin: '1.5rem 0',
    width: '100%'
  },
  copyright: {
    textAlign: 'center',
    color: '#6c757d',
    fontSize: '0.75rem',
    marginTop: '1rem'
  },
  flexGrow: {
    flexGrow: '1'
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={{ ...styles.col, ...styles.colMd4 }}>
            <h5 style={styles.heading}>Airport Management System</h5>
            <p style={styles.textMuted}>
              Efficiently manage flights, passengers, and airport operations with our comprehensive management system.
            </p>
          </div>
          
          <div style={{ ...styles.col, ...styles.colMd2 }}>
            <h5 style={styles.heading}>Quick Links</h5>
            <ul style={styles.listUnstyled}>
              <li style={styles.listItem}>
                <a href="/" style={styles.link}>Home</a>
              </li>
              <li style={styles.listItem}>
                <a href="/flights" style={styles.link}>Flights</a>
              </li>
              <li style={styles.listItem}>
                <a href="/admin" style={styles.link}>Admin</a>
              </li>
              <li style={styles.listItem}>
                <a href="#" style={styles.link}>About Us</a>
              </li>
            </ul>
          </div>
          
          <div style={{ ...styles.col, ...styles.colMd3 }}>
            <h5 style={styles.heading}>Contact Us</h5>
            <address style={styles.address}>
              123 Airport Way<br />
              New York, NY 10001<br />
              <span style={{ color: '#fff' }}>P:</span> (123) 456-7890
            </address>
          </div>
          
          <div style={{ ...styles.col, ...styles.colMd3 }}>
            <h5 style={styles.heading}>Connect With Us</h5>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink} aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" style={styles.socialLink} aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" style={styles.socialLink} aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" style={styles.socialLink} aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div style={styles.divider}></div>
        
        <div style={styles.copyright}>
          © {currentYear} Airport Management System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
