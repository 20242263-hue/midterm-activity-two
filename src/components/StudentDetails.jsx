import { useParams } from 'react-router-dom';

function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students[id]; // assuming students array is passed as props

  if (!student) return <p>Student not found.</p>;

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}

export default StudentDetails;