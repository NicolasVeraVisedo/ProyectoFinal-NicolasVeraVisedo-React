import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.scss";
import { getDoc, doc } from "firebase/firestore";
import db from "../../db/db.js";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";
import { RotateLoader } from "react-spinners";
import { toast } from "react-toastify";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { idProducto } = useParams();

  const getProduct = async () => {
    try {
      const docRef = doc(db, "productos", idProducto);
      const dataDb = await getDoc(docRef);

      if (dataDb.exists()) {
        const data = { id: dataDb.id, ...dataDb.data() };
        setProducto(data);
      } else {
        setError(true);
        toast.error("Producto no encontrado.");
      }
    } catch (error) {
      console.log(error);
      setError(true);
      toast.error("Hubo un error al buscar el producto.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [idProducto]);

  if (loading) {
    return (
      <div className="reload-2">
        <RotateLoader color="black" />
      </div>
    );
  }

  return error ? <ErrorPage /> : <ItemDetail producto={producto} />;
};
export default ItemDetailContainer;
