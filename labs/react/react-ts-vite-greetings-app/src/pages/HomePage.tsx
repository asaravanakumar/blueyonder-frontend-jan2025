import React from "react";
import ClassCompLifeCycle from "../components/ClassCompLifeCycle";
import FuncCompLifeCycle from "../components/FuncCompLifeCycle";

const HomePage = () => {
  return (
    <main className="text-center">
      <p>Welcome to React Learning!!!</p>
      <div className="container mt-3 p-2 bg-primary text-white">
        Hello React!!!
      </div>
      <ClassCompLifeCycle />
      <FuncCompLifeCycle />
    </main>
  );
};

export default HomePage;
