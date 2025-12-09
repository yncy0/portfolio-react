import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
);
