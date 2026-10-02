import { useState } from "react";

function ReportIssue() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("plumbing");
  const [priority, setPriority] = useState("medium");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section>
      <header className="page-header">
        <h1>Report an Issue</h1>
        <p>Describe the problem so the right team can take action quickly.</p>
      </header>
      <form className="card form-card" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="field">
            <span>Title</span>
            <input
              type="text"
              name="title"
              placeholder="Short summary of the issue"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label className="field">
            <span>Description</span>
            <textarea
              name="description"
              placeholder="What happened, where it is, and who is affected"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <div className="form-row">
            <label className="field">
              <span>Category</span>
              <select
                name="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="hvac">HVAC</option>
                <option value="safety">Safety</option>
                <option value="cleaning">Cleaning</option>
                <option value="internet">Internet</option>
                <option value="general">General</option>
              </select>
            </label>
            <label className="field">
              <span>Priority</span>
              <select
                name="priority"
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>
          </div>
          <div className="form-actions">
            <button className="btn btn-primary" type="submit">
              Submit issue
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ReportIssue;
