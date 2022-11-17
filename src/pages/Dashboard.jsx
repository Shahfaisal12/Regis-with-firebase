
import { Button } from "@mui/material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("auth");
    if (authToken) {
      navigate("/dashboard");
    }
    if (!authToken) {
      navigate("/registration");
    }
  }, [navigate]);

  const logout = () => {
    sessionStorage.removeItem("auth");
    navigate("/registration");
  };

  return (

   <div className="text-center">
   <h1 className="fw-bold">Dashboard</h1>
    <Link to='/userdetail' ><Button className="fw-bold">Users Detail</Button></Link> /
    <Button className="fw-bold" onClick={logout}>Log out</Button> 
   </div>
  );
}
export default Dashboard;
