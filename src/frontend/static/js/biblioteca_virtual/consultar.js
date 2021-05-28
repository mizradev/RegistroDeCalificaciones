(()=>{

 
    $(document).ready(function(){
        let url = 'http://localhost:3000/api/v1/biblioteca/';
        let opcion = null;
        let id_libro, isbn, titulo, edicion, descripcionl,img, idioma, editorial, categoria, descripcionc, autor, nacionalidad, premios, ranking, fila;
        //Mostrar
        let tablaLibros = $('#tablaLibros').DataTable({
            "ajax":{
                "url": url,
                "dataSrc":""
            },
            "columns":[
                {"data":"id_libro"},
                {"data":"isbn"},
                {"data":"titulo"},
                {"data":"edicion"},
                {"data":"descripcion_libro"},
                {"data":"img"},
                {"data":"idioma"},                
                {"data":"nombre_autor"},
                {"data":"nacionalidad"},
                {"data":"premios"},
                {"data":"ranking"},
                {"data":"nombre_categoria"},
                {"data":"descripcion"},
                {"data":"nombre_editorial"},
                {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-info btn-sm btnEditar'>Editar</button><button class='btn btn-danger btn-sm btnBorrar'>Borrar</button></div></div>"}
            ],
            "columnDefs":[{

            }]
        });
    });

         //CREAR
            $("#btnCrear").click(function(){
            opcion='crear';            
            id_libro=null;
            $("#formLibros").trigger("reset");
            $(".modal-header").css( "background-color", "#23272b");
            $(".modal-header").css( "color", "white" );
            $(".modal-title").text("Registrar Libro");
            $('#modalCRUD').modal('show');	    
        }); 
          //EDITAR        
    $(document).on("click", ".btnEditar", function(){		            
        opcion='editar';
        fila = $(this).closest("tr");	        
        id_libro = parseInt(fila.find('td:eq(0)').text());
            isbn = fila.find('td:eq(1)').text();
            titulo = fila.find('td:eq(2)').text();
            edicion = fila.find('td:eq(3)').text();
            descripcionl = fila.find('td:eq(4)').text();
            img = fila.find('td:eq(5)').text();
            idioma = fila.find('td:eq(6)').text();
            autor = fila.find('td:eq(7)').text();
            nacionalidad = fila.find('td:eq(8)').text();
            premios = fila.find('td:eq(9)').text();
            ranking = fila.find('td:eq(10)').text();
            categoria = fila.find('td:eq(11)').text();
            descripcionc = fila.find('td:eq(12)').text();
            editorial = fila.find('td:eq(13)').text();            
        $("#id_libro").val(id_libro);
            $("#isbn").val(isbn);
            $("#titulo").val(titulo);
            $("#edicion").val(edicion); 
            $("#descripcionl").val(descripcionl);
            $("#img").val(img);
            $("#idioma").val(idioma);
            $("#autor").val(autor); 
            $("#nacionalidad").val(nacionalidad); 
            $("#premios").val(premios); 
            $("#ranking").val(ranking);    
            $("#categoria").val(categoria); 
            $("#descripcionc").val(descripcionc); 
            $("#editorial").val(editorial);            
        $(".modal-header").css("background-color", "#7303c0");
        $(".modal-header").css("color", "white" );
        $(".modal-title").text("Editar Libro");		
        $('#modalCRUD').modal('show');		   
    });

     //BORRAR
    $(document).on("click", ".btnBorrar", function(){
        fila = $(this);          
        id_libro = parseInt($(this).closest('tr').find('td:eq(0)').text());            
        Swal.fire({
            title: '¿Confirma eliminar el registro?',                
            showCancelButton: true,
            confirmButtonText: `Confirmar`,                
            }).then((result) => {               
            if (result.isConfirmed) {
                fetch('http://localhost:3000/api/v1/biblioteca/'+id_libro,{   
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({USR_REGISTRO:"jona"}),
                    success: function() {
                        tablaLibros.row(fila.parents('tr')).remove().draw();                  
                    }
                });
                Swal.fire('¡Registro Eliminado!', '', 'success')
            } 
            })
    });     

      //submit para el CREAR y EDITAR
        $('#formLibros').on('submit',function(e){                                     
        e.preventDefault();
        id_libro = $.trim($('#id_libro').val()); 

        isbn = $.trim($('#isbn').val());
        titulo = $.trim($('#titulo').val());
        edicion = $.trim($('#edicion').val()); 
        descripcionl = $.trim($('#descripcionl').val());
        img = $.trim($('#img').val());
        idioma = $.trim($('#idioma').val()); 
        autor = $.trim($('#autor').val()); 
        nacionalidad = $.trim($('#nacionalidad').val()); 
        premios = $.trim($('#premios').val()); 
        ranking = $.trim($('#ranking').val());  
        categoria = $.trim($('#categoria').val()); 
        descripcionc = $.trim($('#descripcionc').val());
        editorial = $.trim($('#editorial').val());   

        if(opcion=='crear'){                
            fetch('http://localhost:3000/api/v1/biblioteca/',{ 
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ISBN: isbn,
                    TITULO: titulo,
                    EDICION: edicion,
                    DESCRIPCION_LIBRO: descripcionl,
                    IMG: img,
                    IDIOMA: idioma,
                    NOMBRE_EDITORIAL: editorial,
                    NOMBRE_CATEGORIA: categoria,
                    DESCRIPCION: descripcionc,
                    NOMBRE_AUTOR: autor,
                    NACIONALIDAD: nacionalidad,
                    PREMIOS: premios,
                    RANKING: ranking,
                    USR_REGISTRO: "Josue"}),
                success: function(data) {                       
                    tablaLibros.fetch.reload(null, false);                        
                }
            });	
        }
        if(opcion=='editar'){
            console.log("editar");
            fetch('http://localhost:3000/api/v1/biblioteca/'+id_libro,{                                
                method: 'PUT',                                        
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ID_LIBRO: id_libro,
                    ISBN: isbn,
                    TITULO: titulo,
                    EDICION: edicion,
                    DESCRIPCION_LIBRO: descripcionl,
                    IMG: img,
                    IDIOMA: idioma,
                    NOMBRE_EDITORIAL: editorial,
                    NOMBRE_CATEGORIA: categoria,
                    DESCRIPCION: descripcionc,
                    NOMBRE_AUTOR: autor,
                    NACIONALIDAD: nacionalidad,
                    PREMIOS: premios,
                    RANKING: ranking,
                    USR_REGISTRO: "Josue"}),                     
                success: function(data) {                       
                    tablaLibros.fetch.reload(null, false);                        
                }
            });	
        }        		        
        $('#modalCRUD').modal('hide');											     			
    });




})();
