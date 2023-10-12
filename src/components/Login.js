import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();




    // Basic validation
    let hasError = false;
    const newErrors = { username: '', password: '' };

    if (formData.username === '') {
      newErrors.username = 'Username is required';
      hasError = true;
    }

    if (formData.password === '') {
      newErrors.password = 'Password is required';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
    } else {
      // Here, you can perform your login logic
      console.log('Login data:', formData);
    }
  };

  return (
    <div style={{backgroundColor: "#f0f0f0", display: "flex", justifyContent: "center", alignItems: "center",
 flexDirection: "column", minHeight: "100vh"}}>
     <div style={{backgroundColor: "lightgrey", padding: "40px", borderRadius: "20px"}}>
     <h2 style={{textAlign:"center", fontSize: "38px"}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className='form-control'
           
          />
          <span className="error"style={{color: "red"}}>{errors.username}</span>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className='form-control'
          />
          <span className="error" style={{color: "red"}}>{errors.password}</span>
        </div>
        <button type="submit" className='btn btn-danger col-12 mt-3'>Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
