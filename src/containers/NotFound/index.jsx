import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>{":("}</h1>
      <h2>Oops! Page not found</h2>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default NotFound;
