//Destructuracion de objetos y arreglos

interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc: 'noki',
    precio:1234
}

const tablet:Producto={
    desc:'Ipad Air',
    precio:25739
}

function calcularIva(productos:Producto[]):number{

    let total=0;

    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}

const articulos1=[telefono,tablet];
const IVATot=calcularIva(articulos1);
console.log(`IVA: ${IVATot}`);