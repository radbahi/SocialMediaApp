import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media App!</h3>
          <span className="loginDescription">
            Description of the Social Media App
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm Password" className="loginInput" />
            <button className="loginButton">Sign up</button>
            <button className="loginRegisterButton">
              Log into an existing account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
