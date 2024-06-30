// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('/api/login', formData)
//       .then(response => {
//         alert('Login successful');
//       })
//       .catch(error => {
//         console.error('There was an error logging in!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//       <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;


// ----
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Container } from 'react-bootstrap';
// import '../App.css';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('/api/login', formData)
//       .then(response => {
//         alert('Login successful');
//       })
//       .catch(error => {
//         console.error('There was an error logging in!', error);
//       });
//   };

//   return (
//     <Container className="container">
//       <h2 className="form-heading">Login</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         </Form.Group>
//         <Button variant="primary" type="submit" block>
//           Login
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import '../App.css';

const Login = () => {
  const [formData, setFormData] = useState({
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
    axios.post('/api/login', formData)
      .then(response => {
        alert('Login successful');
      })
      .catch(error => {
        console.error('There was an error logging in!', error);
      });
  };

  return (
    <Container className="container">
      <h2 className="form-heading">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
