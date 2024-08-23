import { object, string } from "yup";

// Definimos el esquema de validación del formulario usando Yup
let userSchema = object({
  confiEmail: string()
    .required("El campo confirmar email es requerido")
    .email("El campo de confirmar email no tiene el formato correcto")
    //El método 'test' permite definir una validación personalizada
    .test(
      // 'emails-match' es el nombre o identificador del test
      "emails-match",
      // Mensaje de error si la validación falla
      "Los correos electrónicos no coinciden. Por favor, revisa la información ingresada.",
      // Función para realizar la validación personalizada (en este caso, de los emails)
      function (value) {
        // 'value' representa el valor del campo 'confiEmail'
        // 'this.parent' hace referencia al objeto que contiene los valores actuales del formulario
        return value === this.parent.email;
      }
      // Si los valores coinciden, la función devuelve true (la validación pasa)
      // Si no coinciden, devuelve false (lo que provoca que se muestre el mensaje de error)
    ),
  email: string()
    .required("El campo email es requerido")
    .email("El campo de email no tiene el formato correcto"),
  telefono: string()
    .required("El campo telefono es requerido")
    .min(6, "El campo telefono requiere minimo 6 caracteres"),
  apellido: string().required("El campo apellido es requerido"),
  nombre: string().required("El campo nombre es requerido"),
});

// Función para validar el formulario
const validateForm = async (dataForm) => {
  try {
    // Intenta validar el formulario con el esquema definido
    await userSchema.validate(dataForm);
    return { status: "success" }; // Si la validación pasa, retorna un estado de éxito
  } catch (error) {
    // Si la validación falla, captura el error y retorna un estado de error con el mensaje correspondiente
    return { status: "error", message: error.message };
  }
};

export default validateForm;
