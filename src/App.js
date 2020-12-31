import React from "react";
import Dashboard from "./Dashboard";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
