const NEXUS_RPC_URL = "https://rpc.nexus.testnet.apexfusion.org/";
const WARRANTY_REGISTRY_ADDRESS = "0xBd126F7DFAA41cf389d95F01a0fCe77F41bd6a2f";

const WARRANTY_REGISTRY_ABI = [
  {
    "inputs": [{"internalType":"uint256","name":"warrantyId","type":"uint256"}],
    "name": "getWarranty",
    "outputs": [
      {
        "components": [
          {"internalType":"uint256","name":"id","type":"uint256"},
          {"internalType":"uint256","name":"assetId","type":"uint256"},
          {"internalType":"uint256","name":"vendorId","type":"uint256"},
          {"internalType":"string","name":"warrantyType","type":"string"},
          {"internalType":"uint64","name":"startDate","type":"uint64"},
          {"internalType":"uint64","name":"endDate","type":"uint64"},
          {"internalType":"string","name":"termsHash","type":"string"},
          {"internalType":"string","name":"metadataURI","type":"string"},
          {"internalType":"string","name":"documentHash","type":"string"},
          {"internalType":"uint8","name":"claimStatus","type":"uint8"},
          {"internalType":"bool","name":"isActive","type":"bool"},
          {"internalType":"uint64","name":"createdAt","type":"uint64"},
          {"internalType":"uint64","name":"updatedAt","type":"uint64"},
          {"internalType":"bool","name":"exists","type":"bool"}
        ],
        "internalType":"struct WarrantyRegistry.Warranty",
        "name":"",
        "type":"tuple"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs": [{"internalType":"uint256","name":"warrantyId","type":"uint256"}],
    "name": "isWarrantyActive",
    "outputs": [{"internalType":"bool","name":"","type":"bool"}],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs": [{"internalType":"uint256","name":"warrantyId","type":"uint256"}],
    "name": "exists",
    "outputs": [{"internalType":"bool","name":"","type":"bool"}],
    "stateMutability":"view",
    "type":"function"
  }
];

function formatUnixDate(ts) {
  if (!ts || Number(ts) === 0) return "—";
  const d = new Date(Number(ts) * 1000);
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function mapClaimStatus(status) {
  const s = Number(status);
  if (s === 0) return "No Claim";
  if (s === 1) return "Filed";
  if (s === 2) return "Under Review";
  if (s === 3) return "Approved";
  if (s === 4) return "Rejected";
  return `Status ${s}`;
}

export async function getWarrantyById(warrantyId) {
  if (!window.ethers) {
    throw new Error("ethers library not loaded");
  }

  const provider = new window.ethers.JsonRpcProvider(NEXUS_RPC_URL);
  const contract = new window.ethers.Contract(
    WARRANTY_REGISTRY_ADDRESS,
    WARRANTY_REGISTRY_ABI,
    provider
  );

  const exists = await contract.exists(warrantyId);
  if (!exists) return null;

  const raw = await contract.getWarranty(warrantyId);
  const active = await contract.isWarrantyActive(warrantyId);

  return {
    id: Number(raw.id),
    assetId: Number(raw.assetId),
    vendorId: Number(raw.vendorId),
    warrantyType: raw.warrantyType,
    startDate: formatUnixDate(raw.startDate),
    endDate: formatUnixDate(raw.endDate),
    termsHash: raw.termsHash,
    metadataURI: raw.metadataURI,
    documentHash: raw.documentHash,
    claimStatus: mapClaimStatus(raw.claimStatus),
    isActive: Boolean(active),
    createdAt: formatUnixDate(raw.createdAt),
    updatedAt: formatUnixDate(raw.updatedAt)
  };
}
