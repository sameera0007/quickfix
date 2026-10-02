function AssistantCard() {
  return (
    <aside className="card assistant">
      <div className="assistant-kicker">QuickFix Assistant</div>
      <h2>Need a next step?</h2>
      <p>
        After you submit an issue, the assistant will suggest a simple action
        based on the category — like shutting off a valve or calling
        maintenance.
      </p>
      <div className="assistant-tip">
        Suggestions appear here once reports are connected.
      </div>
    </aside>
  );
}

export default AssistantCard;
