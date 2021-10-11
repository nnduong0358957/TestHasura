import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { register } from "../actions/users.js";

function Register() {
  const history = useHistory();

  const [isShowPass, setIsShowPass] = useState(false);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const _register = async (e) => {
    e.preventDefault();
    await dispatch(register(fullName, userName, password));
    if (localStorage.getItem("token")) history.push("/TestHasura");
  };

  return (
    <div className="card card-center">
      <h1 className="title">Register</h1>
      <form className="form">
        <div className="label-input">Name:</div>
        <div className="Icon-inside">
          <input
            className="input-field"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="label-input mt">User name:</div>
        <div className="Icon-inside">
          <input
            className="input-field"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <FontAwesomeIcon className="input-icon" icon={faUser} />
        </div>
        <div className="label-input mt">Password:</div>
        <div className="Icon-inside">
          <input
            className="input-field"
            id="password"
            type={isShowPass ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon
            className="input-icon pointer"
            icon={isShowPass ? faEyeSlash : faEye}
            onClick={() => {
              setIsShowPass(!isShowPass);
            }}
          />
        </div>
        <button
          className="btn-login pointer"
          onClick={(e) => {
            _register(e);
          }}
        >
          Register
        </button>

        <Link className="switch-login-register" to="/TestHasura/login">
          Back
        </Link>
      </form>
    </div>
  );
}

export default Register;
