import Table from "../../../UI/Table";
import { useNavigate } from "react-router-dom";

const hsbcData = [
  {
    name: "HSBC Premier Account",
    vendor: "UKBanker",
    includes: "Full Access, Investment",
    balance: "£15,000 - £75,000",
    price: "£650",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "HSBC Business Account",
    vendor: "HSBCBiz",
    includes: "Documents, Online Access",
    balance: "£25,000 - £100,000",
    price: "£850",
    status: "Available",
    action: "Buy Now",
  },
];

const headers = [
  "Account Type",
  "Vendor",
  "Includes",
  "Balance",
  "Price",
  "Status",
  "Action",
];

export default function HSBCUK() {
  const navigate = useNavigate();

  const handleBuyClick = (item) => {
    if (item.status === "Sold Out") {
      alert("This item is currently sold out. Please check back later.");
      return;
    }
    navigate("/payment", { state: { item } });
  };

  return (
    <div className="bg-white dark:bg-dark-700 rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        HSBC UK Accounts
      </h1>
      <Table headers={headers} data={hsbcData} onBuyClick={handleBuyClick} />
    </div>
  );
}
