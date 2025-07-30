import Table from "../UI/Table";
import { useNavigate } from "react-router-dom";

const paypalData = [
  {
    name: "PayPal Account (Verified)",
    vendor: "PayMaster",
    includes: "Email Access, Fullz Info",
    balance: "$1,000 - $3,000",
    price: "$200",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "PayPal Account (Unverified)",
    vendor: "QuickPay",
    includes: "Email Access",
    balance: "$500 - $1,500",
    price: "$100",
    status: "Available",
    action: "Buy Now",
  },
  {
    name: "PayPal Business Account",
    vendor: "BizPay",
    includes: "Full Access, Documents",
    balance: "$2,000 - $5,000",
    price: "$300",
    status: "Sold Out",
    action: "Buy Now",
  },
  {
    name: "PayPal Limited Account",
    vendor: "Limitless",
    includes: "Bypass Methods",
    balance: "$500 - $2,000",
    price: "$150",
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

export default function Paypal() {
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
        PayPal Accounts
      </h1>
      <Table headers={headers} data={paypalData} onBuyClick={handleBuyClick} />
    </div>
  );
}
