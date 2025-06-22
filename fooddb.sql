-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2025 at 02:10 PM
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
  `email` varchar(255) NOT NULL,
  `role` enum('admin','kitchen') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `nama`, `password`, `email`, `role`) VALUES
(2, 'micel', 'd4463fdf7c71c7e96b80f049c23289d5', 'miceldoang123@gmail.com', 'admin'),
(3, 'Julian', '25d55ad283aa400af464c76d713c07ad', 'juliankitchen@gmail.com', 'kitchen');

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
(5, 9, 'Ayam Goreng Spesial', 1),
(6, 10, 'Nasi Goreng Spesial', 2),
(7, 10, 'Es Jeruk', 2),
(8, 11, 'Es Jeruk', 1),
(9, 11, 'Mie Goreng Spesial', 3),
(10, 12, 'Mie Goreng Spesial', 1),
(11, 13, 'Nasi Campur', 1),
(12, 14, 'Nasi Goreng Spesial', 1),
(14, 16, 'Mie Goreng Spesial', 3),
(15, 17, 'Nasi Campur', 2);

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
(9, 'Michael Lark', '16000', '13 Maret 2025'),
(10, 'Isabella cristine', '56000', '15 Maret 2025'),
(11, 'Joe Hart', '53000', '13 April 2025'),
(12, 'Iwan Harley', '15000', '13 April 2025'),
(13, 'Michael thut', '15000', '13 April 2025'),
(14, 'Jhinx hav', '20000', '13 April 2025'),
(16, 'habdulah', '45000', '08 Juni 2025'),
(17, 'habdulah', '30000', '08 Juni 2025');

-- --------------------------------------------------------

--
-- Table structure for table `pending_orders`
--

CREATE TABLE `pending_orders` (
  `id` int(11) NOT NULL,
  `makanan` varchar(250) NOT NULL,
  `customer` varchar(250) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `create_at` varchar(250) NOT NULL,
  `status` enum('pending','ready','cancel','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pending_orders`
--

INSERT INTO `pending_orders` (`id`, `makanan`, `customer`, `jumlah`, `create_at`, `status`) VALUES
(1, 'Mie Goreng Spesial', 'habdulah', 3, '08 Juni 2025', 'ready'),
(2, 'Nasi Campur', 'habdulah', 2, '08 Juni 2025', 'ready'),
(3, 'Nasi Goreng Spesial', 'Kasim Koji', 3, '08 Juni 2025', 'pending'),
(4, 'Es Jeruk', 'Kasim Koji', 3, '08 Juni 2025', 'pending'),
(5, 'Ayam Goreng Spesial', 'Alince', 3, '08 Juni 2025', 'pending'),
(6, 'Nasi Goreng Spesial', 'Alince', 2, '08 Juni 2025', 'pending'),
(7, 'Nasi Campur', 'Alince', 1, '08 Juni 2025', 'pending'),
(8, 'Mie Goreng Spesial', 'Alince', 2, '08 Juni 2025', 'pending'),
(9, 'Es Jeruk', 'Alince', 8, '08 Juni 2025', 'pending');

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `payment_id` (`payment_id`);

--
-- Indexes for table `payment_history`
--
ALTER TABLE `payment_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pending_orders`
--
ALTER TABLE `pending_orders`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `payment_history`
--
ALTER TABLE `payment_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `pending_orders`
--
ALTER TABLE `pending_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`payment_id`) REFERENCES `payment_history` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
