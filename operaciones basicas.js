//archivo: calculadora.js
export function sumar (a, b) {
    return parseInt(a) + parseInt(b) ;
}
export function restar (a, b){
    return parseInt(a) - parseInt(b);
}

export const division = (a, b) => {
 if (parseInt(b)!= 0){
    return parseInt(a) /parseInt(b) 
 }else
    return "Error al dividir entre 0"
}
