import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { HomePage } from "./pages/HomePage";
import { HotelsPage } from "./pages/HotelsPage";
import { PackagesPage } from "./pages/PackagesPage";

export function App() {
  return (
    <BrowserRouter>
      <main className="app-shell">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}
