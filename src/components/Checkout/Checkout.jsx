import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import FormularioCheckout from "./FormularioCheckout";
import db from "../../db/db.js";
import validateForm from "../../utils/validacionFormulario.js";
import "./checkout.scss";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    confiEmail: "",
  });
  const [idOrden, setIdOrden] = useState(null);
  const [ordenDetalles, setOrdenDetalles] = useState(null); // Estado para los detalles de la orden
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    //formatear correctamente la informacion de la orden a subir
    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: Timestamp.fromDate(new Date()),
      total: precioTotal(),
    };
    //validamos los campos del formulario antes de enviar la orden
    const response = await validateForm(datosForm);
    if (response.status === "success") {
      sendOrder(orden);
    } else {
      toast.warning(response.message);
    }
  };

  const sendOrder = async (orden) => {
    try {
      const ordenesRef = collection(db, "ordenes");
      const ordenDb = await addDoc(ordenesRef, orden);
      setIdOrden(ordenDb.id);
      setOrdenDetalles(orden); // Guardamos los detalles de la orden
      vaciarCarrito();
    } catch (error) {
      toast.error("Hubo un error al procesar la orden. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="checkout">
      {idOrden ? (
        <div className="order-completed">
          <h2>Orden completada correctamente! 😁</h2>
          <p>Guarde el id de su orden generada: {idOrden} </p>
          <h3>Resumen de su compra:</h3>
          <ul className="order-details border border-secondary p-3 rounded">
            {ordenDetalles.productos.map((producto) => (
              <li key={producto.id}>
                <img
                  width={50}
                  src={producto.imagen}
                  alt={`Imagen de ${producto.nombre}`}
                />
                <p>{producto.nombre}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio c/u: ${producto.precio}</p>
                <p>Precio parcial: ${producto.cantidad * producto.precio}</p>
              </li>
            ))}
          </ul>
          <p className="border border-secondary p-3 rounded">
            <strong>Total: ${ordenDetalles.total}</strong>
          </p>
          <Link to="/" className="button-back-home">
            Ir a inicio
          </Link>
        </div>
      ) : (
        <FormularioCheckout
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};
export default Checkout;
