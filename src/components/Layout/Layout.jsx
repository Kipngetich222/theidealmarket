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
    // <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-800">
    //   <Navbar />
    //   <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
    //     <Outlet />
    //   </main>
    //   <Footer />
    // </div>
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
