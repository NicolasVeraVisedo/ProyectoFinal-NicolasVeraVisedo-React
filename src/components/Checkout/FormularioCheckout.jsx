const FormularioCheckout = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
    return (
      <form onSubmit={handleSubmitForm} className="form-checkout">
        <label>Nombre: </label>
        <input type="text" name="nombre" value={datosForm.nombre} onChange={handleChangeInput} />

        <label>Apellido: </label>
        <input type="text" name="apellido" value={datosForm.apellido} onChange={handleChangeInput} />
  
        <label>Telefono</label>
        <input type="text" name="telefono" value={datosForm.telefono} onChange={handleChangeInput} />
  
        <label>Correo Electrónico</label>
        <input type="email" name="email" value={datosForm.email} onChange={handleChangeInput} />

        <label>Confirmar Correo Electrónico</label>
        <input type="email" name="confiEmail" value={datosForm.confiEmail} onChange={handleChangeInput} />
  
        <button type="submit" className="button-form">
          Enviar orden
        </button>
      </form>
    );
  };
  export default FormularioCheckout;