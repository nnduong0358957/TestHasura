import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { login } from "../actions/users.js";

function Login() {
  const history = useHistory();

  const [isShowPass, setIsShowPass] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const _login = async (e) => {
    e.preventDefault();
    await dispatch(login(userName, password));
    if (localStorage.getItem("token")) history.push("/TestHasura");
  };

  return (
    <div className="card card-center">
      <h1 className="title">Login</h1>
      <form className="form">
        <div className="label-input">User name:</div>
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
            _login(e);
          }}
        >
          Login
        </button>

        <Link className="switch-login-register" to="/TestHasura/register">
          Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
