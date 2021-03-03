import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Upload from "./pages/Upload";
import CategoryViewDemo from "./pages/CategoryViewDemo";
import MissingItems from "./pages/MissingItems";
import CategoryCreate from "./pages/CategoryCreate";

const App: React.FC = () => (
  <BrowserRouter>
    <div className="flex flex-col h-screen antialiased bg-gray-100">
      <Navbar />
      <div className="inline-block overflow-auto">
        <div className="p-6 space-y-6">
          <Routes>
            <Route path="/upload" element={<Upload />} />
            <Route path="/categories/demo" element={<CategoryViewDemo />} />
            <Route path="/categories/create" element={<CategoryCreate />} />
            <Route path="/missing-items" element={<MissingItems />} />
            <Route path="/*" element={<MissingItems />} />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
