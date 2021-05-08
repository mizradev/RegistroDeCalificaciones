-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-05-2021 a las 07:04:27
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistema_calificaciones`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `id_actividad` bigint(20) NOT NULL,
  `nombre_actividad` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion_actividad` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `actividad` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `estado_de_entrega` tinyint(1) DEFAULT NULL,
  `tiempo_limite` time DEFAULT NULL,
  `id_calendario` bigint(20) DEFAULT NULL,
  `id_asistencia` bigint(20) DEFAULT NULL,
  `id_tipo_actividad` bigint(20) DEFAULT NULL,
  `id_docente` bigint(20) DEFAULT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acumulativo_actividad`
--

CREATE TABLE `acumulativo_actividad` (
  `id_acumulativo_actividad` bigint(20) NOT NULL,
  `acumulativo_actividad` bigint(20) NOT NULL,
  `id_parcial` bigint(20) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id_administrador` int(10) NOT NULL,
  `puesto` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `facultad` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `id_persona` bigint(20) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignatura`
--

CREATE TABLE `asignatura` (
  `id_asignatura` bigint(20) NOT NULL,
  `nombre_asignatura` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `seccion` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `id_docente` bigint(20) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia`
--

CREATE TABLE `asistencia` (
  `id_asistencia` bigint(20) NOT NULL,
  `fecha_asistencia` datetime DEFAULT NULL,
  `id_estudiante` bigint(20) DEFAULT NULL,
  `id_asignatura` bigint(20) DEFAULT NULL,
  `id_docente` bigint(20) DEFAULT NULL,
  `id_tipo_asistencia` bigint(20) DEFAULT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auditorialibros`
--

CREATE TABLE `auditorialibros` (
  `ID_AUDITORIA` bigint(20) NOT NULL,
  `DATOS` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`DATOS`)),
  `TABLA` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `ANTES` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`ANTES`)),
  `DESPUES` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`DESPUES`)),
  `ACCION` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `USR_REGISTRO` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `FECHA_REGISTRO` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autores`
--

CREATE TABLE `autores` (
  `id_autor` bigint(20) NOT NULL COMMENT 'COD DE AUTOR LLAVE PRIMARIA',
  `nombre_autor` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'NOMBRE COMPLETO DEL AUTOR',
  `nacionalidad` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'NACIONALIDAD DEL AUTOR',
  `premios` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'PREMIOS A LOS AUTORES',
  `ranking` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'RANKIN DE LOS AUTORES SEGUN VENTAS',
  `usr_registro` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'USUARIO',
  `fecha_registro` date NOT NULL COMMENT 'FECHA DE REGISTRO'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendario`
--

CREATE TABLE `calendario` (
  `id_calendario` bigint(20) NOT NULL,
  `observacion` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `id_docente` bigint(20) DEFAULT NULL,
  `id_asignatura` bigint(20) DEFAULT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrera`
--

CREATE TABLE `carrera` (
  `id_carrera` bigint(20) NOT NULL,
  `nombre_carrera` varchar(120) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nombre_centro_estudio` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` bigint(20) NOT NULL COMMENT 'COD DE CATEGORIA LLAVE PRIMARIA',
  `nombre_categoria` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'CATEGORIA DE LOS LIBROS POR CARRERAS',
  `descripcion` varchar(150) COLLATE utf8_unicode_ci NOT NULL COMMENT 'CATEGORIA DE LOS LIBROS POR CARRERAS',
  `usr_registro` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'USUARIO',
  `fecha_registro` date NOT NULL COMMENT 'FECHA DE REGISTRO'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direcciones`
--

CREATE TABLE `direcciones` (
  `id_direccion` bigint(20) NOT NULL,
  `descripcion_direccion` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente`
--

CREATE TABLE `docente` (
  `id_docente` bigint(20) NOT NULL,
  `especialidad` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `numero_empleado` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `id_persona` bigint(20) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `editorial`
--

CREATE TABLE `editorial` (
  `id_editorial` bigint(20) NOT NULL COMMENT 'COD DE EDITORIAL LLAVE PRIMARIA',
  `nombre_editorial` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'NOMBRE DE LA EDITORIAL',
  `usr_registro` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'USUARIO',
  `fecha_registro` date DEFAULT NULL COMMENT 'FECHA DE REGISTRO'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrega_actividad`
--

CREATE TABLE `entrega_actividad` (
  `id_entrega` bigint(20) NOT NULL,
  `comentario_actividad` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `entrega_actividad` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cloudinary` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_entrega` datetime DEFAULT NULL,
  `estado_actvidad` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_estudiante` bigint(20) DEFAULT NULL,
  `id_docente` bigint(20) DEFAULT NULL,
  `id_actividad` bigint(20) DEFAULT NULL,
  `fecha_registro` datetime DEFAULT NULL,
  `urs_registro` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `id_estudiante` bigint(20) NOT NULL,
  `numero_cuenta` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_persona` bigint(20) DEFAULT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial_academico`
--

CREATE TABLE `historial_academico` (
  `id_historial_academico` bigint(20) NOT NULL,
  `asignatura` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`asignatura`)),
  `estudiante` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`estudiante`)),
  `docente` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`docente`)),
  `nota_final` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`nota_final`)),
  `historia_de_nota` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`historia_de_nota`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial_de_notas`
--

CREATE TABLE `historial_de_notas` (
  `id_historial_de_notas` bigint(20) NOT NULL,
  `nota_historial` decimal(10,0) NOT NULL,
  `id_periodo_academico` bigint(20) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id_libro` bigint(20) NOT NULL COMMENT 'COD DEL LIBRO LLAVE PRIMARIA',
  `isbn` bigint(20) NOT NULL COMMENT 'ES UN IDENTIFICADOR UNICO OARA LIBROS',
  `titulo` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'TITULO QUE DESCRIBE EL NOMBRE DEL LIBRO',
  `edicion` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'NUMERO DE EDICION DEL LIBRO',
  `descripcion_libro` varchar(150) COLLATE utf8_unicode_ci NOT NULL COMMENT 'DESCRIPCION DETALLADA DE LO QUE TRATA EL LIBRO',
  `img` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'IMAGEN DEL LIBRO',
  `idioma` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'IDIOMA DEL LIBRO',
  `usr_registro` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT 'USUARIO',
  `fecha_registro` date NOT NULL COMMENT 'FECHA DE REGISTRO'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensaje`
--

CREATE TABLE `mensaje` (
  `id_mensaje` bigint(20) NOT NULL,
  `descripcion_mensaje` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `fecha_mensaje` datetime NOT NULL,
  `almacenamiento` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  `ruta_estado` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `public_id` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nota_final`
--

CREATE TABLE `nota_final` (
  `id_nota_final` bigint(20) NOT NULL,
  `nota_final` decimal(10,0) NOT NULL,
  `observacion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_asignatura` bigint(20) NOT NULL,
  `id_estudiante` bigint(20) NOT NULL,
  `id_docente` bigint(20) NOT NULL,
  `id_acumulativo_actividad` bigint(20) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parcial`
--

CREATE TABLE `parcial` (
  `id_parcial` bigint(20) NOT NULL,
  `parcial` decimal(10,0) NOT NULL,
  `id_Acumulativo_actividad` bigint(20) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parciales`
--

CREATE TABLE `parciales` (
  `id_parciales` bigint(20) NOT NULL,
  `parciales` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `id_estudiante` bigint(20) NOT NULL,
  `id_docente` bigint(20) NOT NULL,
  `id_actividad` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `periodo_academico`
--

CREATE TABLE `periodo_academico` (
  `id_periodo_academico` bigint(20) NOT NULL,
  `numero_periodo` decimal(10,0) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id_persona` bigint(20) NOT NULL,
  `numero_identidad` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `nombre_persona` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `edad_persona` int(2) NOT NULL,
  `genero_persona` enum('M','F') COLLATE utf8_unicode_ci NOT NULL,
  `estado_civil` enum('S','C','V','D') COLLATE utf8_unicode_ci NOT NULL,
  `fecha_nacimiento` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `foto` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id_persona`, `numero_identidad`, `nombre_persona`, `edad_persona`, `genero_persona`, `estado_civil`, `fecha_nacimiento`, `foto`, `fecha_registro`, `usr_registro`) VALUES
(1, '1212199400056', 'Joe Lopez', 27, 'M', 'S', '22/05/1994', NULL, '2021-05-08 06:09:13', 'admin'),
(2, '1215199522351', 'Juan Velasquez', 26, 'M', 'S', '02/04/1995', NULL, '2021-05-08 06:09:13', 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas_usuario`
--

CREATE TABLE `preguntas_usuario` (
  `id_preguntas` bigint(20) NOT NULL,
  `pregunta_1` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pregunta_2` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `preguntas_usuario`
--

INSERT INTO `preguntas_usuario` (`id_preguntas`, `pregunta_1`, `pregunta_2`, `usr_registro`, `fecha_registro`) VALUES
(4, '1 ¿Cómo se llama tú mascota favorita?', '2 ¿Cuál es tú apodo?', 'admin', '2021-04-08 11:08:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rel_carrera_asignatura`
--

CREATE TABLE `rel_carrera_asignatura` (
  `id_carrera_asignatura` bigint(20) NOT NULL,
  `id_carrera` bigint(20) DEFAULT NULL,
  `id_asignatura` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rel_carrera_docente`
--

CREATE TABLE `rel_carrera_docente` (
  `id_relcarrdoc` bigint(20) NOT NULL,
  `id_docente` bigint(20) NOT NULL,
  `id_carrera` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rel_estudiante_asignatura`
--

CREATE TABLE `rel_estudiante_asignatura` (
  `id_estudiante_asignatura` bigint(20) NOT NULL,
  `id_estudiante` bigint(20) DEFAULT NULL,
  `id_asignatura` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rel_estudiante_carrera`
--

CREATE TABLE `rel_estudiante_carrera` (
  `id_estudiante_carrera` bigint(20) NOT NULL,
  `id_estudiante` bigint(20) DEFAULT NULL,
  `id_carrera` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rel_libro_autor`
--

CREATE TABLE `rel_libro_autor` (
  `id_rel_libroaut` bigint(20) NOT NULL,
  `id_libro` bigint(20) DEFAULT NULL,
  `id_autor` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rel_libro_categoria`
--

CREATE TABLE `rel_libro_categoria` (
  `id_rel_libcat` bigint(20) NOT NULL,
  `id_libro` bigint(20) DEFAULT NULL,
  `id_categoria` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rel_libro_editorial`
--

CREATE TABLE `rel_libro_editorial` (
  `id_rel_libedit` bigint(20) NOT NULL,
  `id_libro` bigint(20) DEFAULT NULL,
  `id_editorial` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rel_libro_usuario`
--

CREATE TABLE `rel_libro_usuario` (
  `id_rel_librousuario` bigint(20) NOT NULL,
  `id_libro` bigint(20) DEFAULT NULL,
  `id_usuario` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rel_nota_final_historial_notas`
--

CREATE TABLE `rel_nota_final_historial_notas` (
  `id_nota_final` bigint(20) NOT NULL,
  `id_historial_de_notas` bigint(20) NOT NULL,
  `id_nota_final_historial_de_notas` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rel_perdir`
--

CREATE TABLE `rel_perdir` (
  `id_perdir` bigint(20) NOT NULL,
  `id_persona` bigint(20) NOT NULL,
  `id_direccion` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rel_pertel`
--

CREATE TABLE `rel_pertel` (
  `id_pertel` bigint(20) NOT NULL,
  `id_persona` bigint(20) NOT NULL,
  `id_telefono` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas_usuario`
--

CREATE TABLE `respuestas_usuario` (
  `id_respuestas` int(20) NOT NULL,
  `id_usuario` bigint(20) NOT NULL,
  `id_preguntas` bigint(20) NOT NULL,
  `respuesta_1` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `respuesta_2` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `respuestas_usuario`
--

INSERT INTO `respuestas_usuario` (`id_respuestas`, `id_usuario`, `id_preguntas`, `respuesta_1`, `respuesta_2`, `usr_registro`, `fecha_registro`) VALUES
(1, 7, 4, 'hola', 'tenerife', 'admin', '2021-04-08 11:08:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol_usuario` bigint(20) NOT NULL,
  `nombre_rol` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol_usuario`, `nombre_rol`, `fecha_registro`, `usr_registro`) VALUES
(1, 'Administrador', '2021-05-07 21:50:41', 'admin'),
(2, 'Estudiante', '2021-05-07 21:50:41', 'admin'),
(3, 'Docente', '2021-05-07 21:52:11', 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sala_general`
--

CREATE TABLE `sala_general` (
  `id_sala_general` bigint(20) NOT NULL,
  `mensaje` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_docente` bigint(20) DEFAULT NULL,
  `id_estudiante` bigint(20) DEFAULT NULL,
  `id_asignatura` bigint(20) DEFAULT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telefonos`
--

CREATE TABLE `telefonos` (
  `id_telefono` bigint(20) NOT NULL,
  `numero_telefono` int(10) NOT NULL,
  `tipo_telefono` enum('C','F') COLLATE utf8_unicode_ci NOT NULL,
  `ind_telefono` enum('1','0') COLLATE utf8_unicode_ci NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ticket`
--

CREATE TABLE `ticket` (
  `id_ticket` bigint(20) NOT NULL,
  `id_mensaje` bigint(20) NOT NULL,
  `id_asignatura` bigint(20) DEFAULT NULL,
  `id_person1` bigint(20) DEFAULT NULL COMMENT 'El que envia el mensaje',
  `id_person2` bigint(20) DEFAULT NULL COMMENT 'El que recibe el mensaje',
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_actividad`
--

CREATE TABLE `tipo_actividad` (
  `id_tipo_actividad` bigint(20) NOT NULL,
  `tipo_actividades` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_asistencia`
--

CREATE TABLE `tipo_asistencia` (
  `id_tipo_asistencia` bigint(20) NOT NULL,
  `estado_tipo_asistencia` tinyint(1) DEFAULT NULL,
  `observacion_tipo_asistencia` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` bigint(20) NOT NULL,
  `id_persona` bigint(20) NOT NULL,
  `nombre_usuario` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `correo_usuario` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password_usuario` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token_password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `token_preguntas` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `indicador_usuario` enum('activo','inactivo') COLLATE utf8_unicode_ci NOT NULL,
  `id_rol_usuario` bigint(20) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `usr_registro` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `id_persona`, `nombre_usuario`, `correo_usuario`, `password_usuario`, `token_password`, `token_preguntas`, `indicador_usuario`, `id_rol_usuario`, `fecha_registro`, `usr_registro`) VALUES
(7, 1, 'Joe', 'jo2@gmail.com', '$2a$10$6.odmskK9rgZbsDYBW2XhOWbPRhZL04BVD1p4BvFdgFTCJJuKyaSC', NULL, NULL, 'activo', 1, '2021-05-08 05:56:54', 'admin'),
(8, 2, 'Juan', 'jc@gmail.com', '$2a$10$viX0b1U6l23j75muR6cv7.kwkTqxY1lLDVfHFElUkHOomt6VYhP9.', NULL, NULL, 'activo', 1, '2021-05-08 05:56:54', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id_actividad`);

--
-- Indices de la tabla `acumulativo_actividad`
--
ALTER TABLE `acumulativo_actividad`
  ADD PRIMARY KEY (`id_acumulativo_actividad`),
  ADD KEY `id_parcial` (`id_parcial`);

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id_administrador`),
  ADD KEY `id_persona` (`id_persona`);

--
-- Indices de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  ADD PRIMARY KEY (`id_asignatura`);

--
-- Indices de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD PRIMARY KEY (`id_asistencia`),
  ADD KEY `id_estudiante` (`id_estudiante`);

--
-- Indices de la tabla `auditorialibros`
--
ALTER TABLE `auditorialibros`
  ADD PRIMARY KEY (`ID_AUDITORIA`);

--
-- Indices de la tabla `autores`
--
ALTER TABLE `autores`
  ADD PRIMARY KEY (`id_autor`);

--
-- Indices de la tabla `calendario`
--
ALTER TABLE `calendario`
  ADD PRIMARY KEY (`id_calendario`);

--
-- Indices de la tabla `carrera`
--
ALTER TABLE `carrera`
  ADD PRIMARY KEY (`id_carrera`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD PRIMARY KEY (`id_direccion`);

--
-- Indices de la tabla `docente`
--
ALTER TABLE `docente`
  ADD PRIMARY KEY (`id_docente`);

--
-- Indices de la tabla `editorial`
--
ALTER TABLE `editorial`
  ADD PRIMARY KEY (`id_editorial`);

--
-- Indices de la tabla `entrega_actividad`
--
ALTER TABLE `entrega_actividad`
  ADD PRIMARY KEY (`id_entrega`);

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`id_estudiante`),
  ADD KEY `id_persona` (`id_persona`);

--
-- Indices de la tabla `historial_academico`
--
ALTER TABLE `historial_academico`
  ADD PRIMARY KEY (`id_historial_academico`);

--
-- Indices de la tabla `historial_de_notas`
--
ALTER TABLE `historial_de_notas`
  ADD PRIMARY KEY (`id_historial_de_notas`),
  ADD KEY `id_periodo_academico` (`id_periodo_academico`);

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id_libro`);

--
-- Indices de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD PRIMARY KEY (`id_mensaje`);

--
-- Indices de la tabla `nota_final`
--
ALTER TABLE `nota_final`
  ADD PRIMARY KEY (`id_nota_final`),
  ADD KEY `id_acumulativo_actividad` (`id_acumulativo_actividad`),
  ADD KEY `id_asignatura` (`id_asignatura`),
  ADD KEY `id_estudiante` (`id_estudiante`),
  ADD KEY `id_docente` (`id_docente`);

--
-- Indices de la tabla `parcial`
--
ALTER TABLE `parcial`
  ADD PRIMARY KEY (`id_parcial`);

--
-- Indices de la tabla `parciales`
--
ALTER TABLE `parciales`
  ADD PRIMARY KEY (`id_parciales`),
  ADD KEY `id_estudiante` (`id_estudiante`),
  ADD KEY `id_docente` (`id_docente`),
  ADD KEY `id_actividad` (`id_actividad`);

--
-- Indices de la tabla `periodo_academico`
--
ALTER TABLE `periodo_academico`
  ADD PRIMARY KEY (`id_periodo_academico`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id_persona`);

--
-- Indices de la tabla `preguntas_usuario`
--
ALTER TABLE `preguntas_usuario`
  ADD PRIMARY KEY (`id_preguntas`);

--
-- Indices de la tabla `rel_carrera_asignatura`
--
ALTER TABLE `rel_carrera_asignatura`
  ADD PRIMARY KEY (`id_carrera_asignatura`),
  ADD KEY `id_carrera` (`id_carrera`),
  ADD KEY `id_asignatura` (`id_asignatura`);

--
-- Indices de la tabla `rel_carrera_docente`
--
ALTER TABLE `rel_carrera_docente`
  ADD PRIMARY KEY (`id_relcarrdoc`);

--
-- Indices de la tabla `rel_estudiante_asignatura`
--
ALTER TABLE `rel_estudiante_asignatura`
  ADD PRIMARY KEY (`id_estudiante_asignatura`),
  ADD KEY `id_estudiante` (`id_estudiante`),
  ADD KEY `id_asignatura` (`id_asignatura`);

--
-- Indices de la tabla `rel_estudiante_carrera`
--
ALTER TABLE `rel_estudiante_carrera`
  ADD PRIMARY KEY (`id_estudiante_carrera`),
  ADD KEY `id_estudiante` (`id_estudiante`),
  ADD KEY `id_carrera` (`id_carrera`);

--
-- Indices de la tabla `rel_libro_autor`
--
ALTER TABLE `rel_libro_autor`
  ADD PRIMARY KEY (`id_rel_libroaut`),
  ADD KEY `FK_REL_LIBRO_AUTOR` (`id_libro`),
  ADD KEY `FK_REL_AUTOR_LIBRO` (`id_autor`);

--
-- Indices de la tabla `rel_libro_categoria`
--
ALTER TABLE `rel_libro_categoria`
  ADD PRIMARY KEY (`id_rel_libcat`),
  ADD KEY `FK_REL_LIBRO_CATEGORIA` (`id_libro`),
  ADD KEY `FK_REL_CATEGORIA_LIBRO` (`id_categoria`);

--
-- Indices de la tabla `rel_libro_editorial`
--
ALTER TABLE `rel_libro_editorial`
  ADD PRIMARY KEY (`id_rel_libedit`),
  ADD KEY `FK_REL_LIBRO_EDITORIAL` (`id_libro`),
  ADD KEY `FK_REL_EDITORIAL_LIBRO` (`id_editorial`);

--
-- Indices de la tabla `rel_libro_usuario`
--
ALTER TABLE `rel_libro_usuario`
  ADD PRIMARY KEY (`id_rel_librousuario`),
  ADD KEY `FK_REL_LIBRO_USUARIO` (`id_libro`),
  ADD KEY `FK_REL_USUARIO_LIBRO` (`id_usuario`);

--
-- Indices de la tabla `rel_nota_final_historial_notas`
--
ALTER TABLE `rel_nota_final_historial_notas`
  ADD PRIMARY KEY (`id_nota_final_historial_de_notas`),
  ADD KEY `id_historial_de_notas` (`id_historial_de_notas`),
  ADD KEY `id_nota_final` (`id_nota_final`);

--
-- Indices de la tabla `rel_perdir`
--
ALTER TABLE `rel_perdir`
  ADD PRIMARY KEY (`id_perdir`),
  ADD KEY `id_persona` (`id_persona`),
  ADD KEY `id_direccion` (`id_direccion`);

--
-- Indices de la tabla `rel_pertel`
--
ALTER TABLE `rel_pertel`
  ADD PRIMARY KEY (`id_pertel`),
  ADD KEY `id_persona` (`id_persona`),
  ADD KEY `id_telefono` (`id_telefono`);

--
-- Indices de la tabla `respuestas_usuario`
--
ALTER TABLE `respuestas_usuario`
  ADD PRIMARY KEY (`id_respuestas`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_preguntas` (`id_preguntas`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol_usuario`);

--
-- Indices de la tabla `sala_general`
--
ALTER TABLE `sala_general`
  ADD PRIMARY KEY (`id_sala_general`),
  ADD KEY `id_docente` (`id_docente`),
  ADD KEY `id_estudiante` (`id_estudiante`),
  ADD KEY `id_asignatura` (`id_asignatura`);

--
-- Indices de la tabla `telefonos`
--
ALTER TABLE `telefonos`
  ADD PRIMARY KEY (`id_telefono`);

--
-- Indices de la tabla `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id_ticket`),
  ADD KEY `id_person1` (`id_person1`),
  ADD KEY `id_person2` (`id_person2`),
  ADD KEY `id_mensaje` (`id_mensaje`),
  ADD KEY `id_asignatura` (`id_asignatura`);

--
-- Indices de la tabla `tipo_actividad`
--
ALTER TABLE `tipo_actividad`
  ADD PRIMARY KEY (`id_tipo_actividad`);

--
-- Indices de la tabla `tipo_asistencia`
--
ALTER TABLE `tipo_asistencia`
  ADD PRIMARY KEY (`id_tipo_asistencia`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `correo_usuario` (`correo_usuario`),
  ADD KEY `id_persona` (`id_persona`),
  ADD KEY `id_rol_usuario` (`id_rol_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `id_actividad` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `acumulativo_actividad`
--
ALTER TABLE `acumulativo_actividad`
  MODIFY `id_acumulativo_actividad` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id_administrador` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  MODIFY `id_asignatura` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  MODIFY `id_asistencia` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auditorialibros`
--
ALTER TABLE `auditorialibros`
  MODIFY `ID_AUDITORIA` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `autores`
--
ALTER TABLE `autores`
  MODIFY `id_autor` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'COD DE AUTOR LLAVE PRIMARIA';

--
-- AUTO_INCREMENT de la tabla `calendario`
--
ALTER TABLE `calendario`
  MODIFY `id_calendario` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carrera`
--
ALTER TABLE `carrera`
  MODIFY `id_carrera` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'COD DE CATEGORIA LLAVE PRIMARIA';

--
-- AUTO_INCREMENT de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  MODIFY `id_direccion` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `docente`
--
ALTER TABLE `docente`
  MODIFY `id_docente` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `editorial`
--
ALTER TABLE `editorial`
  MODIFY `id_editorial` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'COD DE EDITORIAL LLAVE PRIMARIA';

--
-- AUTO_INCREMENT de la tabla `entrega_actividad`
--
ALTER TABLE `entrega_actividad`
  MODIFY `id_entrega` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `id_estudiante` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `historial_academico`
--
ALTER TABLE `historial_academico`
  MODIFY `id_historial_academico` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `historial_de_notas`
--
ALTER TABLE `historial_de_notas`
  MODIFY `id_historial_de_notas` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id_libro` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'COD DEL LIBRO LLAVE PRIMARIA';

--
-- AUTO_INCREMENT de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  MODIFY `id_mensaje` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nota_final`
--
ALTER TABLE `nota_final`
  MODIFY `id_nota_final` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `parcial`
--
ALTER TABLE `parcial`
  MODIFY `id_parcial` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `parciales`
--
ALTER TABLE `parciales`
  MODIFY `id_parciales` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `periodo_academico`
--
ALTER TABLE `periodo_academico`
  MODIFY `id_periodo_academico` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id_persona` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `preguntas_usuario`
--
ALTER TABLE `preguntas_usuario`
  MODIFY `id_preguntas` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `rel_carrera_asignatura`
--
ALTER TABLE `rel_carrera_asignatura`
  MODIFY `id_carrera_asignatura` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rel_carrera_docente`
--
ALTER TABLE `rel_carrera_docente`
  MODIFY `id_relcarrdoc` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rel_estudiante_asignatura`
--
ALTER TABLE `rel_estudiante_asignatura`
  MODIFY `id_estudiante_asignatura` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rel_estudiante_carrera`
--
ALTER TABLE `rel_estudiante_carrera`
  MODIFY `id_estudiante_carrera` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rel_libro_autor`
--
ALTER TABLE `rel_libro_autor`
  MODIFY `id_rel_libroaut` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rel_libro_categoria`
--
ALTER TABLE `rel_libro_categoria`
  MODIFY `id_rel_libcat` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rel_libro_editorial`
--
ALTER TABLE `rel_libro_editorial`
  MODIFY `id_rel_libedit` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rel_libro_usuario`
--
ALTER TABLE `rel_libro_usuario`
  MODIFY `id_rel_librousuario` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rel_nota_final_historial_notas`
--
ALTER TABLE `rel_nota_final_historial_notas`
  MODIFY `id_nota_final_historial_de_notas` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rel_perdir`
--
ALTER TABLE `rel_perdir`
  MODIFY `id_perdir` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rel_pertel`
--
ALTER TABLE `rel_pertel`
  MODIFY `id_pertel` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `respuestas_usuario`
--
ALTER TABLE `respuestas_usuario`
  MODIFY `id_respuestas` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol_usuario` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `sala_general`
--
ALTER TABLE `sala_general`
  MODIFY `id_sala_general` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `telefonos`
--
ALTER TABLE `telefonos`
  MODIFY `id_telefono` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id_ticket` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_actividad`
--
ALTER TABLE `tipo_actividad`
  MODIFY `id_tipo_actividad` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_asistencia`
--
ALTER TABLE `tipo_asistencia`
  MODIFY `id_tipo_asistencia` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `acumulativo_actividad`
--
ALTER TABLE `acumulativo_actividad`
  ADD CONSTRAINT `acumulativo_actividad_ibfk_1` FOREIGN KEY (`id_parcial`) REFERENCES `parcial` (`id_parcial`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD CONSTRAINT `administrador_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD CONSTRAINT `asistencia_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD CONSTRAINT `estudiante_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `historial_de_notas`
--
ALTER TABLE `historial_de_notas`
  ADD CONSTRAINT `historial_de_notas_ibfk_1` FOREIGN KEY (`id_periodo_academico`) REFERENCES `periodo_academico` (`id_periodo_academico`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `nota_final`
--
ALTER TABLE `nota_final`
  ADD CONSTRAINT `nota_final_ibfk_1` FOREIGN KEY (`id_acumulativo_actividad`) REFERENCES `acumulativo_actividad` (`id_acumulativo_actividad`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nota_final_ibfk_2` FOREIGN KEY (`id_asignatura`) REFERENCES `asignatura` (`id_asignatura`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nota_final_ibfk_3` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nota_final_ibfk_4` FOREIGN KEY (`id_docente`) REFERENCES `docente` (`id_docente`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `parciales`
--
ALTER TABLE `parciales`
  ADD CONSTRAINT `parciales_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `parciales_ibfk_2` FOREIGN KEY (`id_docente`) REFERENCES `docente` (`id_docente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `parciales_ibfk_3` FOREIGN KEY (`id_actividad`) REFERENCES `actividades` (`id_actividad`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rel_carrera_asignatura`
--
ALTER TABLE `rel_carrera_asignatura`
  ADD CONSTRAINT `rel_carrera_asignatura_ibfk_1` FOREIGN KEY (`id_carrera`) REFERENCES `carrera` (`id_carrera`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rel_carrera_asignatura_ibfk_2` FOREIGN KEY (`id_asignatura`) REFERENCES `asignatura` (`id_asignatura`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rel_estudiante_asignatura`
--
ALTER TABLE `rel_estudiante_asignatura`
  ADD CONSTRAINT `rel_estudiante_asignatura_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rel_estudiante_asignatura_ibfk_2` FOREIGN KEY (`id_asignatura`) REFERENCES `asignatura` (`id_asignatura`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rel_estudiante_carrera`
--
ALTER TABLE `rel_estudiante_carrera`
  ADD CONSTRAINT `rel_estudiante_carrera_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rel_estudiante_carrera_ibfk_2` FOREIGN KEY (`id_carrera`) REFERENCES `carrera` (`id_carrera`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rel_libro_autor`
--
ALTER TABLE `rel_libro_autor`
  ADD CONSTRAINT `FK_REL_AUTOR_LIBRO` FOREIGN KEY (`id_autor`) REFERENCES `autores` (`id_autor`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_REL_LIBRO_AUTOR` FOREIGN KEY (`id_libro`) REFERENCES `libros` (`id_libro`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rel_libro_categoria`
--
ALTER TABLE `rel_libro_categoria`
  ADD CONSTRAINT `FK_REL_CATEGORIA_LIBRO` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_REL_LIBRO_CATEGORIA` FOREIGN KEY (`id_libro`) REFERENCES `libros` (`id_libro`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rel_libro_editorial`
--
ALTER TABLE `rel_libro_editorial`
  ADD CONSTRAINT `FK_REL_EDITORIAL_LIBRO` FOREIGN KEY (`id_editorial`) REFERENCES `editorial` (`id_editorial`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_REL_LIBRO_EDITORIAL` FOREIGN KEY (`id_libro`) REFERENCES `libros` (`id_libro`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rel_libro_usuario`
--
ALTER TABLE `rel_libro_usuario`
  ADD CONSTRAINT `FK_REL_LIBRO_USUARIO` FOREIGN KEY (`id_libro`) REFERENCES `libros` (`id_libro`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_REL_USUARIO_LIBRO` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rel_nota_final_historial_notas`
--
ALTER TABLE `rel_nota_final_historial_notas`
  ADD CONSTRAINT `rel_nota_final_historial_notas_ibfk_1` FOREIGN KEY (`id_historial_de_notas`) REFERENCES `historial_de_notas` (`id_historial_de_notas`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rel_nota_final_historial_notas_ibfk_2` FOREIGN KEY (`id_nota_final`) REFERENCES `nota_final` (`id_nota_final`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rel_perdir`
--
ALTER TABLE `rel_perdir`
  ADD CONSTRAINT `rel_perdir_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rel_perdir_ibfk_2` FOREIGN KEY (`id_direccion`) REFERENCES `direcciones` (`id_direccion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rel_pertel`
--
ALTER TABLE `rel_pertel`
  ADD CONSTRAINT `rel_pertel_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rel_pertel_ibfk_2` FOREIGN KEY (`id_telefono`) REFERENCES `telefonos` (`id_telefono`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `respuestas_usuario`
--
ALTER TABLE `respuestas_usuario`
  ADD CONSTRAINT `respuestas_usuario_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `respuestas_usuario_ibfk_2` FOREIGN KEY (`id_preguntas`) REFERENCES `preguntas_usuario` (`id_preguntas`);

--
-- Filtros para la tabla `sala_general`
--
ALTER TABLE `sala_general`
  ADD CONSTRAINT `sala_general_ibfk_1` FOREIGN KEY (`id_docente`) REFERENCES `docente` (`id_docente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sala_general_ibfk_2` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sala_general_ibfk_3` FOREIGN KEY (`id_asignatura`) REFERENCES `asignatura` (`id_asignatura`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`id_person1`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_2` FOREIGN KEY (`id_person2`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_3` FOREIGN KEY (`id_mensaje`) REFERENCES `mensaje` (`id_mensaje`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_4` FOREIGN KEY (`id_asignatura`) REFERENCES `asignatura` (`id_asignatura`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_5` FOREIGN KEY (`id_person1`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_6` FOREIGN KEY (`id_person2`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_7` FOREIGN KEY (`id_mensaje`) REFERENCES `mensaje` (`id_mensaje`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_ibfk_8` FOREIGN KEY (`id_asignatura`) REFERENCES `asignatura` (`id_asignatura`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`id_rol_usuario`) REFERENCES `rol` (`id_rol_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
