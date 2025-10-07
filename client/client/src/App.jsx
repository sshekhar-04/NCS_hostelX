import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hostels from "./pages/hostels";
import BoysHostel from "./pages/BoysHostel";
import GirlsHostel from "./pages/GirlsHostel";
import InternationalHostel from "./pages/InternationalHostel";
import Reviews from "./pages/Reviews";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/hostels"
          element={
            <Layout>
              <Hostels />
            </Layout>
          }
        />
        <Route
          path="/hostels/boys"
          element={
            <Layout>
              <BoysHostel />
            </Layout>
          }
        />
        <Route
          path="/hostels/girls"
          element={
            <Layout>
              <GirlsHostel />
            </Layout>
          }
        />
        <Route
          path="/hostels/international"
          element={
            <Layout>
              <InternationalHostel />
            </Layout>
          }
        />
        <Route
          path="/reviews"
          element={
            <Layout>
              <Reviews />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Layout>
                <Profile />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>

      <ToastContainer position="top-right" autoClose={4000} />
    </>
  );
}

export default App;
