import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../firebase/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await loginUser(email, password);
      navigate("/learn");
    } catch (error) {
      setErrorMessage(getFriendlyAuthError(error.code));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="page auth-page">
      <h1>Login</h1>

      <form className="auth-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            autoComplete="current-password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button className="button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>

      {errorMessage && (
        <div className="error-box" role="alert">
          <p>{errorMessage}</p>
        </div>
      )}

     
    </section>
  );
}

function getFriendlyAuthError(code) {
  switch (code) {
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Incorrect email or password.";
    default:
      return "Login failed. Please try again.";
  }
}

export default Login;