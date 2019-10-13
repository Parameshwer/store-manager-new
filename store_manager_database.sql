-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 13, 2019 at 07:26 PM
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
  `item_code` varchar(255) NOT NULL,
  `item_brand` varchar(255) NOT NULL,
  `item_actual_price` int(11) NOT NULL,
  `item_sell_price` int(11) NOT NULL,
  `item_variant` varchar(255) NOT NULL,
  `item_store` varchar(255) NOT NULL,
  `item_status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1 means unsold, 2 means sold'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
