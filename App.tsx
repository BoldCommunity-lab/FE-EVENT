import React from "react";
// FIX: Import HashRouter, Routes, and Route from react-router-dom instead of accessing them via the window object.
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
// import EventsPage from "./pages/EventsPage";
import CollabPage from "./pages/CollabPage";

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-brand-dark">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/events" element={<EventsPage />} /> */}
            <Route path="/collab" element={<CollabPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
