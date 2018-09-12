-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 11, 2018 at 12:37 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.5.38

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

DROP TABLE IF EXISTS `ipal_category`;
CREATE TABLE IF NOT EXISTS `ipal_category` (
  `id_category` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(200) NOT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ipal_category`
--

INSERT INTO `ipal_category` (`id_category`, `category`) VALUES
(1, 'IPAL Skala Kota'),
(2, 'IPAL Skala Pemukiman - DSDA'),
(3, 'IPAL Skala Pemukiman - Sanimas IDB'),
(4, 'IPLT');

-- --------------------------------------------------------

--
-- Table structure for table `ipal_data`
--

DROP TABLE IF EXISTS `ipal_data`;
CREATE TABLE IF NOT EXISTS `ipal_data` (
  `id_ipal_data` int(11) NOT NULL AUTO_INCREMENT,
  `id_category` int(11) NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `district` text NOT NULL,
  `province` text NOT NULL,
  `bkm_name` text NOT NULL,
  `ksm_name` text NOT NULL,
  `kpp_name` text NOT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL,
  `size` text NOT NULL,
  `sr` int(11) NOT NULL,
  `kk` int(11) NOT NULL,
  `mbr` int(11) NOT NULL,
  `soul` int(11) NOT NULL,
  `photo` text NOT NULL,
  PRIMARY KEY (`id_ipal_data`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id_users` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `is_admin` int(11) NOT NULL,
  PRIMARY KEY (`id_users`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
