import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import TopicDetails from "./pages/TopicDetails";
import ExternalResources from "./pages/ExternalResources";
import Favorites from "./pages/Faves";
import AddTopic from "./pages/AddTopic";
import Login from "./pages/Login";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/topics/:id" element={<TopicDetails />} />
          <Route path="/external-resources" element={<ExternalResources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add-topic"
            element={
              <ProtectedRoute>
                <AddTopic />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;