-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-04-2021 a las 23:55:05
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `encoders`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_preguntas` (IN `preg1` ENUM('1 ¿Cómo se llama tú mascota favorita?','2 ¿Cuál es tú apodo?'), IN `preg2` ENUM('1 ¿Cómo se llama tú mascota favorita?','2 ¿Cuál es tú apodo?'), IN `usr` VARCHAR(30))  NO SQL
BEGIN
START TRANSACTION;
  select @id_u := Max(id_usuario) from usuarios;
  INSERT INTO preguntas_usuario (id_usuario, pregunta_1,	pregunta_2,	usr_registro)
  VALUES
  (@id_u,
  preg1, preg2, usr);
  COMMIT;
  END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_preguntas_respuestas` (IN `preg1` ENUM('1 ¿Cómo se llama tú mascota favorita?','2 ¿Cuál es tú apodo?'), IN `preg2` ENUM('1 ¿Cómo se llama tú mascota favorita?','2 ¿Cuál es tú apodo?'), IN `usr` VARCHAR(30), IN `resp1` VARCHAR(255), IN `resp2` VARCHAR(255))  NO SQL
BEGIN
START TRANSACTION;
  select @id_u := Max(id_usuario) from usuarios;
  INSERT INTO preguntas_usuario (id_usuario, pregunta_1,	pregunta_2,	usr_registro)
  VALUES
  (@id_u,
  preg1, preg2, usr);
   select @id_pre :=MAX(id_preguntas) from preguntas_usuario;
  INSERT INTO respuestas_usuario (id_preguntas, Respuesta_1,	Respuesta_2,	usr_registro)
  VALUES
  (@id_pre,
  resp1, resp2, usr);
  COMMIT;
  END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_respuestas` (IN `resp1` VARCHAR(255), IN `resp2` VARCHAR(255), IN `usr` VARCHAR(30))  NO SQL
BEGIN
START TRANSACTION;
  select @id_pre :=MAX(id_preguntas) from preguntas_usuario;
  INSERT INTO respuestas_usuario (id_preguntas, Respuesta_1,	Respuesta_2,	usr_registro)
  VALUES
  (@id_pre,
  resp1, resp2, usr);
  COMMIT;
  END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Select_login` ()  NO SQL
BEGIN
start TRANSACTION;
SELECT u. correo, u. password, r. descripcion_rol
from usuarios u
inner join rol r on r.id_rol= u.id_rol;
COMMIT;
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `select_preguntas` (IN `id_u` INT)  NO SQL
BEGIN
start TRANSACTION;
SELECT pregunta_1, pregunta_2 from preguntas_usuario where id_u= id_usuario;
COMMIT;
End$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `select_preguntas_respuestas` (IN `id_u` INT)  NO SQL
BEGIN
start TRANSACTION;
SELECT p.pregunta_1, p.pregunta_2, r.Respuesta_1, r.Respuesta_2 from preguntas_usuario p 
inner join respuestas_usuario r on p.id_preguntas=r.id_preguntas where id_u=id_usuario;
COMMIT;
End$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `select_respuestas` (IN `id_preg` INT)  NO SQL
BEGIN
start TRANSACTION;
SELECT Respuesta_1, Respuesta_2 from respuestas_usuario where id_preg= id_preguntas;
COMMIT;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Update_password` (INOUT `pass` VARCHAR(20), INOUT `id_usr` INT(11))  NO SQL
BEGIN
START TRANSACTION; 
UPDATE usuarios u
SET u.password=pass, u.token_password=token where u.id_usuario=id_usr;
COMMIT;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendario`
--

CREATE TABLE `calendario` (
  `id_calendario` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_estudiante` int(11) NOT NULL,
  `id_docente` int(11) NOT NULL,
  `desc_calendario` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas_usuario`
--

CREATE TABLE `preguntas_usuario` (
  `id_preguntas` int(11) NOT NULL,
  `pregunta_1` varchar(255) NOT NULL,
  `pregunta_2` varchar(255) NOT NULL,
  `usr_registro` varchar(30) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `preguntas_usuario`
--

INSERT INTO `preguntas_usuario` (`id_preguntas`, `pregunta_1`, `pregunta_2`, `usr_registro`, `fecha_registro`) VALUES
(4, '1 ¿Cómo se llama tú mascota favorita?', '2 ¿Cuál es tú apodo?', 'CrisJR97', '2021-04-08 05:08:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas_usuario`
--

CREATE TABLE `respuestas_usuario` (
  `id_respuestas` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_preguntas` int(11) NOT NULL,
  `respuesta_1` varchar(255) NOT NULL,
  `respuesta_2` varchar(255) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `respuestas_usuario`
--

INSERT INTO `respuestas_usuario` (`id_respuestas`, `id_usuario`, `id_preguntas`, `respuesta_1`, `respuesta_2`, `fecha_registro`) VALUES
(1, 11, 4, 'hola', 'tenerife', '2021-04-08 05:08:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `descripcion_rol` varchar(255) NOT NULL,
  `condicion` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `descripcion_rol`, `condicion`) VALUES
(1, 'Administrador', 1),
(2, 'Estudiante', 1),
(3, 'Docente', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `user` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `token_password` varchar(255) DEFAULT NULL,
  `token_preguntas` varchar(255) DEFAULT NULL,
  `indicador_usuario` enum('activo','inactivo') NOT NULL,
  `usr_registro` varchar(30) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `id_rol`, `user`, `password`, `correo`, `token_password`, `token_preguntas`, `indicador_usuario`, `usr_registro`, `fecha_registro`) VALUES
(11, 1, 'Joe', '$2a$10$6.VbuWF9t0NKL4s6z9O5oOm4LBjy9Nbapl8tJkVclhL8I0k2Tu1eG', 'jo2@gmail.com', NULL, NULL, 'activo', 'admin', '2021-04-08 05:06:52'),
(12, 1, 'Jeral', '$2a$10$viX0b1U6l23j75muR6cv7.kwkTqxY1lLDVfHFElUkHOomt6VYhP9.', 'jc@gmail.com', NULL, NULL, 'activo', 'admin', '2021-04-08 05:06:52');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `calendario`
--
ALTER TABLE `calendario`
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_estudiante` (`id_estudiante`),
  ADD KEY `id_docente` (`id_docente`);

--
-- Indices de la tabla `preguntas_usuario`
--
ALTER TABLE `preguntas_usuario`
  ADD PRIMARY KEY (`id_preguntas`);

--
-- Indices de la tabla `respuestas_usuario`
--
ALTER TABLE `respuestas_usuario`
  ADD PRIMARY KEY (`id_respuestas`),
  ADD KEY `id_preguntas` (`id_preguntas`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `preguntas_usuario`
--
ALTER TABLE `preguntas_usuario`
  MODIFY `id_preguntas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `respuestas_usuario`
--
ALTER TABLE `respuestas_usuario`
  MODIFY `id_respuestas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `respuestas_usuario`
--
ALTER TABLE `respuestas_usuario`
  ADD CONSTRAINT `respuestas_usuario_ibfk_1` FOREIGN KEY (`id_preguntas`) REFERENCES `preguntas_usuario` (`id_preguntas`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `respuestas_usuario_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
