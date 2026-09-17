import { Fragment } from "react";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import HomePage from "./pages/HomePage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ActivationCode from "./components/auth/ActivationCode";


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
                    </Routes>
                </main>
            </article>
        </section>
      </Router>

    </Fragment>
  )
}

export default App;