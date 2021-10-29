class Persona{

    constructor(nombre, apellido)
    {
        this.nombre= nombre;
        this.apellido= apellido;
    }
    getNombreCompleto()
    {
        return `${this.nombre} ${this.apellido}`;
    }
}


const persona  = new Persona("Leonardo", "Toro");
let nombrec=  persona.getNombreCompleto();
console.log(nombrec)