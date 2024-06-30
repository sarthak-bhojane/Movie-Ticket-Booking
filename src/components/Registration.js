import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import '../App.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/register', formData)
      .then(response => {
        alert('Registration successful');
        // Optionally clear form inputs after successful registration
        setFormData({
          name: '',
          email: '',
          password: ''
        });
      })
      .catch(error => {
        console.error('There was an error registering!', error);
      });
  };

  return (
    <Container className="container">
      <h2 className="form-heading">Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;
