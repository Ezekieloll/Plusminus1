import Navbar from "../components/Navbar";
import "../styles/Dashboard.css"; // ✅ Add styles

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content">
        <h1>Welcome to the Dashboard 🎉</h1>
        <p>Manage your profile, settings, and more!</p>
      </div>
    </div>
  );
}
