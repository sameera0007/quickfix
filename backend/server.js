const express = require("express");
const cors = require("cors");
const {
  getIssues,
  addIssue,
  updateIssueStatus,
  getStats,
} = require("./data");

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/issues", (req, res) => {
  res.json(getIssues());
});

app.post("/api/issues", (req, res) => {
  const { title, description, category } = req.body || {};

  if (!title || !String(title).trim()) {
    return res.status(400).json({ error: "Title is required." });
  }

  const issue = addIssue({ title, description, category });
  res.status(201).json(issue);
});

app.get("/api/stats", (req, res) => {
  res.json(getStats());
});

app.patch("/api/issues/:id/status", (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body || {};

  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "Invalid issue id." });
  }

  if (!status) {
    return res.status(400).json({ error: "Status is required." });
  }

  const result = updateIssueStatus(id, status);

  if (result.error) {
    return res.status(result.code).json({ error: result.error });
  }

  res.json(result.issue);
});

app.listen(PORT, () => {
  console.log(`QuickFix API running on http://localhost:${PORT}`);
});
