import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Welcome to the Student Registration System</h1>
      <p>Click the link below to register students:</p>
      <Link to="/register">Go to Register</Link>
    </div>
  );
}

export default Home;