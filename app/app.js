const navItems = document.querySelectorAll(".nav-item");
const views = document.querySelectorAll(".view");
const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const quickRegisterBtn = document.getElementById("quickRegisterBtn");

const pageMeta = {
  dashboard: {
    title: "Dashboard",
    subtitle: "Construction warranty oversight for developers, owners, and operators."
  },
  properties: {
    title: "Properties",
    subtitle: "Register and manage project and asset records."
  },
  warranties: {
    title: "Warranties",
    subtitle: "Issue, track, and review warranty certificates."
  },
  claims: {
    title: "Claims",
    subtitle: "Manage warranty incidents and claims activity."
  },
  verify: {
    title: "Verification",
    subtitle: "Confirm record validity using a warranty certificate ID."
  }
};

function showView(viewName) {
  views.forEach((view) => {
    view.classList.toggle("active", view.id === `${viewName}View`);
  });

  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewName);
  });

  pageTitle.textContent = pageMeta[viewName].title;
  pageSubtitle.textContent = pageMeta[viewName].subtitle;
}

navItems.forEach((item) => {
  item.addEventListener("click", () => showView(item.dataset.view));
});

quickRegisterBtn.addEventListener("click", () => showView("properties"));

document.getElementById("propertyForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("projectName").value.trim();
  const assetId = document.getElementById("assetId").value.trim();
  const developer = document.getElementById("developer").value.trim();

  const result = document.getElementById("propertyFormResult");
  result.classList.remove("hidden");
  result.textContent =
    `Property registered: ${name || "New Asset"}${assetId ? ` (${assetId})` : ""}. Developer recorded: ${developer || "Not specified"}.`;
});

document.getElementById("warrantyForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const property = document.getElementById("wProperty").value.trim();
  const type = document.getElementById("wType").value;
  const years = document.getElementById("wYears").value.trim();
  const cert = document.getElementById("wCert").value.trim();

  const result = document.getElementById("warrantyFormResult");
  result.classList.remove("hidden");
  result.textContent =
    `Warranty issued for ${property || "selected property"}: ${type} coverage for ${years || "selected"} year(s). Certificate reference: ${cert || "Generated on record"}.`;
});

document.getElementById("claimForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const warrantyId = document.getElementById("claimWarrantyId").value.trim();
  const severity = document.getElementById("claimSeverity").value;

  const result = document.getElementById("claimFormResult");
  result.classList.remove("hidden");
  result.textContent =
    `Claim submitted against ${warrantyId || "selected warranty"} with severity ${severity}. The record has been added to the claim register for review.`;
});

document.getElementById("verifyForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const value = document.getElementById("verifyInput").value.trim().toUpperCase();
  const box = document.getElementById("verifyResult");
  box.classList.remove("hidden");

  if (value === "BR-2026-000127") {
    box.innerHTML = `
      <strong>Record Verified</strong><br>
      Property: Palm Jumeirah Villa 27<br>
      Warranty Type: Structural<br>
      Coverage: 12 Jan 2026 to 12 Jan 2036<br>
      Responsible Party: Gulf Structure Contracting<br>
      Status: Valid<br>
      Audit Trail: Recorded and tamper-evident
    `;
  } else if (value === "BR-2024-000992") {
    box.innerHTML = `
      <strong>Record Found</strong><br>
      Property: Dubai Hills Residence B12<br>
      Warranty Type: HVAC<br>
      Coverage Status: Expiring Soon<br>
      Current State: Active with review recommended
    `;
  } else {
    box.innerHTML = `
      <strong>No matching record found.</strong><br>
      Check the warranty ID and try again.
    `;
  }
});
