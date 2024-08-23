import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.scss";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ItemDetail = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);
  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  const agregarAlCarrito = (contador) => {
    const productoCarrito = { ...producto, cantidad: contador };

    agregarProducto(productoCarrito);
    toast.success(`${contador} unidades de "${producto.nombre}" añadidas al carrito`);

    //ocultamos el componente ItemCount
    setMostrarItemCount(false);
  };

  return (
    <div className="item-detail">
      <div className="image-detail">
        <img src={producto.imagen} />
      </div>
      <div className="content-detail">
        <p className="name-detail">{producto.nombre}</p>
        <p className="text-detail">Descripción: {producto.descripcion}</p>
        <p className="text-detail">Precio: ${producto.precio}</p>
        {mostrarItemCount ? (
          <ItemCount
            stock={producto.stock}
            agregarAlCarrito={agregarAlCarrito}
          />
        ) : (
          <Link to="/cart" className="button-detail">
            Ir al carrito
          </Link>
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
