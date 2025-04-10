
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";  // Import useSelector
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);  // Get user from Redux store

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        console.log("Fetched user Data: ", userData); // Check what’s returned
        if (userData) {
          dispatch(login(userData)); 
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => console.error("Error fetching user:", err))
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet context={{ user }} />  {/* Pass user to Outlet */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
