import SummaryCards from "../components/SummaryCards.jsx";
import RecentReports from "../components/RecentReports.jsx";
import AssistantCard from "../components/AssistantCard.jsx";

function Dashboard() {
  return (
    <section>
      <header className="page-header">
        <h1>Dashboard</h1>
        <p>See open work, recent reports, and a suggested next action at a glance.</p>
      </header>
      <SummaryCards />
      <div className="dashboard-grid">
        <RecentReports />
        <AssistantCard />
      </div>
    </section>
  );
}

export default Dashboard;
