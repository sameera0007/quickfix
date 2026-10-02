function SummaryCards() {
  return (
    <div className="stat-grid">
      <article className="card stat-card stat-open">
        <div className="stat-icon" aria-hidden="true">
          ○
        </div>
        <p className="stat-label">Open</p>
        <p className="stat-value">—</p>
      </article>
      <article className="card stat-card stat-progress">
        <div className="stat-icon" aria-hidden="true">
          ◐
        </div>
        <p className="stat-label">In Progress</p>
        <p className="stat-value">—</p>
      </article>
      <article className="card stat-card stat-resolved">
        <div className="stat-icon" aria-hidden="true">
          ✓
        </div>
        <p className="stat-label">Resolved</p>
        <p className="stat-value">—</p>
      </article>
    </div>
  );
}

export default SummaryCards;
