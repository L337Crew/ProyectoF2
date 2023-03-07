
const procesador1 = {
  nombre: "Intel Core i9-11900K",
  precio: 89999,
  nucleos: 8,
  generacion: 11,
};

const procesador2 = {
  nombre: "AMD Ryzen 9 5900X",
  precio: 74999,
  nucleos: 12,
  generacion: 3,
};

const procesador3 = {
  nombre: "Intel Core i7-11700K",
  precio: 59999,
  nucleos: 8,
  generacion: 11,
};

const procesador4 = {
  nombre: "AMD Ryzen 5 5600X",
  precio: 49999,
  nucleos: 6,
  generacion: 5,
};


const productos = [procesador1, procesador2, procesador3, procesador4];


const carrito = [];


const indiceElegido = prompt(
  "Elige un número del 1 al 4 para comprar el procesador correspondiente:\n1. Intel Core i9-11900K\n2. AMD Ryzen 9 5900X\n3. Intel Core i7-11700K\n4. AMD Ryzen 5 5600X"
);


if (indiceElegido >= 1 && indiceElegido <= 4) {
  
  carrito.push(productos[indiceElegido - 1]);

  
  const respuestaBuscar = prompt(
    "¿Quieres buscar por algún atributo en específico? (s/n)"
  );

  if (respuestaBuscar.toLowerCase() === "s") {
    let productosFiltrados;

    
    const precioBuscar = prompt("Ingresa el precio máximo");
    const nucleosBuscar = prompt("Ingresa la cantidad de núcleos mínima");
    const generacionBuscar = prompt("Ingresa la generación mínima");

    
    if (precioBuscar) {
      productosFiltrados = productos.filter(
        (producto) => producto.precio <= precioBuscar
      );
    }

    if (nucleosBuscar) {
      productosFiltrados = productos.filter(
        (producto) => producto.nucleos >= nucleosBuscar
      );
    }

    if (generacionBuscar) {
      productosFiltrados = productos.filter(
        (producto) => producto.generacion >= generacionBuscar
      );
    }

    
    alert(
      `Resultados encontrados:\n${productosFiltrados
        .map((producto) => `${producto.nombre} - $${producto.precio}`)
        .join("\n")}`
    );
  }
} else {
  alert("Por favor, ingresa un número válido.");
}
