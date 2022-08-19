-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-08-2022 a las 18:03:31
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gestion_usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `title`, `createdAt`, `updatedAt`) VALUES
(1, 'Logic', '2022-08-19 05:03:22', '2022-08-19 05:03:22'),
(2, 'css', '2022-08-19 05:03:27', '2022-08-19 05:03:27'),
(3, 'html', '2022-08-19 05:03:32', '2022-08-19 05:03:32'),
(4, 'Json', '2022-08-19 05:33:37', '2022-08-19 05:33:37'),
(5, NULL, '2022-08-19 06:38:24', '2022-08-19 06:38:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profiles`
--

CREATE TABLE `profiles` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `direction` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `profiles`
--

INSERT INTO `profiles` (`id`, `first_name`, `last_name`, `direction`, `phone`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, 'Fernando', 'Sapene', 'El paraiso', '04120948650', '2022-08-19 04:46:06', '2022-08-19 04:46:06', NULL),
(2, 'Fernando', 'Sapene', 'El paraiso', NULL, '2022-08-19 04:48:53', '2022-08-19 04:48:53', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question` varchar(255) DEFAULT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoriaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `questions`
--

INSERT INTO `questions` (`id`, `question`, `answer`, `createdAt`, `updatedAt`, `categoriaId`) VALUES
(1, 'Que es fotosintesis', 'Respiracion celular de las plantas', '2022-08-19 05:03:54', '2022-08-19 05:03:54', 1),
(2, 'Que es fotosintesis', 'Respiracion celular de las plantas', '2022-08-19 05:03:57', '2022-08-19 05:03:57', 3),
(3, 'Que es fotosintesis', 'Respiracion celular de las plantas', '2022-08-19 05:03:58', '2022-08-19 05:03:58', 3),
(4, 'Que es fotosintesis', 'Respiracion celular de las plantas', '2022-08-19 05:03:59', '2022-08-19 05:03:59', 3),
(5, 'Que es fotosintesis', 'Respiracion celular de las plantas', '2022-08-19 05:04:00', '2022-08-19 05:04:00', 2),
(6, 'Que es un Json', 'Archivo de lectura', '2022-08-19 05:34:13', '2022-08-19 05:34:13', 4),
(7, 'porque Json', 'Es cool', '2022-08-19 05:34:28', '2022-08-19 05:34:28', 4),
(8, 'para que Json', 'Para consumir datos', '2022-08-19 05:34:42', '2022-08-19 05:34:42', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'user', '2022-08-19 06:37:37', '2022-08-19 06:37:37'),
(2, 'moderator', '2022-08-19 06:37:37', '2022-08-19 06:37:37'),
(3, 'admin', '2022-08-19 06:37:56', '2022-08-19 06:37:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'ferdx', 'fdxcode@gmail.com', '$2a$08$s1Z4LP7nrpwjAWQ7rFFMgeHe/A94VMuOM9FJnSDj9j503Ot5A.8EC', '2022-08-19 04:38:31', '2022-08-19 04:38:31'),
(2, 'Armando', 'armandito@gmail.com', '$2a$08$pZV1r/YxOlOOIC37.Sa5peln8eGYOtYcYD68lrlCQi2cAfig3JlnG', '2022-08-19 05:48:15', '2022-08-19 05:48:15'),
(3, 'Andres', 'andres@gmail.com', '$2a$08$ljsaF9IFQ.gw0E6uc9HwTOmfxuZ8tkYuTPsz3QTkOAds9.GQ9zqZ2', '2022-08-19 06:12:49', '2022-08-19 06:12:49'),
(4, 'luisa', 'luisa@gmail.com', '$2a$08$fT0X0q//9YvGtII/E5.igO4tTa7S7IG/rjnK1XZ7FDeWc9wqYnb5q', '2022-08-19 06:36:24', '2022-08-19 06:36:24'),
(5, 'asdfefwe', 'fwefew@gmail.com', '$2a$08$/E5jcxQaXV4hjStnuX4pyOPz10ngiBVonbbM/q3GeHr7/iDEuBw4q', '2022-08-19 15:15:22', '2022-08-19 15:15:22'),
(6, 'Augustoo', 'fernando@gmail.com', '$2a$08$4Ic7rNrYZwxGAxEuEgKu/u9AXOqLRuc3SVCffZ4ScUVxGtXPg6IxK', '2022-08-19 15:19:49', '2022-08-19 15:19:49'),
(7, 'armiusa', 'armiusa@gmail.com', '$2a$08$z40lazvGEBgf2siCBmogKen.KPFbZ.1XeQXOIbeQ1i6bKAOU744y6', '2022-08-19 15:20:41', '2022-08-19 15:20:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_roles`
--

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_roles`
--

INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('2022-08-19 05:48:15', '2022-08-19 05:48:15', 1, 2),
('2022-08-19 06:12:49', '2022-08-19 06:12:49', 1, 3),
('2022-08-19 06:36:24', '2022-08-19 06:36:24', 1, 4),
('2022-08-19 15:15:22', '2022-08-19 15:15:22', 1, 5),
('2022-08-19 15:19:49', '2022-08-19 15:19:49', 1, 6),
('2022-08-19 15:20:41', '2022-08-19 15:20:41', 1, 7),
('2022-08-19 04:38:31', '2022-08-19 04:38:31', 3, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoriaId` (`categoriaId`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`roleId`,`userId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `profiles_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`categoriaId`) REFERENCES `categorias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
