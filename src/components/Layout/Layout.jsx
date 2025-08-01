import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "./Sidebar";

export default function Layout() {
  const { user } = useAuth();

  if (!user) {
    return <Outlet />;
  }

  return (
       <>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <Navbar /> */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
