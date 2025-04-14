-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2025 at 06:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fooddb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `nama`, `password`, `email`) VALUES
(2, 'micel', 'd4463fdf7c71c7e96b80f049c23289d5', 'miceldoang123@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `id` int(11) NOT NULL,
  `makanan` varchar(250) NOT NULL,
  `gambar` varchar(250) NOT NULL,
  `type` varchar(250) NOT NULL,
  `harga` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`id`, `makanan`, `gambar`, `type`, `harga`) VALUES
(13, 'Ayam Goreng Spesial', 'uploads\\1740806485137.jpg', 'makanan', 17000),
(14, 'Nasi Goreng Spesial', 'uploads\\1740807289007.jpg', 'makanan', 20000),
(15, 'Nasi Campur', 'uploads\\1740807308264.jpg', 'makanan', 15000),
(17, 'Mie Goreng Spesial', 'uploads\\1740807759046.jpeg', 'makanan', 15000),
(18, 'Es Jeruk', 'uploads\\1740807843589.jpeg', 'minuman', 8000);

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `payment_id` int(11) NOT NULL,
  `makanan` varchar(250) NOT NULL,
  `quantity` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `payment_id`, `makanan`, `quantity`) VALUES
(2, 7, 'Ayam Goreng Spesial', 2),
(3, 7, 'Es Jeruk', 2),
(4, 8, 'Nasi Goreng Spesial', 1),
(5, 9, 'Ayam Goreng Spesial', 1),
(6, 10, 'Nasi Goreng Spesial', 2),
(7, 10, 'Es Jeruk', 2),
(8, 11, 'Es Jeruk', 1),
(9, 11, 'Mie Goreng Spesial', 3),
(10, 12, 'Mie Goreng Spesial', 1),
(11, 13, 'Nasi Campur', 1),
(12, 14, 'Nasi Goreng Spesial', 1);

-- --------------------------------------------------------

--
-- Table structure for table `payment_history`
--

CREATE TABLE `payment_history` (
  `id` int(11) NOT NULL,
  `customer` varchar(250) NOT NULL,
  `totalprice` varchar(250) NOT NULL,
  `create_at` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment_history`
--

INSERT INTO `payment_history` (`id`, `customer`, `totalprice`, `create_at`) VALUES
(7, 'John Doe', '48000', '13 Maret 2025'),
(8, 'Kevin Kart', '20000', '13 Maret 2025'),
(9, 'Michael Lark', '16000', '13 Maret 2025'),
(10, 'Isabella cristine', '56000', '15 Maret 2025'),
(11, 'Joe Hart', '53000', '13 April 2025'),
(12, 'Iwan Harley', '15000', '13 April 2025'),
(13, 'Michael thut', '15000', '13 April 2025'),
(14, 'Jhinx hav', '20000', '13 April 2025');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_history`
--
ALTER TABLE `payment_history`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `payment_history`
--
ALTER TABLE `payment_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
