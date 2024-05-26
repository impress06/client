import React from "react";
import axios from 'axios';

function SignUpForm() {
  const [state, setState] = React.useState({
    userName: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = React.useState("");

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { userName, email, password } = state;

    try {
      const response = await axios.post("http://127.0.0.1:8000/user", {
        userName,
        email,
        password
      });

      // Success message or any other logic can go here 
      setMessage("Login successful!");
      console.log("responce",response)
    } catch (error) {
      // Error handling logic can go here
      setMessage("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="userName"
          value={state.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>SignUp</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default SignUpForm;
