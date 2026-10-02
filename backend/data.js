function getSuggestion(category) {
  const normalized = String(category || "").trim().toLowerCase();

  const rules = {
    plumbing: "Shut off the nearest water valve, place a container under the leak, and contact maintenance.",
    electrical: "Turn off power at the breaker if it is safe to do so, avoid the area, and call an electrician.",
    hvac: "Check the thermostat settings, keep vents clear, and report the unit location to facilities.",
    safety: "Secure the area, warn others nearby, and notify building security right away.",
    cleaning: "Block off the space if it is a hazard, take a photo if you can, and request custodial support.",
    internet: "Restart the device and nearby router, note error messages, and contact IT support.",
  };

  return (
    rules[normalized] ||
    "Inspect the area, document what you see, and notify the responsible team."
  );
}

let nextId = 4;

const issues = [
  {
    id: 1,
    title: "Leaky kitchen faucet",
    description: "The sink in the break room drips constantly and is leaving water on the floor.",
    category: "plumbing",
    status: "Open",
    suggestion: getSuggestion("plumbing"),
    createdAt: "2026-09-30T09:15:00.000Z",
  },
  {
    id: 2,
    title: "Flickering hallway lights",
    description: "Lights on the second-floor hallway flicker every few seconds after dusk.",
    category: "electrical",
    status: "In Progress",
    suggestion: getSuggestion("electrical"),
    createdAt: "2026-09-28T14:40:00.000Z",
  },
  {
    id: 3,
    title: "Conference room AC not cooling",
    description: "Room B is warm during afternoon meetings even with the thermostat set to 70°F.",
    category: "hvac",
    status: "Resolved",
    suggestion: getSuggestion("hvac"),
    createdAt: "2026-09-25T11:05:00.000Z",
  },
];

function getIssues() {
  return issues;
}

function getIssueById(id) {
  return issues.find((issue) => issue.id === id);
}

function addIssue({ title, description, category }) {
  const issue = {
    id: nextId,
    title: String(title).trim(),
    description: String(description || "").trim(),
    category: String(category || "general").trim(),
    status: "Open",
    suggestion: getSuggestion(category),
    createdAt: new Date().toISOString(),
  };

  nextId += 1;
  issues.push(issue);
  return issue;
}

const allowedStatuses = ["Open", "In Progress", "Resolved"];
const nextStatus = {
  Open: "In Progress",
  "In Progress": "Resolved",
};

function updateIssueStatus(id, status) {
  const issue = getIssueById(id);

  if (!issue) {
    return { error: "Issue not found", code: 404 };
  }

  if (!allowedStatuses.includes(status)) {
    return {
      error: 'Status must be "Open", "In Progress", or "Resolved".',
      code: 400,
    };
  }

  if (issue.status === status) {
    return { issue };
  }

  if (nextStatus[issue.status] !== status) {
    return {
      error: `Status can only move Open → In Progress → Resolved. Current status is "${issue.status}".`,
      code: 400,
    };
  }

  issue.status = status;
  return { issue };
}

function getStats() {
  const stats = {
    open: 0,
    inProgress: 0,
    resolved: 0,
    total: issues.length,
  };

  for (const issue of issues) {
    if (issue.status === "Open") stats.open += 1;
    if (issue.status === "In Progress") stats.inProgress += 1;
    if (issue.status === "Resolved") stats.resolved += 1;
  }

  return stats;
}

module.exports = {
  getIssues,
  getIssueById,
  addIssue,
  updateIssueStatus,
  getStats,
};
