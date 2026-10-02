function RecentReports() {
  return (
    <section className="card">
      <div className="section-title">
        <h2>Recent reports</h2>
        <span>Latest submissions</span>
      </div>
      <div className="empty-state">
        <strong>No reports yet</strong>
        Recent issues will show title, status, category, and date here.
      </div>
    </section>
  );
}

export default RecentReports;
