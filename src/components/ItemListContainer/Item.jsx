import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <Link className="item" to={"/detalle/" + producto.id}>
      <img className="imgitem" src={producto.imagen} />
      <div className="infoitem">
        <p>{producto.nombre}</p>
        <p>${producto.precio}</p>
      </div>
    </Link>
  );
};
export default Item;
