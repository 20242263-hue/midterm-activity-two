import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/home" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;