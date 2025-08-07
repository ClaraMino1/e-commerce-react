const productos = [
    {
        id: 1,
        instrumento: "Guitarra eléctrica",
        marca: "Fender",
        modelo: "Stratocaster",
        precio: 1200
    },
    {
        id: 2,
        instrumento: "Batería acústica",
        marca: "Yamaha",
        modelo: "Stage Custom",
        precio: 850
    },
    {
        id: 3,
        instrumento: "Teclado",
        marca: "Casio",
        modelo: "CT-X700",
        precio: 300
    },
    {
        id: 5,
        instrumento: "Bajo eléctrico",
        marca: "Ibanez",
        modelo: "GSR200",
        precio: 400,
        cantidad: 1,
        fechaVenta: "2025-08-06",
        comprador: "Diego Luna"
    }
    ];

export const getProductos = ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}