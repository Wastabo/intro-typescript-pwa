let nombres:String[]=['mario','dario','juan'];

console.log(nombres);

nombres.push('Laura');
//nombres.push(100);
console.log(nombres);

let datos:(boolean|number|String)[]=['mario',23,true,'lopez'];

console.log(datos);
datos.push(300);
datos.push('mario');
datos.push(false);
console.log(datos);

//Otra forma de crear arreglos

let arreglo: Array<number>=[1,2,3,4]

const nombre1:String='datos1';

interface Alumno{
    matricula:String,
    nombre:String,
    edad:number,
    email:String
    materias?:string[]
}

const alumno:Alumno={

    matricula:'rcr123',
    nombre:'mario',
    edad:23,
    email:'gmail.com',
    materias:['ingles']
}

alumno.nombre='felipe';
console.log(alumno);

