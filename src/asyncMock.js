const products = [
    {
        id: '1',
        nombre: 'Remera',
        price: 5000,
        category: 'ropa',
        img:,
        stock: 30,
        description:'Remera Amarilla',
    }

    {
        id:'2',
        nombre: 'Pantalon',
        price: 10000,
        category: 'ropa',
        img:,
        stock: 100,
        description:'Pantalon negro casual',
    }

    {
        id:'3',
        nombre: 'Camisa',
        price:8000,
        category:'ropa',
        img:,
        stock:50,
        description:'Camisa a cuadros',
    }
]

export const getProducts =() => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 500)
    })
}