// src/App.tsx
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortifolioPage from "./pages/PortifolioPage";
import ContactPage from "./pages/ContactPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"; // Import the MainLayout

const router = createBrowserRouter([
  {
    element: <MainLayout />, // Use MainLayout as the wrapper
    children: [
      { path: "/", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "works", element: <PortifolioPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
