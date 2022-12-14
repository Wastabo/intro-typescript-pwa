interface Direccion{
    calle:string;
    pais:string;
    estado:string;
}

interface AlumnoUTL{
    nombre:string;
    edad:number;
    direccion:Direccion;
    mostrarDireccion();
}


const alumnoUTL:AlumnoUTL={
    nombre:'Mario',
    edad:23,
    direccion:{
        calle:'Veracruz',
        pais:'MX',
        estado:'GTO',
    },

    mostrarDireccion(){
        console.log(this.nombre+', '+this.direccion.estado+', '+this.direccion.pais);
    }
}


const direccion=alumnoUTL.mostrarDireccion();
console.log(direccion);