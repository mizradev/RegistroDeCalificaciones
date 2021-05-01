CREATE PROCEDURE `Informacion_notas` (
idestudiante int)
BEGIN
SELECT a.nombre_asignatura,a.seccion, pe.nombre_persona,p.parcial 
FROM nota_final nt join asignatura a on  nt.id_asignatura = a.id_asignatura join 
docente d on a.id_docente = d.id_docente join personas pe on d.id_persona= pe.id_persona join estudiante
 es on pe.id_persona = es.id_persona join nota_final ntf on es.id_estudiante = ntf.id_estudiante
 join  acumulativo_actividad ac on ntf.id_acumulativo_actividad = ac.id_acumulativo_actividad join 
parcial p on ac.id_parcial= p.id_parcial where idestudiante ;
END
