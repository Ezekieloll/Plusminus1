import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";
import "../styles/AuthPage.css"; // Add this for styling

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <AuthForm isSignUp={false} onAuth={handleLogin} />
    </div>
  );
}
