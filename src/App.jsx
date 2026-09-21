import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import HomePage from "./pages/HomePage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ActivationCode from "./components/auth/ActivationCode";
import ProfileDashboard from "./components/profile/ProfileDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import UpdateProfileInfo from "./components/profile/UpdateProfileInfo";
import ProfileIndexPage from "./components/profile/ProfileIndexPage";

const App = () => {
  return (
    <Fragment>
      <Router>
        <section id="navbar">
          <article className="container">
            <aside className="top_header">
              <Navbar />
            </aside>
            <main className="main">
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Auth section */}
                <Route path="/auth/register" element={<Register />} />
                <Route path="/auth/activate" element={<ActivationCode />} />
                <Route path="/auth/login" element={<Login />} />

                {/* Authenticated Routes */}

                <Route element={<ProtectedRoute />}>
                  <Route path="/user/profile" element={<ProfileDashboard />}>
                  <Route index element={<ProfileIndexPage />} />
                  <Route path="update-user-info" element={<UpdateProfileInfo />} />
                  </Route>
                </Route>
              </Routes>
            </main>
          </article>
        </section>
      </Router>
    </Fragment>
  );
};

export default App;
