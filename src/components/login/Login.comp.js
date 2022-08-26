import React from "react";
import { PropTypes } from "prop-types";

const Login = ({
  handleOnChange,
  handleOnSubmit,
  formSwicher,
  email,
  pass,
}) => {
  return (
    <div>
      <form autoComplete="off" onSubmit={handleOnSubmit}>
        <h1 className="text-danger text-center">Sign In</h1>
        <div className="mb-3">
          <label>Email address</label>
          <input
            value={email}
            onChange={handleOnChange}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={handleOnChange}
            value={pass}
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
        <p className="forgot-password text-right">
          <a onClick={() => formSwicher("reset")}> Forgot password?</a>
        </p>
      </form>
    </div>
  );
};

Login.propTypes = {
  handleOnChange: PropTypes.any.isRequired,
  handleOnSubmit: PropTypes.any.isRequired,
  formSwicher: PropTypes.any.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};

export default Login;
