import StatusBadge from "../components/StatusBadge.jsx";

function MyReports() {
  return (
    <section>
      <header className="page-header">
        <h1>My Reports</h1>
        <p>Track status, category, and details for every issue you submit.</p>
      </header>
      <div className="badge-legend" aria-label="Status types">
        <StatusBadge status="Open" />
        <StatusBadge status="In Progress" />
        <StatusBadge status="Resolved" />
      </div>
      <section className="card">
        <div className="section-title">
          <h2>Submitted reports</h2>
          <span>Title, status, category, and date</span>
        </div>
        <div className="report-list">
          <article className="report-item" aria-hidden="true">
            <div className="report-item-top">
              <h3>Report title</h3>
              <StatusBadge status="Open" />
            </div>
            <div className="report-meta">
              <span>Category</span>
              <span>Date submitted</span>
            </div>
            <p>
              Description preview — a short snippet of the issue will show here.
            </p>
          </article>
          <div className="empty-state">
            <strong>No reports to show yet</strong>
            After you submit an issue, it will show up in this list with a
            status badge.
          </div>
        </div>
      </section>
    </section>
  );
}

export default MyReports;
