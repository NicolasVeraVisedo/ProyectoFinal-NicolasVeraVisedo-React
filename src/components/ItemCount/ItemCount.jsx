import { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ stock, agregarAlCarrito }) => {
  const [count, setCount] = useState(1);

  const aumentar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="itemcount">
      <div className="controls-itemcount">
        <button className="button-controls" onClick={disminuir}>
          -
        </button>
        <p>{count}</p>
        <button className="button-controls" onClick={aumentar}>
          +
        </button>
      </div>

      <button
        className="submit-itemcount"
        onClick={() => agregarAlCarrito(count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
export default ItemCount;
