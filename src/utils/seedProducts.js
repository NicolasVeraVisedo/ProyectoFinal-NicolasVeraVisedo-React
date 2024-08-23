import { addDoc, collection } from "firebase/firestore";
import db from "../db/db.js";

const productos = [
  {
    id: "Collar-1",
    nombre: "Cadena con corazón",
    descripcion: "Una cadena con un dije corazón en plata 925",
    precio: 50000,
    categoria: "collares",
    stock: 10,
    imagen: "/img/collar1.webp",
  },
  {
    id: "Collar-2",
    nombre: "Cadena con inicial",
    descripcion: "Una cadena con un dije inicial en plata 925",
    precio: 50000,
    categoria: "collares",
    stock: 2,
    imagen: "/img/collar2.webp",
  },
  {
    id: "Collar-3",
    nombre: "Conjunto De Plata Alianzas Rusas",
    descripcion: "Conjunto Cadena y Dije Alianzas Rusas",
    precio: 50600,
    categoria: "collares",
    stock: 4,
    imagen: "/img/collar3.webp",
  },
  {
    id: "Anillo-1",
    nombre: "Anillo Solitario Corazón",
    descripcion: "ANILLO CORAZON DE ORO 18KTS",
    precio: 171792,
    categoria: "anillos",
    stock: 2,
    imagen: "/img/anillo1.webp",
  },
  {
    id: "Anillo-2",
    nombre: "Anillo Dama Con Piedra",
    descripcion: "Anillo de Oro 18k Piedra cubic",
    precio: 466292,
    categoria: "anillos",
    stock: 5,
    imagen: "/img/anillo2.webp",
  },
  {
    id: "Anillo-3",
    nombre: "Anillo Infinito",
    descripcion: "Anillo infinito de oro 18 Kts pulido",
    precio: 450000,
    categoria: "anillos",
    stock: 12,
    imagen: "/img/anillo3.webp",
  },
  {
    id: "Aro-1",
    nombre: "Aros gota grande",
    descripcion: "AROS GERAL GOTA ORO 18k GRANDE",
    precio: 55000,
    categoria: "aros",
    stock: 7,
    imagen: "/img/aros1.webp",
  },
  {
    id: "Aro-2",
    nombre: "Aros Earcuff Chunky",
    descripcion: "Aros Earcuff Chunky ORO 18k GRANDE",
    precio: 65000,
    categoria: "aros",
    stock: 12,
    imagen: "/img/aros2.webp",
  },
  {
    id: "Aro-3",
    nombre: "Aros Cubanos",
    descripcion: "PAR DE AROS CUBANOS EN ORO ROJO 18K ",
    precio: 75000,
    categoria: "aros",
    stock: 9,
    imagen: "/img/aros3.webp",
  },
];

const seedProducts = () => {
  productos.map(({ id, ...rest }) => {
    const productosRef = collection(db, "productos"); //Referencia a mi coleccion de productos
    addDoc(productosRef, rest);
  });

  console.log("productos subidos correctamente");
};

seedProducts();
