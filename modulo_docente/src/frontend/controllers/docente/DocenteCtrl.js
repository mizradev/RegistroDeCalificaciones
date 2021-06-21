exports.CursosAsignados = (req, res) => {
    return res.render('modulos/docente/cursos-asignados',{
        nombrePagina: 'Cursos asignados',
        cursosAsignados: true
    })
}

exports.AlumnosPorSeccion = (req, res) => {
    res.render('modulos/docente/alumnosporseccion', {
        nombrePagina: 'Alumnos por seccion',
        alumnosSeccion: true
    })
}

exports.AsignarTareas = (req, res) => {
    res.render('modulos/docente/asignar-tareas', {
        nombrePagina: 'Tareas',
        actividadesTareas: true
    })
}

exports.AsignarOtro = (req, res) => {
    res.render('modulos/docente/asignar-otro', {
        nombrePagina: 'Otras actividades',
        Otras_Actividades: true
    })
}

exports.ActividadesDisponibles = (req, res) => {
    res.render('modulos/docente/actividades-disponibles', {
        nombrePagina: 'Actividades disponibles',
        actividadesDisp: true
    })
}
 //*********************karla****************** */
exports.pantalla_inicio = (req, res) => {
    res.render('modulos/docente/actividades', {
        nombrePagina: 'Actividades',
        actividades: true
    })
}

exports.pantalla_inicioExamen = (req, res) => {
    res.render('modulos/docente/examen', {
        nombrePagina: 'Examen',
        examen: true
    })
}


exports.pantalla_inicioPrueba = (req, res) => {
    res.render('modulos/docente/pruebas', {
        nombrePagina: 'Prueba',
        pruebas: true
    })
}
 
//*********************rudy****************** */
exports.pantalla_inicio_cursos = (req, res) => {

    res.render('modulos/docente/planificar-curso', {
        nombrePagina: 'planificacion de los cursos asignados',
        planificar_curso: true
        
    })
}


exports.pantalla_inicio_curso = (req, res) => {
    const {id,nc} = req.query;
    res.render('modulos/docente/plan-curso', {
        nombrePagina: 'planificar curso',
        plan_curso: true,
        id:id,
        nc:nc
        
    })
}

exports.pantalla_inicio_clase = (req, res) => {
    const {id,nc} = req.query;
    res.render('modulos/docente/plan-clase', {
        nombrePagina: 'planificar de la clase',
        plan_clase: true,
        id:id,
        nc:nc
    })
}
