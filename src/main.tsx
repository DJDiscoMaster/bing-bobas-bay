import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("🚀 Bing Boba Bay app starting...");
console.log("Base URL:", import.meta.env.BASE_URL);
console.log("Mode:", import.meta.env.MODE);

createRoot(document.getElementById("root")!).render(<App />);
