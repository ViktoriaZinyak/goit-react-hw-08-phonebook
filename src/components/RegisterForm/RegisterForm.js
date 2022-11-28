import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Input, Form, Label, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        // name: 'vika grhrt',
        // email: 'vikatrhr@ukr.net',
        // password: '12345dg',
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" required />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" required />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" required />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
