import { useState } from "react";
import "./entry.style.css";
import Login from "../../components/login/Login.comp";
import ResetPassword from "../../components/password-reset/PasswordReset.comp";
import Alert from "@mui/material/Alert";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmload, setFrmLoad] = useState("login");
  const [alert, setAlert] = useState(false);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setAlert(true);
    }
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setAlert(true);
    } else setAlert(false);
  };

  const formSwicher = (frmTypes) => {
    setFrmLoad(frmTypes);
    setAlert(false);
  };

  return (
    <div className="entry-page bg-info">
      <Alert
        className="text-center"
        style={{ position: "fixed", top: "1%" }}
        hidden={!alert}
        severity="error"
      >
        Please input corretly
      </Alert>
      <div className="card">
        <div className="column horizontal-center">
          <div className="row horizontal-center p-3">
            {frmload === "login" && (
              <Login
                handleOnChange={handleOnchange}
                handleOnSubmit={handleOnSubmit}
                formSwicher={formSwicher}
                email={email}
                pass={password}
              />
            )}
            {frmload === "reset" && (
              <ResetPassword
                handleOnChange={handleOnchange}
                handleOnResetSubmit={handleOnResetSubmit}
                formSwicher={formSwicher}
                email={email}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
