import { useParams, Link } from 'react-router-dom';

function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students[id];

  if (!student) return (
    <div style={{ padding: '1rem' }}>
      <p>Student not found</p>
      <Link to="/register">Back to Register</Link>
    </div>
  );

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <Link to="/register">Back to Register</Link>
    </div>
  );
}

export default StudentDetails;