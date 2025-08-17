const productos = [
    {
        id: 1,
        instrumento: "Guitarra eléctrica",
        marca: "Fender",
        modelo: "Stratocaster",
        precio: 1200,
        categoria: "guitarras",
        stock: 10
    },
    {
        id: 2,
        instrumento: "Guitarra acústica",
        marca: "SX",
        modelo: "acustic",
        precio: 850,
        categoria: "guitarras",
        stock: 11
    },
    {
        id: 3,
        instrumento: "Batería acústica",
        marca: "Yamaha",
        modelo: "Stage Custom",
        precio: 850,
        categoria: "percusion",
        stock: 21
    },
    {
        id: 4,
        instrumento: "Teclado",
        marca: "Casio",
        modelo: "CT-X700",
        precio: 300,
        categoria: "teclas",
        stock: 8
    },
    {
        id: 5,
        instrumento: "Bajo eléctrico",
        marca: "Ibanez",
        modelo: "GSR200",
        precio: 400,
        categoria: "bajos",
        stock: 13
    }
    ];

export const getProductos = ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}

export const getUnProducto = (id)=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id == id)
            resolve(producto)
        }, 2000);
    })
}

export const getProductoPorCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosFiltrados = productos.filter(prod => prod.categoria === categoria);
      resolve(productosFiltrados); 
    }, 2000);
  });
};