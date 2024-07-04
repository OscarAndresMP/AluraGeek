async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/Productos");
    const jsonConexion = conexion.json();
    //console.log(jsonConexion);

    return jsonConexion;
}

async function enviarPorducto(descripcion,precio,image){
    const conexion = await fetch("http://localhost:3001/Productos", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            descripcion:descripcion,
            precio:precio,
            image:image
        })
    });

    const jsonConexion = conexion.json();

    return jsonConexion;
}

async function BorrarPorducto(id){
    const conexion = await fetch("http://localhost:3001/Productos/"+id, {
        method:"DELETE",
        headers:{"Content-type":"application/json"}
    });

    const jsonConexion = conexion.json();

    return jsonConexion;
}

export const apiConexion ={
    listarProductos,
    enviarPorducto,
    BorrarPorducto
}