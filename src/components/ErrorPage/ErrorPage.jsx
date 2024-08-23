import { Link } from "react-router-dom";
import "../ErrorPage/ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>ERROR 404</h1>
      <h2>No encontramos la página que estás buscando</h2>
      <Link to="/" className="err">
        Volver a inicio
      </Link>
    </div>
  );
};

export default ErrorPage;
