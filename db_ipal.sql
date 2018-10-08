-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2018 at 03:40 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ipal`
--
CREATE DATABASE IF NOT EXISTS `db_ipal` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `db_ipal`;

-- --------------------------------------------------------

--
-- Table structure for table `ipal_category`
--

CREATE TABLE `ipal_category` (
  `idCategory` int(11) NOT NULL,
  `category` varchar(200) NOT NULL,
  `pin_image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ipal_category`
--

INSERT INTO `ipal_category` (`idCategory`, `category`, `pin_image`) VALUES
(1, 'IPAL Skala Kota & IPLT', '/src/assets/blue_MarkerA.png'),
(2, 'IPAL Skala Pemukiman - DSDA', '/src/assets/brown_MarkerA.png'),
(3, 'IPAL Skala Pemukiman - Sanimas IDB', '/src/assets/green_MarkerA.png'),
(5, 'IPAL Rumah Susun', '/src/assets/orange_MarkerA.png');

-- --------------------------------------------------------

--
-- Table structure for table `ipal_data`
--

CREATE TABLE `ipal_data` (
  `idIpalData` int(11) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `manager` text,
  `capacity` text,
  `connection_number` text,
  `technology` text,
  `development_cost` text,
  `longitude` decimal(11,8) NOT NULL,
  `latitude` decimal(11,8) NOT NULL,
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ipal_data`
--

INSERT INTO `ipal_data` (`idIpalData`, `idCategory`, `name`, `address`, `manager`, `capacity`, `connection_number`, `technology`, `development_cost`, `longitude`, `latitude`, `photo`) VALUES
(3, 1, 'IPLT Duri Kosambi', '', NULL, NULL, NULL, NULL, NULL, '106.72577820', '-6.17168417', ''),
(5, 1, 'IPAL Sunter', '', NULL, NULL, NULL, NULL, NULL, '106.86259638', '-6.11726268', ''),
(6, 1, 'IPLT Pulo Gebang', '', NULL, NULL, NULL, NULL, NULL, '106.96241210', '-6.20072717', ''),
(7, 1, 'IPAL Setiabudi', '', NULL, NULL, NULL, NULL, NULL, '106.82662049', '-6.20531154', ''),
(8, 3, '', 'Kelurahan Menteng RT 06,07 RW 01', NULL, NULL, NULL, NULL, NULL, '106.83004320', '-6.19856413', ''),
(9, 3, '', 'Kelurahan Menteng RT 08,09 RW 01', NULL, NULL, NULL, NULL, NULL, '106.83157400', '-6.20023406', ''),
(10, 3, '', 'Kelurahan Menteng RT 13,14 RW 01', NULL, NULL, NULL, NULL, NULL, '106.82779350', '-6.19935271', ''),
(11, 3, '', 'Kelurahan Kemayoran RT07,08,09 \r\nRW 07', NULL, NULL, NULL, NULL, NULL, '106.84647690', '-6.16304350', ''),
(12, 3, '', 'Kelurahan Kenari', NULL, NULL, NULL, NULL, NULL, '106.84522260', '-6.18977764', ''),
(13, 3, '', 'Kelurahan Sungai Bambu RT 03 RW 04', NULL, NULL, NULL, NULL, NULL, '106.88943790', '-6.13082489', ''),
(14, 3, '', 'Kelurahan Sungai Bambu RT 05 RW 04', NULL, NULL, NULL, NULL, NULL, '106.88725960', '-6.13219212', ''),
(15, 3, '', 'Kelurahan Rawa Badak Selatan RT 01,02,03 RW 01', NULL, NULL, NULL, NULL, NULL, '106.90064860', '-6.12792588', ''),
(16, 3, '', 'Kelurahan Semper Barat RT 06, 16 \r\nRW 09', NULL, NULL, NULL, NULL, NULL, '106.92599540', '-6.12815925', ''),
(17, 3, '', 'Kelurahan Semper Barat RW 04', NULL, NULL, NULL, NULL, NULL, '106.92564780', '-6.12985083', ''),
(18, 3, '', 'Kelurahan Tugu Selatan', NULL, NULL, NULL, NULL, NULL, '106.91337970', '-6.13344829', ''),
(19, 3, '', 'Kelurahan Tomang RT 06,07 RW 14', NULL, NULL, NULL, NULL, NULL, '106.79864950', '-6.16830372', ''),
(20, 3, '', 'Kelurahan Tomang RT 09 RW 14', NULL, NULL, NULL, NULL, NULL, '106.79519480', '-6.16918479', ''),
(21, 3, '', 'Kelurahan Tegal Alur RT 10 RW 09', NULL, NULL, NULL, NULL, NULL, '106.71513950', '-6.11039193', ''),
(22, 3, '', 'Kelurahan Tegal Alur RT 03 RW 12', NULL, NULL, NULL, NULL, NULL, '106.71546380', '-6.11263946', ''),
(23, 3, '', 'Kelurahan Tegal Alur RT 01 RW 01', NULL, NULL, NULL, NULL, NULL, '106.71650650', '-6.11530405', ''),
(24, 3, '', 'Kelurahan Tegal Alur RT 03 RW 01', NULL, NULL, NULL, NULL, NULL, '106.71458340', '-6.11402968', ''),
(25, 3, '', 'Kelurahan Tegal Alur RT 05 RW 01', NULL, NULL, NULL, NULL, NULL, '106.71349440', '-6.11259312', ''),
(26, 3, '', 'Kelurahan Kedoya Selatan RT 13 RW 05', NULL, NULL, NULL, NULL, NULL, '106.75927970', '-6.17937977', ''),
(27, 3, '', 'Kelurahan Kota Bambu Selatan RT 04 RW 05', NULL, NULL, NULL, NULL, NULL, '106.79995390', '-6.18690776', ''),
(28, 3, '', 'Kelurahan Kota Bambu Selatan RW 03', NULL, NULL, NULL, NULL, NULL, '106.80282940', '-6.18700052', ''),
(29, 3, '', 'Kelurahan Palmerah RT 04 RW 04', NULL, NULL, NULL, NULL, NULL, '106.78633220', '-6.19773502', ''),
(30, 3, '', 'Kelurahan Jati Pulo', NULL, NULL, NULL, NULL, NULL, '106.80413400', '-6.17662064', ''),
(31, 3, '', 'Kelurahan Palmerah RW 08', NULL, NULL, NULL, NULL, NULL, '106.78997360', '-6.19961371', ''),
(32, 3, '', 'Kelurahan Cipulir RT 01 RW 06', NULL, NULL, NULL, NULL, NULL, '106.77200550', '-6.23560116', ''),
(33, 3, '', 'Kelurahan Pondok Labu RT 07 RW 07', NULL, NULL, NULL, NULL, NULL, '106.80013040', '-6.30616648', ''),
(34, 3, '', 'Kelurahan Tegal Parang RT 09 RW 03', NULL, NULL, NULL, NULL, NULL, '106.82632600', '-6.24740104', ''),
(35, 3, '', 'Kelurahan Pesanggrahan RT 13 RW 01', NULL, NULL, NULL, NULL, NULL, '106.76176870', '-6.25212342', ''),
(36, 3, '', 'Kelurahan Tegal Parang RT 09 RW 03', NULL, NULL, NULL, NULL, NULL, '106.82632600', '-6.24740104', ''),
(37, 3, '', 'Kelurahan Pesanggrahan RT 13 RW 01', NULL, NULL, NULL, NULL, NULL, '106.76176870', '-6.25212342', ''),
(38, 3, '', 'Kelurahan Lenteng Agung RT 02 RW 06', NULL, NULL, NULL, NULL, NULL, '106.83524450', '-6.32246590', ''),
(39, 3, '', 'Kelurahan Rawa Jati RT 03,04 RW 01', NULL, NULL, NULL, NULL, NULL, '106.85504850', '-6.25546757', ''),
(40, 3, '', 'Kelurahan Kebagusan RT 04 RW 05', NULL, NULL, NULL, NULL, NULL, '106.83311130', '-6.30564356', ''),
(41, 3, '', 'Kelurahan Pondok Pinang', NULL, NULL, NULL, NULL, NULL, '106.78162670', '-6.27135108', ''),
(42, 3, '', 'Kelurahan Kampung Rambutan RT 08 RW 03', NULL, NULL, NULL, NULL, NULL, '106.87147670', '-6.30240724', ''),
(43, 3, '', 'Kelurahan Kampung Rambutan RT 10 RW 03', NULL, NULL, NULL, NULL, NULL, '106.87145340', '-6.30440433', ''),
(44, 3, '', 'Kelurahan Kampung Rambutan RT 06 RW 12', NULL, NULL, NULL, NULL, NULL, '106.87319510', '-6.30326646', ''),
(45, 3, '', 'Kelurahan Kampung Rambutan RT 06 RW 12', NULL, NULL, NULL, NULL, NULL, '106.87393820', '-6.30472944', ''),
(46, 3, '', 'Kelurahan Makasar RT 18 RW 03', NULL, NULL, NULL, NULL, NULL, '106.87766540', '-6.27588286', ''),
(47, 3, '', 'Kelurahan Makasar RT 06 RW 07', NULL, NULL, NULL, NULL, NULL, '106.87527430', '-6.27191317', ''),
(48, 3, '', 'Kelurahan Kampung Rambutan RT 08 RW 03', NULL, NULL, NULL, NULL, NULL, '106.87147670', '-6.30240724', ''),
(49, 3, '', 'Kelurahan Kampung Rambutan RT 10 RW 03', NULL, NULL, NULL, NULL, NULL, '106.87145340', '-6.30440433', ''),
(50, 3, '', 'Kelurahan Kampung Rambutan RT 06 RW 12', NULL, NULL, NULL, NULL, NULL, '106.87319510', '-6.30326646', ''),
(51, 3, '', 'Kelurahan Kampung Rambutan RT 06 RW 12', NULL, NULL, NULL, NULL, NULL, '106.87393820', '-6.30472944', ''),
(52, 3, '', 'Kelurahan Makasar RT 18 RW 03', NULL, NULL, NULL, NULL, NULL, '106.87766540', '-6.27588286', ''),
(53, 3, '', 'Kelurahan Makasar RT 06 RW 07', NULL, NULL, NULL, NULL, NULL, '106.87527430', '-6.27191317', ''),
(54, 3, '', 'Kelurahan Makasar RW 05', NULL, NULL, NULL, NULL, NULL, '106.87476350', '-6.27458284', ''),
(55, 3, '', 'Kelurahan Kelapa Dua Wetan RT 15, 16 RW 09', NULL, NULL, NULL, NULL, NULL, '106.88402860', '-6.33513477', ''),
(56, 3, '', 'Kelurahan Makasar', NULL, NULL, NULL, NULL, NULL, '106.87604030', '-6.27697394', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_users` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `is_admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_users`, `username`, `password`, `is_admin`) VALUES
(1, 'admin', 'admin', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ipal_category`
--
ALTER TABLE `ipal_category`
  ADD PRIMARY KEY (`idCategory`);

--
-- Indexes for table `ipal_data`
--
ALTER TABLE `ipal_data`
  ADD PRIMARY KEY (`idIpalData`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ipal_category`
--
ALTER TABLE `ipal_category`
  MODIFY `idCategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `ipal_data`
--
ALTER TABLE `ipal_data`
  MODIFY `idIpalData` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_users` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
