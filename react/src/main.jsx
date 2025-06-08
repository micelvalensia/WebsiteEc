import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/CashierHome.jsx";
import MenuPage from "./pages/CashierMenu.jsx";
import CartPage from "./pages/CashierCart.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import Login from "./components/admin/Login.jsx";
import AdminAdd from "./pages/AdminAdd.jsx";
import {
  ListProvider,
  MenuProvider,
} from "./components/context/MenuContext.jsx";
import AdminHistory from "./pages/AdminHistory.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminEdit from "./pages/AdminEdit.jsx";
import NotFound from "./pages/NotFound.jsx";
import KitchenDashboard from "./pages/KitchenDashboard.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import KitchenLogin from "./pages/KitchenLogin.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ListProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/menu"
            element={
              <MenuProvider>
                <MenuPage />
              </MenuProvider>
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin/crud" element={<AdminPage />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/add" element={<AdminAdd />} />
          <Route path="/admin/history" element={<AdminHistory />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/edit/:id" element={<AdminEdit />} />
          <Route path="/kitchen" element={<KitchenDashboard />} />
          <Route path="/kitchen/login" element={<KitchenLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ListProvider>
  </ThemeProvider>
);
