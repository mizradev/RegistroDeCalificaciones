function insertMjsValidation(data) {
    const {descripcion,almacenamiento,person1,person2,asig} = data;
    if(descripcion.length>200){
     throw new Error('EL MENSAJE NO PUDEDE CONTENER MAS DE 200 CARACCTERES');
 }
}

module.exports ={
    insertMjsValidation
}