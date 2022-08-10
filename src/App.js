import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GlobalProvider from "./GlobalContext";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./components/layouts/AdminLayout";
import Items from "./pages/Items";
import ItemForm from "./pages/ItemForm";
import Orders from "./pages/Orders";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/items"
              element={
                <AdminLayout>
                  <Items />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/item-form"
              element={
                <AdminLayout>
                  <ItemForm />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/item-form/:id"
              element={
                <AdminLayout>
                  <ItemForm />
                </AdminLayout>
              }
            />

            <Route
              path="/admin/orders"
              element={
                <AdminLayout>
                  <Orders />
                </AdminLayout>
              }
            />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </ChakraProvider>
  );
}

export default App;
