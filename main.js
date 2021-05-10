

const obj = {
    edad: null,
    nombre: "Ludwing Pinto",
    saludar: function (){
        return `Hola ${this.nombre} como estas`;
    },
};
obj.apellido = null;
const inst = Object.create(obj);
inst.nombre = "Camila";
inst.setNombre = function (){ obj.nombre = inst.nombre };
inst.getNombre = function (){ return obj.nombre; };
console.log(obj);
console.log(inst);
console.log(inst.saludar());





// const data = {
//     nombre: "Ludwing Pinto"
// };
// console.log(obj);
// let ejecutar = obj.saludar.bind(data);
// ejecutar();
// console.log(ejecutar());
// data.nombre = "Pedro Gelvez";
// console.log(ejecutar());