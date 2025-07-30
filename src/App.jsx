import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/Auth/PrivateRoute";
import AdminRoute from "./components/Auth/AdminRoute";
import Dashboard from "./pages/Dashboard";
import BankLogs from "./components/Market/BankLogs";
import CashApp from "./components/Market/CashApp";
import Paypal from "./components/Market/Paypal";
import Dumps from "./components/Market/Dumps";
import Paxful from "./components/Market/Paxful";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import Payment from "./pages/Payment";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/banklogs"
              element={
                <PrivateRoute>
                  <BankLogs />
                </PrivateRoute>
              }
            />
            <Route
              path="/cashapp"
              element={
                <PrivateRoute>
                  <CashApp />
                </PrivateRoute>
              }
            />
            <Route
              path="/paypal"
              element={
                <PrivateRoute>
                  <Paypal />
                </PrivateRoute>
              }
            />
            <Route
              path="/dumps"
              element={
                <PrivateRoute>
                  <Dumps />
                </PrivateRoute>
              }
            />
            <Route
              path="/paxful"
              element={
                <PrivateRoute>
                  <Paxful />
                </PrivateRoute>
              }
            />
            <Route
              path="/account"
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              }
            />
            <Route
              path="/payment"
              element={
                <PrivateRoute>
                  <Payment />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
