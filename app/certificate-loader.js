import { getWarrantyById } from "/app/nexus.js";

function getWarrantyIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (id && !Number.isNaN(Number(id))) {
    return Number(id);
  }
  return 1;
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

async function loadCertificate() {
  try {
    const warrantyId = getWarrantyIdFromUrl();
    const data = await getWarrantyById(warrantyId);

    if (!data) {
      setText("certStatus", "No matching on-chain warranty found");
      return;
    }

    setText("certType", data.warrantyType || "—");
    setText("certCoverage", `${data.startDate} → ${data.endDate}`);
    setText("certContractor", `Vendor ID ${data.vendorId}`);
    setText("certId", `BR-${String(data.id).padStart(6, "0")}`);
    setText(
      "certStatus",
      `${data.isActive ? "Verified and active" : "Found but inactive"} • ${data.claimStatus}`
    );
    setText("certAudit", `Recorded ${data.createdAt} • Updated ${data.updatedAt}`);

    const badge = document.getElementById("certBadge");
    if (badge) {
      badge.textContent = data.isActive ? "Verified" : "Inactive";
    }
  } catch (err) {
    console.error(err);
    setText("certStatus", "Unable to load on-chain verification");
  }
}

loadCertificate();
