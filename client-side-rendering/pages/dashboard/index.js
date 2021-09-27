import { useState, useEffect } from "react";

function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(async () => {
    const responce = await fetch("http://localhost:5000/dashboard");
    const data = await responce.json();

    setDashboardData(data);
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>Loading..............</h1>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h2>name: {dashboardData.name}</h2>
          <h4>POST: {dashboardData.posts}</h4>
          <h4>likes: {dashboardData.likes}</h4>
          <h4>followers: {dashboardData.followers} </h4>
          <h4>following: {dashboardData.following} </h4>
        </div>
      </>
    );
  }
}

export default Dashboard;
