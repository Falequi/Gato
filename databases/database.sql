/* Primerros Crear la Base de datos
/* con ese comando y ese nombre */ 
CREATE DATABASE gatoacces;


/* Despues ejecutar todo este codigo para las tablas, 
/* los procedimientos y demas*/

DELIMITER $$
--
-- Procedimientos
--
CREATE  PROCEDURE `listarusuarios` (IN `vid` INT(11))  BEGIN
   select 	u.id,
   			u.primernombre, 
    		u.segundonombre, 
    		u.primerapellido, 
    		u.segundoapellido, 
    		u.numerodocumento,
    		u.edad,
    		u.direccion, 
    		u.telefono,
    		u.genero,
     		u.correo,
    		u.usuario,
    		u.contrasena, 
    		u.idrol,
            r.nombre as rol_nombre
   from usuarios as u
   inner join rol as r on u.idrol = r.id
   ORDER by u.id;
END$$

CREATE  PROCEDURE `login` (IN `vusuario` VARCHAR(40), IN `vcontrasena` VARCHAR(255))  BEGIN
   select 	u.id,
   			u.primernombre, 
    		u.segundonombre, 
    		u.primerapellido, 
    		u.segundoapellido, 
    		u.numerodocumento,
    		u.edad,
    		u.direccion, 
    		u.telefono,
    		u.genero,
     		u.correo,
    		u.usuario,
    		u.contrasena, 
    		u.idrol,
            r.nombre as rol_nombre
   from usuarios as u
   inner join rol as r on u.idrol = r.id
   where contrasena=vcontrasena and usuario=vusuario;		
END$$

--
-- Funciones
--
CREATE  FUNCTION `guardarUsuario` (`vid` INT, `vprimernombre` VARCHAR(50), `vsegundonombre` VARCHAR(50), `vprimerapellido` VARCHAR(50), `vsegundoapellido` VARCHAR(50), `vnumerodocumento` VARCHAR(30), `vedad` VARCHAR(2), `vdireccion` VARCHAR(100), `vtelefono` VARCHAR(20), `vgenero` VARCHAR(10), `vcorreo` VARCHAR(20), `vusuario` VARCHAR(40), `vcontrasena` VARCHAR(255), `vidrol` INT(11)) RETURNS INT(1) READS SQL DATA
    DETERMINISTIC
    COMMENT 'Funcion que almacena un usuario'
BEGIN 
    DECLARE res INT DEFAULT 0;
    
IF NOT EXISTS(select usuario from usuarios where usuario=vusuario)
		THEN
			insert into usuarios(
    primernombre, 
    segundonombre, 
    primerapellido, 
    segundoapellido, 
    numerodocumento,
    edad,
    direccion, 
    telefono,
    genero,
    correo,
    usuario,
    contrasena, 
    idrol)
			VALUES ( 
                          vprimernombre, 
                          vsegundonombre, 
                          vprimerapellido, 
                          vsegundoapellido, 

                          vnumerodocumento, 
                          vedad, 
                          vdireccion,                 
                          vtelefono, 

                          vgenero, 
                          vcorreo, 
                          vusuario, 
                          vcontrasena,
                          vidrol);
			set res = 1;
		END IF;

RETURN res;
	
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `nombre`) VALUES
(1, 'Super Usuario'),
(2, 'Usuario'),
(3, 'Invitado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `primernombre` varchar(50) DEFAULT NULL,
  `segundonombre` varchar(50) DEFAULT NULL,
  `primerapellido` varchar(50) DEFAULT NULL,
  `segundoapellido` varchar(50) DEFAULT NULL,
  `numerodocumento` varchar(30) DEFAULT NULL,
  `edad` varchar(2) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `genero` varchar(10) DEFAULT NULL,
  `correo` varchar(20) DEFAULT NULL,
  `usuario` varchar(40) DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `idrol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `primernombre`, `segundonombre`, `primerapellido`, `segundoapellido`, `numerodocumento`, `edad`, `direccion`, `telefono`, `genero`, `correo`, `usuario`, `contrasena`, `idrol`) VALUES
(9, 'Fabio', 'Alejandro', 'Quintero', 'Hincapie', '4375857', '38', 'calle 22Norte #19-68 Manzana C Casa 11a Conjunto Los Andes', '3188216823', 'masculino', 'fabio@gmail.com', 'Falequi82', '25d55ad283aa400af464c76d713c07ad', 1),
(34, 'Johana', 'Gloria', 'Mahecha', 'Varela', '52935967', '37', 'calle 22Norte #19-68 Manzana C Casa 11a Conjunto Los Andes', '3188216823', 'masculino', 'johanamv2012@gmail.c', 'Johanamv2012', '856ec5b6d1dfa73b4891c036a7106797', 3),
(41, 'Sandra', 'Milena', 'Hurtado', 'Jaramillo', '132654987', '32', 'Los Andes Mz C Cs 11a', '32165487', 'masculino', 'fabisaasao@gmail.com', 'Bebe351', '25d55ad283aa400af464c76d713c07ad', 3),
(42, 'Fabio', 'notiene', 'Quintero', 'Valederrama', '18987456', '65', 'Los Andes Mz C Cs 11a', '3106589876', 'masculino', 'faquival16@gmail.com', 'faquival16', '25d55ad283aa400af464c76d713c07ad', 3),
(43, 'Mamria', 'Rosaura', 'Hincapie', 'Cuesta', '45698712', '61', 'cannaan cs 12', '3104590265', 'femenino', 'rosaura@miune.net', 'MariRosa', '25d55ad283aa400af464c76d713c07ad', 3),
(44, 'Maria', 'Teresa', 'Cuesta', 'Hicapie', '65498712', '65', 'La Macana', '65498745', 'femenino', 'teresita@gmail.com', 'TeresitalaBonita', '25d55ad283aa400af464c76d713c07ad', 3),
(45, 'Maria', 'Angelica', 'Giraldo', 'Hincapie', '526498723', '26', 'Caminos de Canaan Cs12', '3166549879', 'masculino', 'mariagiraldo@gmail.c', 'Maria1614', '25d55ad283aa400af464c76d713c07ad', 3),
(46, 'Sara', 'Maria', 'Quintero', 'Hincapie', '526547898', '20', 'cr 16 # 10n - 30', '3214569878', 'femenino', 'sari@gmail.com', 'SariQUintero', '25d55ad283aa400af464c76d713c07ad', 3),
(47, 'Claudia', 'Jimena', 'Quintero', 'Hincapie', '52654789', '45', 'cr 19 #10n-90', '31065498745', 'femenino', 'claujimeq@gmail.com', 'Clujimeq', '25d55ad283aa400af464c76d713c07ad', 3),
(48, 'Carlo', 'Humber', 'Mahecha', 'Bergoño', '48698745', '68', 'Barcelona Quindio', '3569874532', 'masculino', 'humbertico@hotmail.c', 'humberto', '25d55ad283aa400af464c76d713c07ad', 3),
(49, 'Gloria', 'Patricia', 'Varela', 'Gonzales', '52654321', '58', 'Barcelna Quindio', '654789654', 'femenino', 'gloria@hotmail.com', 'GloriaPatricia', '25d55ad283aa400af464c76d713c07ad', 3),
(50, 'David', 'Alberto', 'Angarita', 'Garcia', '52689786', '65', 'La pradera cs 4', '3169874565', 'masculino', 'dangar@hotmail.com', 'Dagaqui30', '25d55ad283aa400af464c76d713c07ad', 3),
(51, 'Julia', 'Dario', 'Velez', 'Guitierrez', '52654987', '37', 'el yulima eta 1', '3216549898', 'masculino', 'julianvelez@gmail.co', 'JulianVelez', '25d55ad283aa400af464c76d713c07ad', 3),
(52, 'Deysi', 'Maria', 'Gonzales', 'Mejia', '1236549878', '36', 'yulima et 1', '3216549878', 'femenino', 'deysi@gmail.com', 'DeysiGonza', '25d55ad283aa400af464c76d713c07ad', 3),
(53, 'Camilo', 'Andres', 'Guitierrez', 'Mejia', '12346578', '37', 'El coliseo del Cafe', '3106549878', 'masculino', 'camiloguiti@gmail.co', 'Camilin12', '25d55ad283aa400af464c76d713c07ad', 3),
(54, 'Lorena', 'Patricia', 'luna', 'londoño', '12345698', '36', 'el coliseo', '3216549873', 'femenino', 'lorenaen@gmail.com', 'Lorenaenma', '25d55ad283aa400af464c76d713c07ad', 3),
(55, 'Diana', 'Carolina', 'Bernal', 'Herrera', '32165498', '34', 'Irlanda del Norte', '573169876512', 'femenino', 'dianabernal@gmail.co', 'negriaDianis', '25d55ad283aa400af464c76d713c07ad', 3),
(56, 'Razban', 'Mali', 'sulk', 'esneider', '312654987', '35', 'irlanda del norte', '586549872', 'masculino', 'raz@gmail.com', 'RazbanMali', '25d55ad283aa400af464c76d713c07ad', 3),
(57, 'Bernardo', 'Lucso', 'Patiño', 'Mejia', '326459874', '60', 'los abedules cs12', '3249876545', 'masculino', 'bernardoruiz@gmail.c', 'BernardoT', '25d55ad283aa400af464c76d713c07ad', 3),
(58, 'Lilina', 'Julia', 'Ruiz', 'Patiño', '8598745632', '62', 'los almendros cs 23', '3106549878', 'femenino', 'lilipatino@gmail.com', 'Liliadmin', '25d55ad283aa400af464c76d713c07ad', 3),
(59, 'felipe', 'andres', 'ruiz', 'patiño', '65987654', '30', 'bogota', '3106549878', 'masculino', 'feliperuiz@gmail.com', 'FelipeRuiz', '25d55ad283aa400af464c76d713c07ad', 3),
(60, 'camilo', 'andres', 'gutierrez', 'pedraza', '321654987', '18', 'Los Andes Mz C Cs 11a', '13216547', 'masculino', 'camiloooo@gmail.com', 'camilooo', '25d55ad283aa400af464c76d713c07ad', 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_rol` (`idrol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_rol` FOREIGN KEY (`idrol`) REFERENCES `rol` (`id`);
COMMIT;

