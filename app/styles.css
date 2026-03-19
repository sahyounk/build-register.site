:root {
  --bg: #0b1020;
  --panel: #ffffff;
  --panel-2: #f7f9fc;
  --text: #162033;
  --muted: #6d7890;
  --border: #dfe5ef;
  --nav: #111a2f;
  --nav-soft: #1b2640;
  --primary: #173b8f;
  --primary-2: #2b68f6;
  --success: #157347;
  --warning: #b57600;
  --review: #6f42c1;
  --neutral: #64748b;
  --danger-soft: #fff6e5;
  --shadow: 0 12px 30px rgba(16, 24, 40, 0.08);
  --radius: 18px;
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: Inter, Arial, Helvetica, sans-serif;
  background: #eef3f9;
  color: var(--text);
}

body {
  min-height: 100vh;
}

button, input, select, textarea {
  font: inherit;
}

.app-shell {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: linear-gradient(180deg, #0d1428 0%, #131d36 100%);
  color: #fff;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255,255,255,0.08);
  display: grid;
  place-items: center;
}

.brand-mark svg {
  width: 28px;
  height: 28px;
  stroke: #8db4ff;
  fill: none;
  stroke-width: 1.8;
}

.brand-title {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.brand-subtitle {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.68);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  width: 100%;
  border: 0;
  background: transparent;
  color: rgba(255,255,255,0.82);
  text-align: left;
  padding: 12px 14px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  background: var(--nav-soft);
  color: #fff;
}

.sidebar-footer {
  margin-top: auto;
  padding: 16px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  background: rgba(255,255,255,0.04);
}

.small-label {
  font-size: 0.78rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.sidebar .small-label {
  color: rgba(255,255,255,0.58);
}

.env-badge {
  margin-top: 8px;
  display: inline-flex;
  padding: 8px 10px;
  background: rgba(43, 104, 246, 0.18);
  color: #dbe7ff;
  border-radius: 999px;
  font-size: 0.84rem;
}

.main {
  padding: 28px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 24px;
}

.topbar h1 {
  margin: 0 0 6px;
  font-size: 2rem;
}

.topbar p {
  margin: 0;
  color: var(--muted);
}

.topbar-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.primary-btn,
.ghost-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 16px;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-2) 100%);
  color: #fff;
  box-shadow: 0 10px 24px rgba(43, 104, 246, 0.2);
}

.primary-btn:hover {
  transform: translateY(-1px);
}

.ghost-btn {
  background: #fff;
  color: var(--text);
  border-color: var(--border);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 22px;
}

.stat-card {
  background: var(--panel);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
  border: 1px solid #edf1f7;
}

.stat-card.alert {
  background: var(--danger-soft);
}

.stat-label {
  color: var(--muted);
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.stat-meta {
  font-size: 0.88rem;
  color: var(--muted);
}

.content-grid {
  display: grid;
  gap: 18px;
  margin-bottom: 18px;
}

.content-grid.two-col {
  grid-template-columns: 1.2fr 1fr;
}

.panel {
  background: var(--panel);
  border-radius: var(--radius);
  padding: 22px;
  box-shadow: var(--shadow);
  border: 1px solid #edf1f7;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 18px;
}

.panel-header h2 {
  margin: 0 0 6px;
  font-size: 1.1rem;
}

.panel-header p {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  white-space: nowrap;
}

.status-pill.success {
  background: rgba(21, 115, 71, 0.12);
  color: var(--success);
}

.status-pill.warning {
  background: rgba(181, 118, 0, 0.12);
  color: var(--warning);
}

.status-pill.review {
  background: rgba(111, 66, 193, 0.12);
  color: var(--review);
}

.status-pill.neutral {
  background: rgba(100, 116, 139, 0.14);
  color: var(--neutral);
}

.property-hero {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: 18px;
}

.property-name {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.property-meta {
  color: var(--muted);
  margin-bottom: 6px;
}

.audit-box {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  background: var(--panel-2);
}

.audit-id {
  margin-top: 8px;
  font-size: 1.1rem;
  font-weight: 700;
}

.audit-note {
  margin-top: 6px;
  color: var(--muted);
  font-size: 0.9rem;
}

.coverage-list,
.priority-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.coverage-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid #eef2f7;
}

.coverage-item:last-child {
  border-bottom: 0;
}

.muted {
  color: var(--muted);
  font-size: 0.9rem;
}

.priority-list li {
  padding: 12px 0;
  border-bottom: 1px solid #eef2f7;
  color: #344054;
}

.priority-list li:last-child {
  border-bottom: 0;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  text-align: left;
  padding: 12px 8px;
  border-bottom: 1px solid #eef2f7;
  font-size: 0.94rem;
}

.data-table th {
  color: var(--muted);
  font-weight: 600;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-grid label {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-grid label.full,
.form-actions.full {
  grid-column: 1 / -1;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
  background: #fff;
  color: var(--text);
}

input:focus,
select:focus,
textarea:focus {
  outline: 2px solid rgba(43, 104, 246, 0.15);
  border-color: var(--primary-2);
}

.form-actions {
  display: flex;
  justify-content: flex-start;
}

.inline-message,
.verify-result {
  margin-top: 16px;
  border-radius: 14px;
  padding: 14px 16px;
  background: #f7fbff;
  border: 1px solid #d9e7ff;
  color: #13315c;
}

.verify-box {
  display: flex;
  gap: 12px;
}

.verify-box input {
  flex: 1;
}

.hidden {
  display: none !important;
}

.view {
  display: none;
}

.view.active {
  display: block;
}

@media (max-width: 1180px) {
  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .content-grid.two-col,
  .property-hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 860px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    gap: 18px;
  }

  .nav {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .nav-item {
    width: auto;
  }

  .main {
    padding: 18px;
  }

  .topbar {
    flex-direction: column;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .verify-box {
    flex-direction: column;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
