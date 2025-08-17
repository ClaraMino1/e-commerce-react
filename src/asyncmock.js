const productos = [
    {
        id: 1,
        instrumento: "Vintage Sunburst Guitar",
        marca: "Gibson",
        estilo: "Round Shoulder",
        precio: 3.199,
        categoria: "guitar",
        stock: 10,
        imageUrl: "https://images.ctfassets.net/m8onsx4mm13s/4aaNpfPo3dZHueWLng5kbn/db704d983ed7d3a7f8eb920f1a0afed2/OCRS4550VS_front.png?w=1200&h=1200"
    },
    {
        id: 2,
        instrumento: "Heavy Aged Cardinal Red Guitar",
        marca: "Gibson",
        estilo: "Les Paul",
        precio: 7.899,
        categoria: "guitar",
        stock: 11,
        imageUrl:"https://images.ctfassets.net/m8onsx4mm13s/2XgzMuITGfnp9J4qorEDcW/bbec64d07f7f6f378d18fa8574f125b3/LPJRSC57PSL000000479_3_Front.png?w=1200&h=1200"
    },
    {
        id: 3,
        instrumento: "Tobias Growler IV Satin Natural Bass",
        marca: "Gibson",
        estilo: "Double Cut",
        precio: 1399,
        categoria: "bass",
        stock: 21,
        imageUrl:"https://images.ctfassets.net/m8onsx4mm13s/4IVULDeEY2hqAASYaJckOA/d35dfbd55d3fd69198f919f9e67e3569/TBGR4SNABH1_2_Front.png?w=1200&h=1200"
    },
    {
        id: 4,
        instrumento: "Teclado CT-S1",
        marca: "Casio",
        estilo: "CT-S1",
        precio: 3100,
        categoria: "keyboards",
        stock: 8,
        imageUrl: "https://www.casioteclados.com/wp-content/uploads/2022/04/Conheca-ct-s500.png"
    },
    {
        id: 5,
        instrumento: "Batterie Acoustique TIM122B BL",
        marca: "Divarte",
        estilo: "Standard",
        precio: 999,
        categoria: "percussion",
        stock: 13,
        imageUrl: "https://static.sonovente.com/img/library/alpha/77/77592.png"
    },
    {
        id: 6,
        instrumento: "Batterie Acoustique TIM122B BL",
        marca: "Squier",
        estilo: "Jaguar",
        precio: 780,
        categoria: "bass",
        stock: 13,
        imageUrl: "https://dcdn-us.mitiendanube.com/stores/005/899/763/products/0378503506_sqr_ins_frt_1_rr-5a4d4828d4b16ec9c017551993176169-1024-1024.webp"
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