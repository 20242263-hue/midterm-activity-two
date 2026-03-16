import { useForm } from 'react-hook-form';

function StudentForm({ addStudent }) {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    addStudent(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('name', { required: 'Name is required' })} placeholder="Name" />
        {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
      </div>
      <div>
        <input {...register('email', { 
          required: 'Email is required',
          pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' } 
        })} placeholder="Email" />
        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
      </div>
      <div>
        <input {...register('course', { required: 'Course is required' })} placeholder="Course" />
        {errors.course && <span style={{ color: 'red' }}>{errors.course.message}</span>}
      </div>
      <button type="submit" disabled={!isValid}>Register</button>
    </form>
  );
}

export default StudentForm;