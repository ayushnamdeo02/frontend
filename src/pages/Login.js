import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function Login() {
  // Define state for form data (e.g., username and password)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Axios Request:', formData);

    try {
      const response = await axios.post('/api/login', formData);
      console.log('Axios Response:', response);
      // Handle successful login and response, e.g., redirect to dashboard
    } catch (error) {
      console.error('Axios Error:', error);
      // Handle login error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
