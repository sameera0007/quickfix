function NavBar({ currentPage, onNavigate }) {
  return (
    <nav className="nav">
      <div className="brand">
        <div className="brand-mark" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M14.7 6.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4l-7.1 7.1-3.3.3.3-3.3 7.1-7.1Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M5 19h6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div>
          <div className="brand-name">QuickFix</div>
          <span className="brand-tag">Issue tracking</span>
        </div>
      </div>
      <div className="nav-links">
        <button
          type="button"
          className={currentPage === "dashboard" ? "active" : ""}
          onClick={() => onNavigate("dashboard")}
        >
          Dashboard
        </button>
        <button
          type="button"
          className={currentPage === "reports" ? "active" : ""}
          onClick={() => onNavigate("reports")}
        >
          My Reports
        </button>
        <button
          type="button"
          className={`nav-cta${currentPage === "report" ? " active" : ""}`}
          onClick={() => onNavigate("report")}
        >
          Report an Issue
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
