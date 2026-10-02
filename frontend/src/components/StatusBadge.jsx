function statusClass(status) {
  if (status === "In Progress") return "badge badge-in-progress";
  if (status === "Resolved") return "badge badge-resolved";
  return "badge badge-open";
}

function StatusBadge({ status = "Open" }) {
  return <span className={statusClass(status)}>{status}</span>;
}

export default StatusBadge;
