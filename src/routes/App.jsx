import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Welcome from "../components/Welcome";
import Dashboardchart from "../components/Dashbaordchart";

function App() {
  const [isSiderbaropen, setsiderbar] = useState(false);
  const toggeleSidebar = () => {
    setsiderbar(!isSiderbaropen);
  };
  return (
    <>
      <Header toggeleSidebar={toggeleSidebar}></Header>
      <div className="app-container">
        <div className="sidebar">{isSiderbaropen && <Sidebar />}</div>
        <div className="content">
          <Dashboardchart></Dashboardchart>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
