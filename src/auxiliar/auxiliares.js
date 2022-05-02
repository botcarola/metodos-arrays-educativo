export const infoMetodosArrays = [
    {
        id: 0,
        nombre: "map()",
        descripción: "Este método nos permite recorrer un array y modificar a sus elementos, retornando una nueva matriz que tiene la misma longitud que la original, pero sin transformar a su antecesora. Este nuevo array debe guardarse en una variable para poder apreciar sus modificaciones.",
        ejemplo: "../assets/ejemplos/map.png",
        resultadoEnConsola: "../assets/consola/mapRespuesta.png",
        comentarioAdicional: "map() puede recibir tres parámetros. Uno de ellos es obligatorio:",
        parametroObligatorio: "currentValue, en este caso -fruta-, que representa al elemento actual.",
        parametroOptativo1: "index, que es el índice del elemento actual dentro del array",
        parametroOptativo2: "array, que es el array sobre el que se llama el map"
    },
    {
        id: 1,
        nombre: "filter()"
    },
    {
        id: 2,
        nombre: "reduce()"
    },
    {
        id: 3,
        nombre: "forEach()",
    },
    {
        id: 4,
        nombre: "find()",
    },
    {
        id: 5,
        nombre: "sort()",
    },
    {
        id: 6,
        nombre: "some()",
    },
    {
        id: 7,
        nombre: "every()",
    },
    {
        id: 8,
        nombre: "concat()",
    },
    {
        id: 9,
        nombre: "includes()",
    },
    {
        id: 10,
        nombre: "join()",
    },
    {
        id: 11,
        nombre: "indexOf()",
    },
    {
        id: 12,
        nombre: "findIndex()",
    },
    {
        id: 13,
        nombre: "fill()",
    },
    {
        id: 14,
        nombre: "push()",
    },
    {
        id: 15,
        nombre: "pop()",
    },
    {
        id: 16,
        nombre: "shift()",
    },
    {
        id: 17,
        nombre: "unshift()",
    },
    {
        id: 18,
        nombre: "slice()",
    },
    {
        id: 19,
        nombre: "reverse()",
    },
    {
        id: 20,
        nombre: "splice()",
    },
    {
        id: 21,
        nombre: "lastIndexOf()",
    },
    {
        id: 22,
        nombre: "flat()",
    },
    {
        id: 23,
        nombre: "from()",
    },
]

export const filtrarMetodosArrays = ( metodo ) => {

    const arrayFiltrado = infoMetodosArrays.filter( curr => curr.nombre === metodo && curr)
    return arrayFiltrado
}