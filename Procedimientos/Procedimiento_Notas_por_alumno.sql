select  nota_final,e.numero_cuenta, nombre_asignatura, seccion,observacion 
 from estudiante e join nota_final nf on e.id_estudiante= nf.id_estudiante join asignatura a on nf.id_asignatura = a.id_asignatura join 
 acumulativo_actividad ac on nf.id_acumulativo_actividad = ac.id_acumulativo_actividad join parcial p on ac.id_acumulativo_actividad = p.id_acumulativo_actividad join
docente d on nf.id_docente = d.id_docente join personas pe on e.id_persona = pe.id_persona where a.id_asignatura
