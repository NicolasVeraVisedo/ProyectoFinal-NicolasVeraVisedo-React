import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from './components/Checkout/Checkout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ErrorPage from "./components/ErrorPage/ErrorPage";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <ToastContainer theme="dark" position="bottom-right" />

        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                saludo1="Bienvenido a JoyveriE "
                saludo2="El lugar ideal para tus joyas y accesorios..."
              />
            }
          />
          <Route
            path="/categoria/:idCategoria"
            element={
              <ItemListContainer
                saludo1="Bienvenido a JoyveriE "
                saludo2="El lugar ideal para tus joyas y accesorios..."
              />
            }
          />
          <Route
            path="/detalle/:idProducto"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
