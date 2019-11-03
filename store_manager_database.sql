-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2019 at 01:39 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `store_manager_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `item_name` int(11) NOT NULL,
  `item_brand` varchar(255) NOT NULL,
  `item_actual_price` int(11) NOT NULL,
  `item_sell_price` int(11) NOT NULL,
  `item_variant` varchar(255) NOT NULL,
  `item_store` varchar(255) NOT NULL,
  `item_status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1 means unsold, 2 means sold'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `item_name`, `item_brand`, `item_actual_price`, `item_sell_price`, `item_variant`, `item_store`, `item_status`) VALUES
(1000, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1001, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1002, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1003, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1004, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1005, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1006, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1007, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1008, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1009, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1010, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1011, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1012, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1013, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1014, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1015, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1016, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1017, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1018, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1019, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1020, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1021, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1022, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1023, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1024, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1025, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1026, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1027, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1028, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1029, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1030, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1031, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1032, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1033, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1034, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1035, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1036, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1037, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1038, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1039, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1040, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1041, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1042, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1043, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1044, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1045, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1046, 1, 'winner club', 250, 500, '1', '1', 1),
(1047, 1, 'winner club', 250, 500, '1', '1', 1),
(1048, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1049, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1050, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1051, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1052, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1053, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1054, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1055, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1056, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1057, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1058, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1059, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1060, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1061, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1062, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1063, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1064, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1065, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1066, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1067, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1068, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1069, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1070, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1071, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1072, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1073, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1074, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1075, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1076, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1077, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1078, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1079, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1080, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1081, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1082, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1083, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1084, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1085, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1086, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1087, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1088, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1089, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1090, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1091, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1092, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1093, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1094, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1095, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1096, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1097, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1098, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1099, 1, 'Denim Smart', 250, 500, '1', '1', 1),
(1100, 1, 'Touchh', 300, 500, '3', '1', 1),
(1101, 1, 'Touchh', 300, 500, '2', '1', 1),
(1102, 1, 'Touchh', 300, 500, '2', '1', 1),
(1103, 1, 'Touchh', 300, 500, '2', '1', 1),
(1104, 1, 'Touchh', 300, 500, '2', '1', 1),
(1105, 1, 'Touchh', 300, 500, '2', '1', 1),
(1106, 1, 'Touchh', 300, 500, '2', '1', 1),
(1107, 1, 'Touchh', 300, 500, '2', '1', 1),
(1108, 1, 'Touchh', 300, 500, '2', '1', 1),
(1109, 1, 'Touchh', 300, 500, '2', '1', 1),
(1110, 1, 'Touchh', 300, 500, '2', '1', 1),
(1111, 1, 'Touchh', 300, 500, '2', '1', 1),
(1112, 1, 'Touchh', 300, 500, '2', '1', 1),
(1113, 1, 'Touchh', 300, 500, '2', '1', 1),
(1114, 1, 'Touchh', 300, 500, '2', '1', 1),
(1115, 1, 'Touchh', 300, 500, '2', '1', 1),
(1116, 1, 'Touchh', 300, 500, '2', '1', 1),
(1117, 1, 'Touchh', 300, 500, '2', '1', 1),
(1118, 1, 'Touchh', 300, 500, '2', '1', 1),
(1119, 1, 'Touchh', 300, 500, '2', '1', 1),
(1120, 1, 'Touchh', 300, 500, '2', '1', 1),
(1121, 1, 'Touchh', 300, 500, '2', '1', 1),
(1122, 1, 'Touchh', 300, 500, '2', '1', 1),
(1123, 1, 'Touchh', 300, 500, '2', '1', 1),
(1124, 1, 'Touchh', 300, 500, '2', '1', 1),
(1125, 1, 'Touchh', 300, 500, '2', '1', 1),
(1126, 1, 'Touchh', 300, 500, '2', '1', 1),
(1127, 1, 'Touchh', 300, 500, '2', '1', 1),
(1128, 1, 'Touchh', 300, 500, '2', '1', 1),
(1129, 1, 'Touchh', 300, 500, '2', '1', 1),
(1130, 1, 'Touchh', 300, 500, '2', '1', 1),
(1131, 1, 'Touchh', 300, 500, '2', '1', 1),
(1132, 1, 'Touchh', 300, 500, '2', '1', 1),
(1133, 1, 'Touchh', 300, 500, '2', '1', 1),
(1134, 1, 'Touchh', 300, 500, '2', '1', 1),
(1135, 1, 'Touchh', 300, 500, '2', '1', 1),
(1136, 1, 'Touchh', 300, 500, '2', '1', 1),
(1137, 1, 'Touchh', 300, 500, '2', '1', 1),
(1138, 1, 'Touchh', 300, 500, '2', '1', 1),
(1139, 1, 'Touchh', 300, 500, '2', '1', 1),
(1140, 1, 'Touchh', 300, 500, '2', '1', 1),
(1141, 1, 'Touchh', 300, 500, '2', '1', 1),
(1142, 1, 'Touchh', 300, 500, '2', '1', 1),
(1143, 1, 'Touchh', 300, 500, '2', '1', 1),
(1144, 1, 'Touchh', 300, 500, '2', '1', 1),
(1145, 1, 'Touchh', 300, 500, '2', '1', 1),
(1146, 1, 'Touchh', 300, 500, '2', '1', 1),
(1147, 1, 'Touchh', 300, 500, '2', '1', 1),
(1148, 1, 'Touchh', 300, 500, '2', '1', 1),
(1149, 1, 'Touchh', 300, 500, '2', '1', 1),
(1150, 1, 'Touchh', 300, 500, '2', '1', 1),
(1151, 1, 'Touchh', 300, 500, '2', '1', 1),
(1152, 1, 'Touchh', 300, 500, '2', '1', 1),
(1153, 1, 'Touchh', 300, 500, '2', '1', 1),
(1154, 1, 'Touchh', 300, 500, '2', '1', 1),
(1155, 1, 'Touchh', 300, 500, '2', '1', 1),
(1156, 1, 'Touchh', 300, 500, '2', '1', 1),
(1157, 1, 'Touchh', 300, 500, '2', '1', 1),
(1158, 1, 'Touchh', 300, 500, '2', '1', 1),
(1159, 1, 'Touchh', 300, 500, '2', '1', 1),
(1160, 1, 'Touchh', 300, 500, '2', '1', 1),
(1161, 1, 'Touchh', 300, 500, '2', '1', 1),
(1162, 1, 'Touchh', 300, 500, '2', '1', 1),
(1163, 1, 'Touchh', 300, 500, '2', '1', 1),
(1164, 1, 'Touchh', 300, 500, '2', '1', 1),
(1165, 1, 'Touchh', 300, 500, '2', '1', 1),
(1166, 1, 'Touchh', 300, 500, '2', '1', 1),
(1167, 1, 'Touchh', 300, 500, '2', '1', 1),
(1168, 1, 'Touchh', 300, 500, '2', '1', 1),
(1169, 1, 'Touchh', 300, 500, '2', '1', 1),
(1170, 1, 'Touchh', 300, 500, '2', '1', 1),
(1171, 1, 'Touchh', 300, 500, '2', '1', 1),
(1172, 1, 'Touchh', 300, 500, '2', '1', 1),
(1173, 1, 'Touchh', 300, 500, '2', '1', 1),
(1174, 1, 'Touchh', 300, 500, '2', '1', 1),
(1175, 1, 'Touchh', 300, 500, '2', '1', 1),
(1176, 1, 'Touchh', 300, 500, '2', '1', 1),
(1177, 1, 'Touchh', 300, 500, '2', '1', 1),
(1178, 1, 'Touchh', 300, 500, '2', '1', 1),
(1179, 1, 'Touchh', 300, 500, '2', '1', 1),
(1180, 1, 'Touchh', 300, 500, '2', '1', 1),
(1181, 1, 'Touchh', 300, 500, '2', '1', 1),
(1182, 1, 'Touchh', 300, 500, '2', '1', 1),
(1183, 1, 'Touchh', 300, 500, '2', '1', 1),
(1184, 1, 'Touchh', 300, 500, '2', '1', 1),
(1185, 1, 'Touchh', 300, 500, '2', '1', 1),
(1186, 1, 'Touchh', 300, 500, '2', '1', 1),
(1187, 1, 'Touchh', 300, 500, '2', '1', 1),
(1188, 1, 'Touchh', 300, 500, '2', '1', 1),
(1189, 1, 'Touchh', 300, 500, '2', '1', 1),
(1190, 1, 'Touchh', 300, 500, '2', '1', 1),
(1191, 1, 'Touchh', 300, 500, '2', '1', 1),
(1192, 1, 'Touchh', 300, 500, '2', '1', 1),
(1193, 1, 'Touchh', 300, 500, '2', '1', 1),
(1194, 1, 'Touchh', 300, 500, '2', '1', 1),
(1195, 1, 'Touchh', 300, 500, '2', '1', 1),
(1196, 1, 'Touchh', 300, 500, '2', '1', 1),
(1197, 1, 'Touchh', 300, 500, '2', '1', 1),
(1198, 1, 'Touchh', 300, 500, '2', '1', 1),
(1199, 1, 'Touchh', 300, 500, '2', '1', 1),
(1200, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1201, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1202, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1203, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1204, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1205, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1206, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1207, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1208, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1209, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1210, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1211, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1212, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1213, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1214, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1215, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1216, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1217, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1218, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1219, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1220, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1221, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1222, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1223, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1224, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1225, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1226, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1227, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1228, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1229, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1230, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1231, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1232, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1233, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1234, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1235, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1236, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1237, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1238, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1239, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1240, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1241, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1242, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1243, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1244, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1245, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1246, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1247, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1248, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1249, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1250, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1251, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1252, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1253, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1254, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1255, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1256, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1257, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1258, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1259, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1260, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1261, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1262, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1263, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1264, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1265, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1266, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1267, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1268, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1269, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1270, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1271, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1272, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1273, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1274, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1275, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1276, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1277, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1278, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1279, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1280, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1281, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1282, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1283, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1284, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1285, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1286, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1287, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1288, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1289, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1290, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1291, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1292, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1293, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1294, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1295, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1296, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1297, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1298, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1299, 2, 'Denim Smart', 500, 700, '8', '1', 1),
(1300, 2, 'Winner club', 450, 800, '13', '1', 1),
(1301, 2, 'Winner club', 450, 800, '13', '1', 1),
(1302, 2, 'Winner club', 450, 800, '13', '1', 1),
(1303, 2, 'Winner club', 450, 800, '13', '1', 1),
(1304, 2, 'Winner club', 450, 800, '13', '1', 1),
(1305, 2, 'Winner club', 450, 800, '13', '1', 1),
(1306, 2, 'Winner club', 450, 800, '13', '1', 1),
(1307, 2, 'Winner club', 450, 800, '13', '1', 1),
(1308, 2, 'Winner club', 450, 800, '13', '1', 1),
(1309, 2, 'Winner club', 450, 800, '13', '1', 1),
(1310, 2, 'Winner club', 450, 800, '13', '1', 1),
(1311, 2, 'Winner club', 450, 800, '13', '1', 1),
(1312, 2, 'Winner club', 450, 800, '13', '1', 1),
(1313, 2, 'Winner club', 450, 800, '13', '1', 1),
(1314, 2, 'Winner club', 450, 800, '13', '1', 1),
(1315, 2, 'Winner club', 450, 800, '13', '1', 1),
(1316, 2, 'Winner club', 450, 800, '13', '1', 1),
(1317, 2, 'Winner club', 450, 800, '13', '1', 1),
(1318, 2, 'Winner club', 450, 800, '13', '1', 1),
(1319, 2, 'Winner club', 450, 800, '13', '1', 1),
(1320, 2, 'Winner club', 450, 800, '13', '1', 1),
(1321, 2, 'Winner club', 450, 800, '13', '1', 1),
(1322, 2, 'Winner club', 450, 800, '13', '1', 1),
(1323, 2, 'Winner club', 450, 800, '13', '1', 1),
(1324, 2, 'Winner club', 450, 800, '13', '1', 1),
(1325, 2, 'Winner club', 450, 800, '13', '1', 1),
(1326, 2, 'Winner club', 450, 800, '13', '1', 1),
(1327, 2, 'Winner club', 450, 800, '13', '1', 1),
(1328, 2, 'Winner club', 450, 800, '13', '1', 1),
(1329, 2, 'Winner club', 450, 800, '13', '1', 1),
(1330, 2, 'Winner club', 450, 800, '13', '1', 1),
(1331, 2, 'Winner club', 450, 800, '13', '1', 1),
(1332, 2, 'Winner club', 450, 800, '13', '1', 1),
(1333, 2, 'Winner club', 450, 800, '13', '1', 1),
(1334, 2, 'Winner club', 450, 800, '13', '1', 1),
(1335, 2, 'Winner club', 450, 800, '13', '1', 1),
(1336, 2, 'Winner club', 450, 800, '13', '1', 1),
(1337, 2, 'Winner club', 450, 800, '13', '1', 1),
(1338, 2, 'Winner club', 450, 800, '13', '1', 1),
(1339, 2, 'Winner club', 450, 800, '13', '1', 1),
(1340, 2, 'Winner club', 450, 800, '13', '1', 1),
(1341, 2, 'Winner club', 450, 800, '13', '1', 1),
(1342, 2, 'Winner club', 450, 800, '13', '1', 1),
(1343, 2, 'Winner club', 450, 800, '13', '1', 1),
(1344, 2, 'Winner club', 450, 800, '13', '1', 1),
(1345, 2, 'Winner club', 450, 800, '13', '1', 1),
(1346, 2, 'Winner club', 450, 800, '13', '1', 1),
(1347, 2, 'Winner club', 450, 800, '13', '1', 1),
(1348, 2, 'Winner club', 450, 800, '13', '1', 1),
(1349, 2, 'Winner club', 450, 800, '13', '1', 1),
(1350, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1351, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1352, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1353, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1354, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1355, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1356, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1357, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1358, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1359, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1360, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1361, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1362, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1363, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1364, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1365, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1366, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1367, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1368, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1369, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1370, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1371, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1372, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1373, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1374, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1375, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1376, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1377, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1378, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1379, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1380, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1381, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1382, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1383, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1384, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1385, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1386, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1387, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1388, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1389, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1390, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1391, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1392, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1393, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1394, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1395, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1396, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1397, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1398, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1399, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1400, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1401, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1402, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1403, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1404, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1405, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1406, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1407, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1408, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1409, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1410, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1411, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1412, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1413, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1414, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1415, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1416, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1417, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1418, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1419, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1420, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1421, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1422, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1423, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1424, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1425, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1426, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1427, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1428, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1429, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1430, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1431, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1432, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1433, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1434, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1435, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1436, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1437, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1438, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1439, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1440, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1441, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1442, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1443, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1444, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1445, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1446, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1447, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1448, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1449, 1, 'Denim Smart', 250, 500, '1', '4', 1),
(1450, 1, 'Levis', 300, 550, '3', '2', 1),
(1451, 1, 'Levis', 300, 550, '3', '2', 1),
(1452, 1, 'Levis', 300, 550, '3', '2', 1),
(1453, 1, 'Levis', 300, 550, '3', '2', 1),
(1454, 1, 'Levis', 300, 550, '3', '2', 1),
(1455, 1, 'Levis', 300, 550, '3', '2', 1),
(1456, 1, 'Levis', 300, 550, '3', '2', 1),
(1457, 1, 'Levis', 300, 550, '3', '2', 1),
(1458, 1, 'Levis', 300, 550, '3', '2', 1),
(1459, 1, 'Levis', 300, 550, '3', '2', 1),
(1460, 1, 'Levis', 300, 550, '3', '2', 1),
(1461, 1, 'Levis', 300, 550, '3', '2', 1),
(1462, 1, 'Levis', 300, 550, '3', '2', 1),
(1463, 1, 'Levis', 300, 550, '3', '2', 1),
(1464, 1, 'Levis', 300, 550, '3', '2', 1),
(1465, 1, 'Levis', 300, 550, '3', '2', 1),
(1466, 1, 'Levis', 300, 550, '3', '2', 1),
(1467, 1, 'Levis', 300, 550, '3', '2', 1),
(1468, 1, 'Levis', 300, 550, '3', '2', 1),
(1469, 1, 'Levis', 300, 550, '3', '2', 1),
(1470, 1, 'Levis', 300, 550, '3', '2', 1),
(1471, 1, 'Levis', 300, 550, '3', '2', 1),
(1472, 1, 'Levis', 300, 550, '3', '2', 1),
(1473, 1, 'Levis', 300, 550, '3', '2', 1),
(1474, 1, 'Levis', 300, 550, '3', '2', 1),
(1475, 1, 'Levis', 300, 550, '3', '2', 1),
(1476, 1, 'Levis', 300, 550, '3', '2', 1),
(1477, 1, 'Levis', 300, 550, '3', '2', 1),
(1478, 1, 'Levis', 300, 550, '3', '2', 1),
(1479, 1, 'Levis', 300, 550, '3', '2', 1),
(1480, 1, 'Levis', 300, 550, '3', '2', 1),
(1481, 1, 'Levis', 300, 550, '3', '2', 1),
(1482, 1, 'Levis', 300, 550, '3', '2', 1),
(1483, 1, 'Levis', 300, 550, '3', '2', 1),
(1484, 1, 'Levis', 300, 550, '3', '2', 1),
(1485, 1, 'Levis', 300, 550, '3', '2', 1),
(1486, 1, 'Levis', 300, 550, '3', '2', 1),
(1487, 1, 'Levis', 300, 550, '3', '2', 1),
(1488, 1, 'Levis', 300, 550, '3', '2', 1),
(1489, 1, 'Levis', 300, 550, '3', '2', 1),
(1490, 1, 'Levis', 300, 550, '3', '2', 1),
(1491, 1, 'Levis', 300, 550, '3', '2', 1),
(1492, 1, 'Levis', 300, 550, '3', '2', 1),
(1493, 1, 'Levis', 300, 550, '3', '2', 1),
(1494, 1, 'Levis', 300, 550, '3', '2', 1),
(1495, 1, 'Levis', 300, 550, '3', '2', 1),
(1496, 1, 'Levis', 300, 550, '3', '2', 1),
(1497, 1, 'Levis', 300, 550, '3', '2', 1),
(1498, 1, 'Levis', 300, 550, '3', '2', 1),
(1499, 1, 'Levis', 300, 550, '3', '2', 1),
(1500, 1, 'Levis', 300, 550, '3', '2', 1),
(1501, 1, 'Levis', 300, 550, '3', '2', 1),
(1502, 1, 'Levis', 300, 550, '3', '2', 1),
(1503, 1, 'Levis', 300, 550, '3', '2', 1),
(1504, 1, 'Levis', 300, 550, '3', '2', 1),
(1505, 1, 'Levis', 300, 550, '3', '2', 1),
(1506, 1, 'Levis', 300, 550, '3', '2', 1),
(1507, 1, 'Levis', 300, 550, '3', '2', 1),
(1508, 1, 'Levis', 300, 550, '3', '2', 1),
(1509, 1, 'Levis', 300, 550, '3', '2', 1),
(1510, 1, 'Levis', 300, 550, '3', '2', 1),
(1511, 1, 'Levis', 300, 550, '3', '2', 1),
(1512, 1, 'Levis', 300, 550, '3', '2', 1),
(1513, 1, 'Levis', 300, 550, '3', '2', 1),
(1514, 1, 'Levis', 300, 550, '3', '2', 1),
(1515, 1, 'Levis', 300, 550, '3', '2', 1),
(1516, 1, 'Levis', 300, 550, '3', '2', 1),
(1517, 1, 'Levis', 300, 550, '3', '2', 1),
(1518, 1, 'Levis', 300, 550, '3', '2', 1),
(1519, 1, 'Levis', 300, 550, '3', '2', 1),
(1520, 1, 'Levis', 300, 550, '3', '2', 1),
(1521, 1, 'Levis', 300, 550, '3', '2', 1),
(1522, 1, 'Levis', 300, 550, '3', '2', 1),
(1523, 1, 'Levis', 300, 550, '3', '2', 1),
(1524, 1, 'Levis', 300, 550, '3', '2', 1),
(1525, 1, 'Levis', 300, 550, '3', '2', 1),
(1526, 1, 'Levis', 300, 550, '3', '2', 1),
(1527, 1, 'Levis', 300, 550, '3', '2', 1),
(1528, 1, 'Levis', 300, 550, '3', '2', 1),
(1529, 1, 'Levis', 300, 550, '3', '2', 1),
(1530, 1, 'Levis', 300, 550, '3', '2', 1),
(1531, 1, 'Levis', 300, 550, '3', '2', 1),
(1532, 1, 'Levis', 300, 550, '3', '2', 1),
(1533, 1, 'Levis', 300, 550, '3', '2', 1),
(1534, 1, 'Levis', 300, 550, '3', '2', 1),
(1535, 1, 'Levis', 300, 550, '3', '2', 1),
(1536, 1, 'Levis', 300, 550, '3', '2', 1),
(1537, 1, 'Levis', 300, 550, '3', '2', 1),
(1538, 1, 'Levis', 300, 550, '3', '2', 1),
(1539, 1, 'Levis', 300, 550, '3', '2', 1),
(1540, 1, 'Levis', 300, 550, '3', '2', 1),
(1541, 1, 'Levis', 300, 550, '3', '2', 1),
(1542, 1, 'Levis', 300, 550, '3', '2', 1),
(1543, 1, 'Levis', 300, 550, '3', '2', 1),
(1544, 1, 'Levis', 300, 550, '3', '2', 1),
(1545, 1, 'Levis', 300, 550, '3', '2', 1),
(1546, 1, 'Levis', 300, 550, '3', '2', 1),
(1547, 1, 'Levis', 300, 550, '3', '2', 1),
(1548, 1, 'Levis', 300, 550, '3', '2', 1),
(1549, 1, 'Levis', 300, 550, '3', '2', 1);

-- --------------------------------------------------------

--
-- Table structure for table `item_order_table`
--

CREATE TABLE `item_order_table` (
  `id` int(11) NOT NULL,
  `order_items` varchar(255) NOT NULL,
  `store_id` int(11) NOT NULL,
  `order_total_after_discount` int(11) NOT NULL,
  `order_discount` int(11) NOT NULL,
  `order_total` int(11) NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item_order_table`
--

INSERT INTO `item_order_table` (`id`, `order_items`, `store_id`, `order_total_after_discount`, `order_discount`, `order_total`, `created_date`) VALUES
(1, '1001,1002,1003,1004', 2, 1800, 200, 2000, '2019-11-03'),
(2, '1450,1452,1453', 2, 1320, 330, 1650, '2019-11-03');

-- --------------------------------------------------------

--
-- Table structure for table `item_types`
--

CREATE TABLE `item_types` (
  `id` int(11) NOT NULL,
  `item_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item_types`
--

INSERT INTO `item_types` (`id`, `item_name`) VALUES
(1, 'shirts'),
(2, 'Pants');

-- --------------------------------------------------------

--
-- Table structure for table `item_variants`
--

CREATE TABLE `item_variants` (
  `id` int(11) NOT NULL,
  `variant_name` varchar(255) NOT NULL,
  `item_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item_variants`
--

INSERT INTO `item_variants` (`id`, `variant_name`, `item_type`) VALUES
(1, 'S', 1),
(2, 'M', 1),
(3, 'L', 1),
(4, 'XL', 1),
(5, 'XXL', 1),
(6, 'XXXL', 1),
(7, '28', 2),
(8, '30', 2),
(9, '32', 2),
(10, '34', 2),
(11, '36', 2),
(12, '38', 2),
(13, '40', 2),
(14, '42', 2);

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `id` int(11) NOT NULL,
  `store_name` varchar(250) NOT NULL,
  `store_address` text NOT NULL,
  `store_owner` varchar(250) NOT NULL,
  `store_owner_phone_no` varchar(250) NOT NULL,
  `store_gstin` varchar(250) NOT NULL,
  `store_code` varchar(250) NOT NULL,
  `store_status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1 means active, 0 means inactive'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`id`, `store_name`, `store_address`, `store_owner`, `store_owner_phone_no`, `store_gstin`, `store_code`, `store_status`) VALUES
(1, 'Chegunta', 'Chegunta main road', 'Gajam Raju', '9949050703', '', '', 1),
(2, 'Gajwel', 'Opposite Governament Hospital, Main Road Gajwel', 'Gajam Raju', '9949050703', '', '', 1),
(3, 'Ramayampet', 'Ramayampet, Main Road Ramayampet', 'Gajam Raju', '9949050703', '', '', 1),
(4, 'Yellamabanda', 'Yellamabanda, Main Road Yellamabanda', 'Gajam Raju', '9949050703', '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_phone_no` varchar(250) NOT NULL,
  `user_role` tinyint(4) NOT NULL COMMENT '1 means Super Admin, 2 means Store Admin, 3 means Store User',
  `user_store` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `user_email`, `user_password`, `user_phone_no`, `user_role`, `user_store`) VALUES
(1, 'Parameshwer', 'parameshwer0515@gmail.com', 'Shrey@0515', '9177809454', 1, 0),
(2, 'Rajugajam', 'parameshwer0515@gmail.com', 'Bangaru@1215', '9949050703', 2, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_order_table`
--
ALTER TABLE `item_order_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_types`
--
ALTER TABLE `item_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_variants`
--
ALTER TABLE `item_variants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1550;

--
-- AUTO_INCREMENT for table `item_order_table`
--
ALTER TABLE `item_order_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `item_types`
--
ALTER TABLE `item_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `item_variants`
--
ALTER TABLE `item_variants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `stores`
--
ALTER TABLE `stores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
