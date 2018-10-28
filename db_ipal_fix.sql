-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2018 at 09:58 AM
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
(6, 'IPAL/IPLT Skala Kota', '/src/assets/blue_MarkerA.png'),
(7, 'IPAL Skala Permukiman', '/src/assets/brown_MarkerA.png'),
(8, 'IPAL Rumah Susun', '/src/assets/green_MarkerA.png');

-- --------------------------------------------------------

--
-- Table structure for table `ipal_data`
--

CREATE TABLE `ipal_data` (
  `idIpalData` int(11) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `build_by` text,
  `development_year` int(11) DEFAULT NULL,
  `source_of_fund` text,
  `technology` text,
  `size` text,
  `capacity` text,
  `connection_number` text,
  `manager` text,
  `longitude` decimal(11,8) NOT NULL,
  `latitude` decimal(11,8) NOT NULL,
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ipal_data`
--

INSERT INTO `ipal_data` (`idIpalData`, `idCategory`, `name`, `address`, `build_by`, `development_year`, `source_of_fund`, `technology`, `size`, `capacity`, `connection_number`, `manager`, `longitude`, `latitude`, `photo`) VALUES
(14, 6, 'IPAL Setiabudi', '', 'Kementerian PUPR', NULL, 'APBN', NULL, NULL, NULL, NULL, NULL, '106.82662050', '-6.20531150', ''),
(15, 6, 'IPLT Duri Kosambi', '', 'Kementerian PUPR', NULL, 'APBN', NULL, NULL, NULL, NULL, NULL, '106.72577820', '-6.17168420', ''),
(16, 6, 'IPLT Pulo Gebang', '', 'Kementerian PUPR', NULL, 'APBN', NULL, NULL, NULL, NULL, NULL, '106.96241210', '-6.20072720', ''),
(17, 7, 'IPAL PUPR Asrama DLH Semper', '', 'Kementerian PUPR', 0, 'APBN', NULL, NULL, NULL, NULL, NULL, '106.92479480', '-6.13210510', ''),
(18, 7, 'IPAL PUPR Waduk Cimanggis', '', 'Kementerian PUPR', 0, 'APBN', NULL, NULL, NULL, NULL, NULL, '106.88634540', '-6.36553590', ''),
(19, 7, 'IPAL DSDA Malaka Sari', '', 'Dinas Pekerjaan Umum', 0, 'APBD', NULL, NULL, NULL, NULL, NULL, '106.92912400', '-6.21863090', ''),
(20, 7, 'IPAL DSDA Waduk Tomang', '', 'Dinas Pekerjaan Umum', 0, 'APBD', NULL, NULL, NULL, NULL, NULL, '106.77967430', '-6.16783360', ''),
(21, 7, 'IPAL DSDA Waduk Grogol', '', 'Dinas Pekerjaan Umum', 0, 'APBD', NULL, NULL, NULL, NULL, NULL, '106.79257810', '-6.15792150', ''),
(22, 7, 'IPAL DSDA Waduk Melati', '', 'Dinas Pekerjaan Umum', 0, 'APBD', NULL, NULL, NULL, NULL, NULL, '106.81779680', '-6.19852460', ''),
(23, 7, 'IPAL DSDA Waduk Sunter', '', 'Dinas Pekerjaan Umum', 0, 'APBD', NULL, NULL, NULL, NULL, NULL, '106.86691320', '-6.14915080', ''),
(24, 7, 'IPAL Kel Kemayoran RT07 08 09 RW 07', '', 'Kelompok Swadaya Masyarakat Kemayoran 789', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.84647690', '-6.16304350', ''),
(25, 7, 'IPAL Kel Palmerah RT 00/RW 08', '', 'Kelompok Swadaya Masyarakat ', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.79712840', '-6.20070110', ''),
(26, 7, 'IPAL Kel Palmerah RT 04/RW 04', '', 'Kelompok Swadaya Masyarakat Ar - Ridho', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.79610050', '-6.20020150', ''),
(27, 7, 'IPAL Kel Menteng RT 08 09/RW 01', '', 'Kelompok Swadaya Masyarakat Delima', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.84713190', '-6.20844180', ''),
(28, 7, 'IPAL Kel Menteng RT 13 14/RW 01', '', 'Kelompok Swadaya Masyarakat Glamor', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.84591240', '-6.20834960', ''),
(29, 7, 'IPAL Kel Menteng RT 06 07/RW 01', '', 'Kelompok Swadaya Masyarakat Menteng 67', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.84444330', '-6.20773200', ''),
(30, 7, 'IPAL Kel Sungai Bambu RT 05/RW 04', '', 'Kelompok Swadaya Masyarakat Flamboyan', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.88430820', '-6.12992320', ''),
(31, 7, 'IPAL Kel Sungai Bambu RT 03/RW 04', '', 'Kelompok Swadaya Masyarakat Barokah', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.88365390', '-6.12784110', ''),
(32, 7, 'IPAL Kel. Rawa Badak Selatan RT 01 02 03/RW 01', '', 'Kelompok Swadaya Masyarakat Benlay', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.90079670', '-6.13303910', ''),
(33, 7, 'IPAL Kel Rawa Badak Selatan', '', 'Kelompok Swadaya Masyarakat ', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.90165330', '-6.13203020', ''),
(34, 7, 'IPAL Kel Tegal Alur RW 01/RT 05', '', 'Kelompok Swadaya Masyarakat Kembang Melati', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.71877310', '-6.10709050', ''),
(35, 7, 'IPAL Kel Tegal Alur RW 01/RT 03', '', 'Kelompok Swadaya Masyarakat Rawa Melati Mandiri', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.71992710', '-6.10852770', ''),
(36, 7, 'IPAL Kel Tegal Alur RW 01/RT 01', '', 'Kelompok Swadaya Masyarakat Mekar Melati', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.72109300', '-6.11025280', ''),
(37, 7, 'IPAL Kel Tegal Alur RW 12/RT 03', '', 'Kelompok Swadaya Masyarakat Kayu Besar Mandiri', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.72773300', '-6.12095180', ''),
(38, 7, 'IPAL Kel Tegal Alur RW 09/RT 10', '', 'Kelompok Swadaya Masyarakat Darrul Rosyid', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.70919110', '-6.10639480', ''),
(39, 7, 'IPAL Kel Tomang RT 09/RW 14', '', 'Kelompok Swadaya Masyarakat Nurul Mukminin', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.80288260', '-6.17088310', ''),
(40, 7, 'IPAL Kel Tomang RT 06 07/RW 14', '', 'Kelompok Swadaya Masyarakat Nurul Hasanah', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.80262090', '-6.17064220', ''),
(41, 7, 'IPAL Kel Cipulir RT 01/RW 06', '', 'Kelompok Swadaya Masyarakat AN-Nur', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.77736120', '-6.24111660', ''),
(42, 7, 'IPAL Kel Pondok Labu RT 07/RW 07', '', 'Kelompok Swadaya Masyarakat Kelompok Swadaya Masyarakat Hidayah', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.79113030', '-6.30476940', ''),
(43, 7, 'IPAL Kel Rawa Jati RT 03 04/RW 01', '', 'Kelompok Swadaya Masyarakat Citra Pelangi', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.85945240', '-6.25836640', ''),
(44, 7, 'IPAL Kel Rambutan RT /RW', '', 'Kelompok Swadaya Masyarakat ', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.87601020', '-6.30630980', ''),
(45, 7, 'IPAL Kel Rambutan RT /RW', '', 'Kelompok Swadaya Masyarakat ', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.87531420', '-6.30639310', ''),
(46, 7, 'IPAL Kel Makasar RT 18/RW 03', '', 'Kelompok Swadaya Masyarakat Gotong Royong 18', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.87760720', '-6.27621670', ''),
(47, 7, 'IPAL Kel Makasar RT 06/RW 07', '', 'Kelompok Swadaya Masyarakat Peduli Lingkungan', 2017, 'Loan IDB', NULL, NULL, NULL, NULL, NULL, '106.87347050', '-6.26873930', ''),
(48, 8, 'IPAL Rusun Waduk Pluit Muara Baru', '', 'Dinas Perumahan dan Gedung Pemda', 2012, 'APBD', 'STP (4 unit)', NULL, NULL, NULL, 'UPRS', '106.80027900', '-6.10988730', ''),
(49, 8, 'IPAL Rusun Penjaringan', '', 'Dinas Perumahan dan Gedung Pemda', 2002, 'APBD', 'STP (2 Unit)', NULL, NULL, NULL, 'UPRS', '106.80040280', '-6.12859790', ''),
(50, 8, 'IPAL Rusun Kapuk Muara', '', 'Dinas Perumahan dan Gedung Pemda', 2007, 'APBD', 'Biotech (2 unit)', NULL, NULL, NULL, 'UPRS', '106.76316990', '-6.13573560', ''),
(51, 8, 'IPAL Rusun Marunda', '', 'Dinas Perumahan dan Gedung Pemda', 2009, 'APBD', 'STP (7 unit)', NULL, NULL, NULL, 'UPRS', '106.96366620', '-6.09825260', ''),
(52, 8, 'IPAL Rusun Sukapura', '', 'Dinas Perumahan dan Gedung Pemda', 1996, 'APBD', '-', NULL, NULL, NULL, 'UPRS', '106.92580410', '-6.15267090', ''),
(53, 8, 'IPAL Rusun Flamboyan', '', 'Dinas Perumahan dan Gedung Pemda', 2002, 'APBD', 'Biotech (2 Unit); STP (1 Unit)', NULL, NULL, NULL, 'UPRS', '106.72302470', '-6.13125770', ''),
(54, 8, 'IPAL Rusun Karang Anyar', '', 'Dinas Perumahan dan Gedung Pemda', 1994, 'APBD', '-', NULL, NULL, NULL, 'UPRS', '106.82968270', '-6.15340460', ''),
(55, 8, 'IPAL Rusun Jati Rawa Sari', '', 'Dinas Perumahan dan Gedung Pemda', 2006, 'APBD', '-', NULL, NULL, NULL, 'UPRS', '106.86207110', '-6.18371350', ''),
(56, 8, 'IPAL Rusun Cipinang Besar Utara', '', 'Dinas Perumahan dan Gedung Pemda', 1987, 'APBD', 'STP (2 Unit)', NULL, NULL, NULL, 'UPRS', '106.88217330', '-6.21750480', ''),
(57, 8, 'IPAL Rusun Pondok Bambu', '', 'Dinas Perumahan dan Gedung Pemda', 2006, 'APBD', 'Biotech (1 unit)', NULL, NULL, NULL, 'UPRS', '106.91050370', '-6.24155330', ''),
(58, 8, 'IPAL Rusun Cipinang Muara', '', 'Dinas Perumahan dan Gedung Pemda', 2003, 'APBD', 'Biotech (1 unit)', NULL, NULL, NULL, 'UPRS', '106.89384880', '-6.22846570', ''),
(59, 8, 'IPAL Rusun Pulo Jahe', '', 'Dinas Perumahan dan Gedung Pemda', 2006, 'APBD', 'STP (2 Unit)', NULL, NULL, NULL, 'UPRS', '106.92381620', '-6.19922080', ''),
(60, 8, 'IPAL Rusun Tipar Cakung', '', 'Dinas Perumahan dan Gedung Pemda', 2004, 'APBD', 'Biotech (3 Unit)', NULL, NULL, NULL, 'UPRS', '106.93813150', '-6.17086510', ''),
(61, 8, 'IPAL Rusun Pinus Elok', '', 'Dinas Perumahan dan Gedung Pemda', 2009, 'APBD', 'Biotech', NULL, NULL, NULL, 'UPRS', '106.93699420', '-6.20096870', ''),
(62, 8, 'IPAL Rusun Cakung Barat', '', 'Dinas Perumahan dan Gedung Pemda', 2009, 'APBD', 'Biotech (2 unit)', NULL, NULL, NULL, 'UPRS', '106.93235150', '-6.16697970', ''),
(63, 8, 'IPAL Rusun Pulo Gebang', '', 'Dinas Perumahan dan Gedung Pemda', 2009, 'APBD', 'Biotech( 8 unit)', NULL, NULL, NULL, 'UPRS', '106.95038190', '-6.20119300', ''),
(64, 8, 'IPAL Rusun Jatinegara Barat', '', 'Dinas Perumahan dan Gedung Pemda', 2014, 'APBD', 'STP (2 Unit)', NULL, NULL, NULL, 'UPRS', '106.86554210', '-6.22277730', ''),
(65, 8, 'IPAL Rusun Tambora III & IV', '', 'Dinas Perumahan dan Gedung Pemda', 2002, 'APBD', 'STP (1 Unit)', NULL, NULL, NULL, 'UPRS', '106.79847240', '-6.14692590', ''),
(66, 8, 'IPAL Rusun Tambora Tower', '', 'Dinas Perumahan dan Gedung Pemda', 0, 'APBD', 'Biotech (1 Unit)', NULL, NULL, NULL, 'UPRS', '106.79833690', '-6.14685610', ''),
(67, 8, 'IPAL Rusun Daan Mogot', '', 'Dinas Perumahan dan Gedung Pemda', 0, 'APBD', 'Biotech (3 Unit)', NULL, NULL, NULL, 'UPRS', '106.71658490', '-6.16184350', ''),
(68, 8, 'IPAL Rusun Cipinang Besar Selatan', '', 'Dinas Perumahan dan Gedung Pemda', 0, 'APBD', 'STP (3 Unit)', NULL, NULL, NULL, 'UPRS', '106.88258130', '-6.23149690', ''),
(69, 8, 'IPAL Rusun Rusun Komarudin', '', 'Dinas Perumahan dan Gedung Pemda', 0, 'APBD', 'Biotech (6 unit)', NULL, NULL, NULL, 'UPRS', '106.94291780', '-6.20868010', ''),
(70, 8, 'IPAL Rusun Jatinegara Kaum', '', 'Dinas Perumahan dan Gedung Pemda', 0, 'APBD', 'STP (1 Unit)', NULL, NULL, NULL, 'UPRS', '106.89965860', '-6.21142580', ''),
(71, 8, 'IPAL Rusun Rawa Bebek', '', 'Dinas Perumahan dan Gedung Pemda', 0, 'APBD', 'STP (12 Unit)', NULL, NULL, NULL, 'UPRS', '106.96417510', '-6.20123680', '');

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

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_ipal_data`
-- (See below for the actual view)
--
CREATE TABLE `v_ipal_data` (
`idIpalData` int(11)
,`name` text
,`address` text
,`build_by` text
,`development_year` int(11)
,`source_of_fund` text
,`technology` text
,`size` text
,`capacity` text
,`connection_number` text
,`manager` text
,`longitude` decimal(11,8)
,`latitude` decimal(11,8)
,`photo` text
,`idCategory` int(11)
,`category` varchar(200)
,`pin_image` text
);

-- --------------------------------------------------------

--
-- Structure for view `v_ipal_data`
--
DROP TABLE IF EXISTS `v_ipal_data`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_ipal_data`  AS  select `id`.`idIpalData` AS `idIpalData`,`id`.`name` AS `name`,`id`.`address` AS `address`,`id`.`build_by` AS `build_by`,`id`.`development_year` AS `development_year`,`id`.`source_of_fund` AS `source_of_fund`,`id`.`technology` AS `technology`,`id`.`size` AS `size`,`id`.`capacity` AS `capacity`,`id`.`connection_number` AS `connection_number`,`id`.`manager` AS `manager`,`id`.`longitude` AS `longitude`,`id`.`latitude` AS `latitude`,`id`.`photo` AS `photo`,`ic`.`idCategory` AS `idCategory`,`ic`.`category` AS `category`,`ic`.`pin_image` AS `pin_image` from (`ipal_data` `id` join `ipal_category` `ic` on((`id`.`idCategory` = `ic`.`idCategory`))) ;

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
  MODIFY `idCategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `ipal_data`
--
ALTER TABLE `ipal_data`
  MODIFY `idIpalData` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_users` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
