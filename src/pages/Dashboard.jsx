
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("auth");
    if (authToken) {
      navigate("/dashboard");
    }
    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    sessionStorage.removeItem("auth");
    navigate("/login");
  };

  return (

   <div className="text-center">
   <h1 className="fw-bold">Dashboard</h1>
    <Button className="fw-bold" onClick={logout}>Log out</Button>
   </div>
  );
}
export default Dashboard;
