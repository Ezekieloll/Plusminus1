import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";
import "../styles/AuthPage.css"; // Add this for styling

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <AuthForm isSignUp={true} onAuth={handleSignup} />
    </div>
  );
}
