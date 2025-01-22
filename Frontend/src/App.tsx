import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ViewProducts from "./Pages/viewProducts";
import UpdateProduct from "./Pages/updateProduct";
import AddProduct from "./Pages/addProduct";
import { LoginProvider } from "./Context/LoginContext";
function App() {
  return (
    <div className="App">
      <LoginProvider>
          <Header />

          <Routes>
            <Route path="/" element={<ViewProducts />} />
            <Route path="/create" element={<AddProduct />}/>
            <Route  path="/update/:id" element={ <UpdateProduct />  } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
           
          </Routes>

          <Footer />
          </LoginProvider>
    
    </div>
  );
}

export default App;
