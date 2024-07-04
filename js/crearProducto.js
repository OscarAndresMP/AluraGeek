import { apiConexion } from "./apiConexion.js";

const formulario = document.querySelector("[data-formulario]");
const idd = document.querySelector("[data-id]");

async function crearProducto(evento){
    evento.preventDefault();

    const descripcion = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const image = document.querySelector("[data-image]").value;

    await apiConexion.enviarPorducto(descripcion, precio, image);


}

formulario.addEventListener("submit", evento => crearProducto(evento));