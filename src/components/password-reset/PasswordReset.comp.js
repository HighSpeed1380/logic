import React from "react";
import { PropTypes } from "prop-types";

const ResetPassword = ({
  handleOnChange,
  handleOnResetSubmit,
  formSwicher,
  email,
}) => {
  return (
    <div>
      <form autoComplete="off" onSubmit={handleOnResetSubmit}>
        <h1 className="text-danger text-center">Reset Password</h1>
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

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </div>
        <p className="forgot-password text-right">
          <a onClick={() => formSwicher("login")}>Loging now</a>
        </p>
      </form>
    </div>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.any.isRequired,
  handleOnResetSubmit: PropTypes.any.isRequired,
  formSwicher: PropTypes.any.isRequired,
  email: PropTypes.string.isRequired,
};

export default ResetPassword;
