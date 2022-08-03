import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//pages and components
import Layout from "./components/layouts/Layout";
import DashboardPage from "./pages/DashboardPage";

//hooks
import ScrollToTop from "./hooks/useScrollToTop";

function App() {
  return (
    <div className="App bg-[#1f2028] text-slate-50 min-h-screen">
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
