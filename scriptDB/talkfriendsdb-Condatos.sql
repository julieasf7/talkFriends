-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-02-2022 a las 03:26:05
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `talkfriendsdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `idcomments` int(11) NOT NULL,
  `idPost` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comments` (`idcomments`, `idPost`, `idUser`, `comment`, `date`) VALUES
(1, 1, 1, 'Comentario de mi post', '2022-02-28 02:23:22'),
(2, 1, 2, 'Usuario 2 comenta el post del usuario 1', '2022-02-28 02:24:13'),
(3, 2, 2, 'Comentario del usuario 2', '2022-02-28 02:24:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `friends`
--

CREATE TABLE `friends` (
  `idfriends` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `userFriendId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `friends`
--

INSERT INTO `friends` (`idfriends`, `userId`, `userFriendId`) VALUES
(1, 1, 2),
(2, 2, 1),
(3, 3, 1),
(4, 3, 2),
(5, 4, 2),
(6, 4, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE `post` (
  `idpost` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `idUser` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `post`
--

INSERT INTO `post` (`idpost`, `description`, `idUser`, `date`) VALUES
(1, 'Comentario 1 por el usuario 1', 1, '2022-02-28 02:22:57'),
(2, 'Primer post del usuario 2', 2, '2022-02-28 02:23:59'),
(3, 'Post usuario 4', 4, '2022-02-28 02:25:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profile`
--

CREATE TABLE `profile` (
  `idprofile` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `about` varchar(255) NOT NULL,
  `birthdayDate` varchar(100) NOT NULL,
  `live` varchar(255) NOT NULL,
  `web` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `profile`
--

INSERT INTO `profile` (`idprofile`, `userId`, `about`, `birthdayDate`, `live`, `web`) VALUES
(1, 1, 'Me gusta la musica y los videojuegos', '2022-02-02', 'Colombia', 'www.usuario1.com'),
(2, 2, 'Me gusta la musica', '2022-02-05', 'Canada', 'www.usuario2.com'),
(3, 3, 'Me gusta leer', '2022-02-18', 'Mexico', 'www.usuario3.com'),
(4, 4, 'Me gustan los videojuegos', '2022-02-04', 'Chile', 'www.usuario4.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`userId`, `fullName`, `email`, `password`) VALUES
(1, 'Usuario 1', 'usuario1@test.com', '$2b$10$GeKUbYmfwuu3m4ybvUTJOuuOUNgKiJ3FCNCTGIHwovrRL9Ms5klUi'),
(2, 'Usuario 2', 'usuario2@test.com', '$2b$10$DDTsDSS7.HD3m2w2RxyS4uGq1peej0rCNHT8VPFs7VF0odGgwJjwS'),
(3, 'Usuario 3', 'usuario3@test.com', '$2b$10$753bDk7v/PTacz..6r0qi.ANeeo8nsceescmBgiHtlHFQP7Iowctu'),
(4, 'Usuario 4', 'usuario4@test.com', '$2b$10$kW/IAgdJKkPMocpciVP9mOauAn0fDTPmOC1ouC2EYcxW9OgGcJ1ie');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`idcomments`);

--
-- Indices de la tabla `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`idfriends`);

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`idpost`);

--
-- Indices de la tabla `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`idprofile`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `idcomments` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `friends`
--
ALTER TABLE `friends`
  MODIFY `idfriends` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `idpost` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `profile`
--
ALTER TABLE `profile`
  MODIFY `idprofile` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
