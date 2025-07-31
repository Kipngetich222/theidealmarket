// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import PrivateRoute from "./components/Auth/PrivateRoute";
// import AdminRoute from "./components/Auth/AdminRoute";
// import Dashboard from "./pages/Dashboard";
// import BankLogs from "./components/Market/BankLogs";
// import CashApp from "./components/Market/CashApp";
// import Paypal from "./components/Market/Paypal";
// import Dumps from "./components/Market/Dumps";
// import Paxful from "./components/Market/Paxful";
// import Account from "./pages/Account";
// import Admin from "./pages/Admin";
// import Payment from "./pages/Payment";
// import Login from "./components/Auth/Login";
// import Signup from "./components/Auth/Signup";
// import Layout from "./components/Layout/Layout";
// import RequestRefund from "./pages/RequestRefund";
// import Terms from "./pages/Terms";
// import PaymentConfirmation from "./pages/PaymentConfirmation";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import PrivateRoute from "./components/Auth/PrivateRoute";
import SideNavbar from "./components/Layout/Sidebar";
import Footer from "./components/Layout/Footer";
import Dashboard from "./pages/Dashboard";
import BankLogs from "./components/Market/BankLogs";
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

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />

//           <Route element={<Layout />}>
//             <Route
//               path="/"
//               element={
//                 <PrivateRoute>
//                   <Dashboard />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/banklogs"
//               element={
//                 <PrivateRoute>
//                   <BankLogs />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/cashapp"
//               element={
//                 <PrivateRoute>
//                   <CashApp />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/paypal"
//               element={
//                 <PrivateRoute>
//                   <Paypal />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/dumps"
//               element={
//                 <PrivateRoute>
//                   <Dumps />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/paxful"
//               element={
//                 <PrivateRoute>
//                   <Paxful />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/account"
//               element={
//                 <PrivateRoute>
//                   <Account />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/payment"
//               element={
//                 <PrivateRoute>
//                   <Payment />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/admin"
//               element={
//                 <AdminRoute>
//                   <Admin />
//                 </AdminRoute>
//               }
//             />
//             <Route
//               path="/request-refund"
//               element={
//                 <PrivateRoute>
//                   <RequestRefund />
//                 </PrivateRoute>
//               }
//             />
//             <Route path="/terms" element={<Terms />} />
//             <Route
//               path="/payment-confirmation"
//               element={
//                 <PrivateRoute>
//                   <PaymentConfirmation />
//                 </PrivateRoute>
//               }
//             />
//           </Route>
//         </Routes>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;
//-----------------------------------------------------------------------------------

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <CartProvider>
//           <div className="flex flex-col min-h-screen">
//             <SideNavbar />
//             <main className="flex-grow pt-16 pb-16">
//               <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/terms" element={<Terms />} />

//                 <Route element={<PrivateRoute />}>
//                   <Route path="/" element={<Dashboard />} />
//                   <Route path="/banklogs" element={<BankLogs />} />
//                   <Route path="/cashapp" element={<CashApp />} />
//                   <Route path="/paypal" element={<Paypal />} />
//                   <Route path="/dumps" element={<Dumps />} />
//                   <Route path="/paxful" element={<Paxful />} />
//                   <Route path="/account" element={<Account />} />
//                   <Route path="/payment" element={<Payment />} />
//                   <Route path="/request-refund" element={<RequestRefund />} />
//                   <Route
//                     path="/payment-confirmation"
//                     element={<PaymentConfirmation />}
//                   />
//                 </Route>
//               </Routes>
//             </main>
//             <Footer />
//           </div>
//         </CartProvider>
//       </AuthProvider>
//     </Router>
//   );
// }

// App.jsx
function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Routes>
              {/* Public routes without layout */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/terms" element={<Terms />} />

              {/* Private routes with layout */}
              <Route element={<PrivateRouteWithLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/banklogs" element={<BankLogs />} />
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

// New PrivateRouteWithLayout component
function PrivateRouteWithLayout({ children }) {
  return (
    <>
      <PrivateRoute>
        <SideNavbar />
        <main className="flex-grow pt-16 pb-16">
          {children}
        </main>
        <Footer />
      </PrivateRoute>
    </>
  )
}

export default App;