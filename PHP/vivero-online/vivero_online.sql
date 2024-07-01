-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2023 a las 18:27:17
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vivero_online`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(80) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `foto` varchar(100) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `categoria_id` int(10) NOT NULL,
  `fecha` date NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id`, `titulo`, `descripcion`, `foto`, `precio`, `categoria_id`, `fecha`, `estado`) VALUES
(34, 'Maceta de terracota', 'esta fabricada a mano en terracota esmaltada. Posee agujero para el drenaje del exceso de agua. Resistente al hielo. Medidas : 23 x 20,5 cm. (diametro x altura). Acabado artesanal. \r\nLas medidas y color de la foto son aproximadas y susceptibles de variación. Entrega a pie vehículo.', 'Maceta de terracota.png', 20, 4, '2023-11-29', 1),
(35, 'Maceta Red Clemente', 'Maceta de forma redonda modelo Clemente, fabricada en material cerámico de color cobre. Ideal para usar en interior, cuenta con tratamiento anti-rayos UV. Es resistente a las \r\nheladas', 'maceta red clemente.png', 10, 4, '2023-11-29', 1),
(36, 'Maceta de cerámica', 'Maceta circular de barro en color gris. Recomendada para exterior gracias a su resistencia ante la acción del sol y al hielo. Incorpora agujero para el drenaje. Medidas: 36 x 32,9 cm \r\n(diámetro x alto).', 'Maceta de cerámica.png', 19, 4, '2023-11-29', 1),
(37, 'Maceta de fibra natural', 'Maceta de fibras naturales con un acabado en marrón oscuro. Perfecto para dar un aspecto natural a cualquier espacio, con aire rústico y moderno a la vez. Medidas: 23 x 18 cm \r\n(diámetro x alto).', 'maceta fibra natural.png', 8, 4, '2023-11-29', 1),
(38, 'Jardinera con reserva agua', 'Kit de jardinera fabricada en polipropileno con acabado en color gris antracita. Recomendada para uso exterior, gracias a que cuenta con protección ante los rayos \r\nultravioleta. Podrás colgar la jardinera de cualquier barandilla de tu balcón o terraza gracias a su práctico soporte.', 'Kit jardinería reserva de agua.png', 11, 4, '2023-11-29', 1),
(39, 'Abono en polvo', 'Abono en polvo para huerto y jardín Vithal Garden, compuesto por hongos formadores de micorrizas que establecen una relación de beneficio mutuo con las raíces de las plantas (simbiosis),\r\n aportando una mejor nutrición, mejora de la tolerancia a falta de agua y un crecimiento equilibrado.', 'Abono en polvo.png', 3, 3, '2023-11-29', 1),
(40, 'Abono ecológico cítricos', 'Abono ecológico completo para responder a las necesidades nutritivas de todo tipo de cítricos. Frutos mas sabrosos y con mas olor. Es inoloro y su elevado % de materia orgánica\r\n contribuye a mantener la humedad. Mejora la fotosíntesis por su contenido en Magnesio. Con acción inhibidora de enfermeda', 'Abono ecológico cítricos.png', 6, 3, '2023-11-29', 1),
(41, 'Fertilizante Gotero', 'Gotero con producto fertilizante orgánico para plantas con flor ideal para mejorar y enriquecer la tierra en macetas, jardineras e incluso en el huerto. Tiene acción inmediata ya que \r\nse vende listo para usar y es de larga duración, especialmente si se aplica de primavera a otoño.', 'fertilizante gotero.png', 2, 3, '2023-11-29', 1),
(42, 'Fertilizante universal', ' Fertilizante líquido universal Compo para todo tipo de plantas ornamentales tanto de interior como de terraza, verdes o de flor. De liberación rápida, aporta los nutrientes que las \r\nplantas necesitan para crecer de forma vigorosa.', 'Sustrato universal.png', 7, 2, '2023-11-29', 1),
(43, 'Humus de lombriz', ' Humus de lombriz indicado para funcionar como compostaje de todo tipo de plantas con y sin flor aportando la mayor calidad y garantía. Su formulación es apta para la enmienda orgánica o \r\nla agricultura ecológica y proporciona una máximo rendimiento.', 'Humus de lombriz.png', 14, 2, '2023-11-29', 1),
(44, 'Turba rubia', 'Turba rubia 100 % natural, seleccionada y procedente de la descomposición parcial anaeróbica de acumulaciones de Sphagnum de calibre medio. Posee una gran capacidad de retención de agua y\r\n aireación, y está especialmente diseñada tanto para complementar los sustratos de huertos y jardines', 'Turba rubia.png', 4, 2, '2023-11-29', 1),
(45, 'Mantillo natural', 'Sustrato obtenido mediante compostaje controlado de residuos orgánicos, seleccionado en dosis adecuadas, fermentado durante año y finalmente cribado. Está especialmente recomendado para \r\ncésped y praderas, parterres, hortalizas y cubre siembras. Contenido: 50 litros', 'Mantillo natural.png', 5, 2, '2023-11-29', 1),
(46, 'Sustrato COMPO', 'Sustrato universal esponjoso Compo Sana de gran calidad idóneo para plantas de interior y exterior, verdes y con flor. El sustrato compuesto por mezcla de turba, perlita y \r\nagrosil mantiene todas las características garantizando el perfecto crecimiento de las plantas y potenciando la raíz.', 'Sustrato universal COMPO SANA.png', 12, 2, '2023-11-29', 1),
(47, 'Loropetalum Ever Red', 'El colorido Loropetalumis es originario de China, donde crece en las laderas de las montañas. Este hermoso arbusto ornamental florece de febrero a abril. Por eso es la planta \r\nideal para alegrar su gris jardín durante el invierno. Las brillantes flores rojas contrastan maravillosamente con las hoja', 'Loropetalum Ever Red.png', 53, 1, '2023-11-29', 1),
(48, 'Plant in a Box', 'La hidroponía es una de las últimas tendencias en plantación. La hidroponía es un método de cultivo sin tierra, en el que las plantas reciben todos sus nutrientes esenciales a \r\ntravés de una solución acuosa rica en nutrientes.', 'Plant in a Box.png', 35, 1, '2023-11-29', 1),
(49, 'Acer palmatum', 'El hermoso Acer Beni Maiko tiene un hábito de crecimiento esférico con hojas profundamente incisas. El arce se colorea a lo largo del año, en primavera las hojas \r\nson de color rojo fuego a rojo-rosado, hacia el verano las hojas se tiñen de azul-verde con venas rojas', 'Acer palmatum \'Beni Maiko\'.png', 40, 1, '2023-11-29', 1),
(50, 'Geranio Citronella', 'Este geranio se caracteriza por su fragancia a limón y es conocido por su capacidad para repeler los mosquitos y otros insectos, convirtiéndolo en una opción ideal\r\n para aquellos que buscan una planta de interior que sea decorativa y funcional al mismo tiempo.', 'Pack de dos Geranio Citronella.png', 26, 1, '2023-11-29', 1),
(51, 'Iresine Herbstii', 'Con la Iserine Herbstii, ¡añade una planta muy especial a su colección de plantas! La Iresine Herbstii también es conocida como la planta \\\"Hoja de sangre\\\" o \\\"Bistec\\\".\r\n La planta es originaria de Brasil y debe sus singulares apodos a sus hojas, que según algunos se asemejan a filetes.', 'Iresine Herbstii \'Red\'.png', 28, 1, '2023-11-29', 1),
(52, 'Limón 4 estaciones', 'LIMONERO Planta vigorosa de follaje persistente, flores perfumadas desde mayo y frutos de pulpa jugosa y olorosa. El limonero se puede cultivar en macetas grandes o. procurando\r\n protegerlo de los rigores del invierno, se puede plantar directamente en la tierra. Prefiere zonas soleadas.', 'Limón 4 estaciones.png', 48, 1, '2023-11-29', 1),
(53, 'Cyca revoluta', 'La Cyca Revoluta es una palmácea bulbifera, es muy fácil de cuidar, solo hay que tener cuidado de no encharcar para que no le salga cochinilla en las palma', 'PALMERA NATURAL CYCA REVOLUTA.png', 34, 1, '2023-11-29', 1),
(54, 'Arbustos de lavanda', 'Con su forma compacta y sus flores de color morado oscuro, la Lavandula angustifolia es una de las variedades de lavanda más conocidas. La lavanda es una planta perenne, \r\nmaravillosamente aromática, procedente de la región mediterránea. Ya en el siglo XVII', 'Arbustos de lavanda set de 6.png', 38, 1, '2023-11-29', 1),
(55, 'Mini Cactus 6 Piezas', 'Los cactus son muy populares en los salones de todo el mundo y se conocen sobre todo como plantas fáciles que requieren poca atención. Sin embargo, tenga cuidado con \r\nlas espinas, pueden ser muy afiladas. La familia de los cactus es una extensa familia con muchas especies diferentes', 'Mezcla de Mini Cactus 6 Piezas.png', 26, 1, '2023-11-29', 1),
(56, 'Ficus Elastica Tineke', 'La planta de caucho, en latín Ficus Elastica Tineke, es una planta purificadora de aire fuerte que puede soportar muchas condiciones. Por ejemplo, el Ficus puede vivir bien en \r\nsemisombra a sombra, la planta necesita poca agua y es bien resistente a los insectos.', 'Ficus Elastica Tineke.png', 65, 1, '2023-11-29', 1),
(57, 'Monstera Deliciosa', 'La popular Monstera Deliciosa también recibe el nombre de planta del queso suizo por sus hojas especiales. La planta tiene agujeros en sus hojas. Cuanto más grande sea la planta, \r\nmás agujeros tendrán las hojas. La Monstera es actualmente una de las plantas de interior más populares', 'Monstera Deliciosa.png', 39, 1, '2023-11-29', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(10) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Planta'),
(2, 'Sustrato'),
(3, 'Abono'),
(4, 'Maceteria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(10) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `comentario` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `apellidos`, `email`, `telefono`, `comentario`) VALUES
(2, 'carlos', 'asfsaf', 'jferegea@gmail.com', '666666667', 'fzsdgvxdbxd'),
(3, 'dfbdf', 'dfgdf', 'dfg@gmail.com', '666666666', 'sdvdsv'),
(4, '1', '11', 'dfg@gmail.com', '666666666', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedidos`
--

CREATE TABLE `detalle_pedidos` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `articulo_id` int(11) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `detalle_pedidos`
--

INSERT INTO `detalle_pedidos` (`id`, `pedido_id`, `articulo_id`, `precio`, `cantidad`, `estado`) VALUES
(1, 2, 6, 1, 3, 1),
(2, 2, 4, 1, 3, 1),
(3, 2, 2, 32, 10, 1),
(4, 2, 1, 10, 1, 1),
(5, 3, 6, 1, 1, 1),
(6, 4, 32, 20, 1, 1),
(7, 4, 31, 10, 1, 1),
(8, 4, 29, 19, 1, 1),
(9, 4, 28, 8, 1, 1),
(10, 4, 27, 11, 1, 1),
(11, 4, 26, 3, 1, 1),
(12, 4, 25, 6, 1, 1),
(13, 4, 24, 2, 1, 1),
(14, 4, 23, 7, 1, 1),
(15, 4, 22, 14, 1, 1),
(16, 4, 21, 4, 1, 1),
(17, 4, 20, 5, 1, 1),
(18, 4, 19, 12, 1, 1),
(19, 4, 18, 5, 1, 1),
(20, 4, 17, 53, 1, 1),
(21, 4, 16, 35, 1, 1),
(22, 4, 15, 40, 1, 1),
(23, 4, 14, 26, 1, 1),
(24, 4, 13, 28, 1, 1),
(25, 4, 12, 48, 1, 1),
(26, 4, 11, 34, 1, 1),
(27, 4, 10, 38, 1, 1),
(28, 4, 9, 26, 1, 1),
(29, 4, 8, 65, 1, 1),
(30, 4, 7, 39, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(10) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `total` decimal(10,0) NOT NULL,
  `fecha` date NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `cliente_id`, `total`, `fecha`, `estado`) VALUES
(4, 4, 558, '2023-11-29', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre_usuario` varchar(100) NOT NULL,
  `clave` varchar(150) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre_usuario`, `clave`, `estado`) VALUES
(1, 'prueba', 'prueba', 1),
(2, 'admin', 'admin', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_pedidos`
--
ALTER TABLE `detalle_pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `detalle_pedidos`
--
ALTER TABLE `detalle_pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
