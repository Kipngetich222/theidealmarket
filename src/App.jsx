// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import { CartProvider } from "./context/CartContext";
// import PrivateRoute from "./components/Auth/PrivateRoute";
// import SideNavbar from "./components/Layout/Sidebar";
// import Footer from "./components/Layout/Footer";
// import Dashboard from "./pages/Dashboard";
// import BankLogs from "./components/Market/BankLogs";
// import CashApp from "./components/Market/CashApp";
// import Paypal from "./components/Market/Paypal";
// import Dumps from "./components/Market/Dumps";
// import Paxful from "./components/Market/Paxful";
// import Account from "./pages/Account";
// import Payment from "./pages/Payment";
// import RequestRefund from "./pages/RequestRefund";
// import Terms from "./pages/Terms";
// import PaymentConfirmation from "./pages/PaymentConfirmation";
// import Login from "./components/Auth/Login";
// import Signup from "./components/Auth/Signup";
// import { Outlet } from "react-router-dom";
// import TawkMessenger from "./components/Layout/TawkMessenger";


// // App.jsx
// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <CartProvider>
//           <div className="flex flex-col min-h-screen">
//             <TawkMessenger />
//             <Routes>
//               {/* Public routes without layout */}
//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />
//               <Route path="/terms" element={<Terms />} />

//               {/* Private routes with layout */}
//               <Route element={<PrivateRouteWithLayout />}>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/banklogs" element={<BankLogs />} />
//                 <Route path="/cashapp" element={<CashApp />} />
//                 <Route path="/paypal" element={<Paypal />} />
//                 <Route path="/dumps" element={<Dumps />} />
//                 <Route path="/paxful" element={<Paxful />} />
//                 <Route path="/account" element={<Account />} />
//                 <Route path="/payment" element={<Payment />} />
//                 <Route path="/request-refund" element={<RequestRefund />} />
//                 <Route
//                   path="/payment-confirmation"
//                   element={<PaymentConfirmation />}
//                 />
//               </Route>
//             </Routes>
//           </div>
//         </CartProvider>
//       </AuthProvider>
//     </Router>
//   );
// }

// function PrivateRouteWithLayout() {
//   return (
//     <PrivateRoute>
//       <div className="flex flex-col min-h-screen">
//         <SideNavbar />
//         <main className="flex-grow pt-16 pb-16">
//           <Outlet /> {/* This is where nested routes render */}
//         </main>
//         <Footer />
//       </div>
//     </PrivateRoute>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import PrivateRoute from "./components/Auth/PrivateRoute";
import SideNavbar from "./components/Layout/Sidebar";
import Footer from "./components/Layout/Footer";
import Dashboard from "./pages/Dashboard";
// Import all the new components
import BoaBank from "./components/Market/BankLogs/BoaBank";
import ChaseBank from "./components/Market/BankLogs/ChaseBank";
import CitiBank from "./components/Market/BankLogs/CitiBank";
import HuntingtonLogs from "./components/Market/BankLogs/HuntingtonLogs";
import SuntrustLogs from "./components/Market/BankLogs/SuntrustLogs";
import TDBankUSA from "./components/Market/BankLogs/TDBankUSA";
import WellsFargo from "./components/Market/BankLogs/WellsFargo";
import BMOLogs from "./components/Market/BankLogs/Canada/BMOLogs";
import RBCLogs from "./components/Market/BankLogs/Canada/RBCLogs";
import TDCanada from "./components/Market/BankLogs/Canada/TDCanada";
import BarclaysBank from "./components/Market/BankLogs/UK/BarclaysBank";
import HalifaxBank from "./components/Market/BankLogs/UK/HalifaxBank";
import HSBCUK from "./components/Market/BankLogs/UK/HSBCUK";
import LollydsBank from "./components/Market/BankLogs/UK/LollydsBank";
import VisaCard from "./components/Market/Cards/VisaCard";
import MasterCard from "./components/Market/Cards/MasterCard";
import AmexCard from "./components/Market/Cards/AmexCard";
// Existing imports
import CashApp from "./components/Market/CashApp";
import Paypal from "./components/Market/Paypal";
import Dumps from "./components/Market/Dumps";
import Paxful from "./components/Market/Paxful";
import Account from "./pages/Account";
import Payment from "./pages/Payment";
import RequestRefund from "./pages/RequestRefund";
import Terms from "./pages/Terms";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { Outlet } from "react-router-dom";
import TawkMessenger from "./components/Layout/TawkMessenger";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <TawkMessenger />
            <Routes>
              {/* Public routes without layout */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/terms" element={<Terms />} />

              {/* Private routes with layout */}
              <Route element={<PrivateRouteWithLayout />}>
                <Route path="/" element={<Dashboard />} />

                {/* USA Bank Logs */}
                <Route path="/banklogs/boa" element={<BoaBank />} />
                <Route path="/banklogs/chase" element={<ChaseBank />} />
                <Route path="/banklogs/citi" element={<CitiBank />} />
                <Route
                  path="/banklogs/huntington"
                  element={<HuntingtonLogs />}
                />
                <Route path="/banklogs/suntrust" element={<SuntrustLogs />} />
                <Route path="/banklogs/tdbank" element={<TDBankUSA />} />
                <Route path="/banklogs/wellsfargo" element={<WellsFargo />} />

                {/* Canada Bank Logs */}
                <Route path="/banklogs/canada/bmo" element={<BMOLogs />} />
                <Route path="/banklogs/canada/rbc" element={<RBCLogs />} />
                <Route path="/banklogs/canada/td" element={<TDCanada />} />

                {/* UK Bank Logs */}
                <Route
                  path="/banklogs/uk/barclays"
                  element={<BarclaysBank />}
                />
                <Route path="/banklogs/uk/halifax" element={<HalifaxBank />} />
                <Route path="/banklogs/uk/hsbc" element={<HSBCUK />} />
                <Route path="/banklogs/uk/lloyds" element={<LollydsBank />} />

                {/* Cards */}
                <Route path="/cards/visa" element={<VisaCard />} />
                <Route path="/cards/mastercard" element={<MasterCard />} />
                <Route path="/cards/amex" element={<AmexCard />} />

                {/* Existing routes */}
                <Route path="/cashapp" element={<CashApp />} />
                <Route path="/paypal" element={<Paypal />} />
                <Route path="/dumps" element={<Dumps />} />
                <Route path="/paxful" element={<Paxful />} />
                <Route path="/account" element={<Account />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/request-refund" element={<RequestRefund />} />
                <Route
                  path="/payment-confirmation"
                  element={<PaymentConfirmation />}
                />
              </Route>
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

function PrivateRouteWithLayout() {
  return (
    <PrivateRoute>
      <div className="flex flex-col min-h-screen">
        <SideNavbar />
        <main className="flex-grow pt-16 pb-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </PrivateRoute>
  );
}

export default App;