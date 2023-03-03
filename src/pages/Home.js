import React from "react";
import LogIn from "../components/LogIn";

function Home() {
  return (
    <>
      <div className="headerText">
        <h1>PlanIt</h1>
      </div>
      <div>
        <LogIn />
      </div>
    </>
  );
}

export default Home;
