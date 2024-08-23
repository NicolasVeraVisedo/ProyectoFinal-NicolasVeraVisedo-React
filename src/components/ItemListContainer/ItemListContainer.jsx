import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.scss";
import { PropagateLoader } from "react-spinners";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import Banner from "../Banner/Banner.jsx";

const ItemListContainer = ({ saludo1, saludo2 }) => {
  const [productos, setProductos] = useState([]);
  const [estaCargando, setEstaCargando] = useState(false);
  const { idCategoria } = useParams();

  const getProducts = async () => {
    setEstaCargando(true); // Inicia el spinner
    try {
      const productosRef = collection(db, "productos");
      const dataDb = await getDocs(productosRef);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setProductos(data);
      setEstaCargando(false);
    } catch (error) {
      console.log(error);
    } finally {
      setEstaCargando(false); // Detiene el spinner
    }
  };

  const getProductsByCategory = async () => {
    setEstaCargando(true); // Inicia el spinner
    try {
      const productosRef = collection(db, "productos");
      const q = query(productosRef, where("categoria", "==", idCategoria));
      const dataDb = await getDocs(q);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setProductos(data);
    } catch (error) {
      console.log(error);
    } finally {
      setEstaCargando(false); // Detiene el spinner
    }
  };

  useEffect(() => {
    if (idCategoria) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategoria]);

  return (
    <div>
      <div className="saludoilc">
        <h1> {saludo1}</h1>
        <h2>{saludo2}</h2>
      </div>
      <Banner />
      {estaCargando ? (
        <div className="reload-1">
          Cargando
          <PropagateLoader color="black" />
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};
export default ItemListContainer;
