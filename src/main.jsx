// @ts-nocheck
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { UserProvider } from "./Context/UserContexto";
import { TableProvider } from "./Context/TableContext";
import AppRoutes from "./Pages/Ruta";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TableProvider>
          <AppRoutes />
        </TableProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
