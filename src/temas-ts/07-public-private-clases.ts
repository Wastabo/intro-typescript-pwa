class Persona{ //public private
    private nombre:string;
    private edad:number;

    constructor(a:string,b:number){
        this.nombre=a;
        this.edad=b;
    }

    setNombre(a:string){
        this.nombre=a;
    }

    imprimePersona(){
        console.log(`Nombre: ${this.nombre} \n Edad: ${this.edad}`);
    }

    metodoAlterno(){
        this.imprimePersona();
    }
}

let persona1:Persona;
persona1=new Persona('Dana',20);

let persona2=new Persona('Laura',19);

persona1.setNombre('Mario');

persona1.metodoAlterno();
persona2.metodoAlterno();

//persona1.nombre='Mario';
//persona1.edad=20;

persona1.imprimePersona();
persona2.imprimePersona();


class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }

    imprimir(){
        console.log(`Salio el valor: ${this.valor}`);
    }
}

let dado1=new Dado();
dado1.tirar();
dado1.imprimir();