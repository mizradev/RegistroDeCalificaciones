
$(document).ready( function () {
    axios.get('/alumnos/clase').then(resp => {
    
        console.log(resp.data);
    });
 
    let url ='/alumnos/clase';
    let numero_cuenta,nombre_persona,nota_final,observacion
    let tablanotas = $('#notas_alumnos').DataTable({
        columns: [
            {"data":"numero_cuenta"},
            {"data":"nombre"},
            {"data":"nota"},
            {"data":"obeserivacion"},        
            {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-info btn-sm btnEditar'>Editar</button><button class='btn btn-danger btn-sm btnBorrar'>Borrar</button></div></div>"}
        ],
        "columnDefs":[{

        }]
    });
});       
    
    //$('#myTable').DataTable();
