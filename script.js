function ad() {
    let main = document.getElementById('main')

    let html = "<h2>Agregar producto</h2><form id='productForm' action='#'' method='POST' enctype='multipart/form-data'><div class='form-group'><label for='nombre'>Nombre:</label><input type='text' id='nombre' name='nombre' required></div><div class='form-group'><label for='descripcion'>Descripción:</label><textarea id='descripcion' name='descripcion' rows='4' required></textarea></div><div class='form-group'><label for='cantidad'>Cantidad:</label><input type='number' id='cantidad' name='cantidad' required></div><div class='form-group'><label for='imagen'>Agregar Imagen:</label><input type='file' id='imagen' name='imagen' accept='image/*' required></div><button type='submit'>Agregar Producto</button></form>"

    main.innerHTML = html
}
//console.log("hola mundo")