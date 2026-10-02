import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ReportIssue from "./pages/ReportIssue.jsx";
import MyReports from "./pages/MyReports.jsx";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app">
      <NavBar currentPage={page} onNavigate={setPage} />
      <main className="content" id="main">
        {page === "dashboard" && <Dashboard />}
        {page === "report" && <ReportIssue />}
        {page === "reports" && <MyReports />}
      </main>
    </div>
  );
}

export default App;
