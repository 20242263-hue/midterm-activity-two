import { useState } from 'react';

function StudentForm({ addStudent }) {
  const [student, setStudent] = useState({ name: '', email: '', course: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!student.name) errs.name = 'Name is required';
    if (!student.email) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(student.email)) {
      errs.email = 'Email is invalid';
    }
    if (!student.course) errs.course = 'Course is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addStudent(student);
      setStudent({ name: '', email: '', course: '' });
      setErrors({});
    }
  };

  const isFormValid = student.name && student.email && student.course && Object.keys(errors).length === 0;

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <div>
        <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} />
        {errors.name && <span style={{ color: 'red', marginLeft: '1rem' }}>{errors.name}</span>}
      </div>
      <div>
        <input type="email" name="email" placeholder="Email" value={student.email} onChange={handleChange} />
        {errors.email && <span style={{ color: 'red', marginLeft: '1rem' }}>{errors.email}</span>}
      </div>
      <div>
        <input type="text" name="course" placeholder="Course" value={student.course} onChange={handleChange} />
        {errors.course && <span style={{ color: 'red', marginLeft: '1rem' }}>{errors.course}</span>}
      </div>
      <button type="submit" disabled={!isFormValid} style={{ marginTop: '1rem' }}>Register</button>
    </form>
  );
}

export default StudentForm;