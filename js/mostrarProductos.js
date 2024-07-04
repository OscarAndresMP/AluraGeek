import { apiConexion } from "./apiConexion.js";

const lista = document.querySelector("[data-lista]");

function crearCard(descripcion, precio, image, id){
    const producto = document.createElement("div");
    producto.className="card";
    producto.innerHTML=
        `<div class="card-image">
            <img src="${image}">
        </div>
        <div class="card-content">
            <p>${descripcion}</p>
        </div>
        <div class="card-footer">
            <p>$${precio}.00</p>
            <a href="#" id="${id}" class="btnEliminar">borrar</a>
        </div>`;

        //metedo delete
        const btn = producto.querySelector(".btnEliminar");
        btn.addEventListener('click', async function(evento) {
            evento.preventDefault();
            const id = btn.id;

            await apiConexion.BorrarPorducto(id);
            
        });


        return producto;
}

async function listarproductos(){
    const listAPI = await apiConexion.listarProductos();

    listAPI.forEach(producto => lista.appendChild(crearCard(producto.descripcion, producto.precio, producto.image, producto.id)));
}

listarproductos();




