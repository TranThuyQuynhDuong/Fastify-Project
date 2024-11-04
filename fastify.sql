-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 13, 2024 lúc 09:56 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `fastify`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banner`
--

CREATE TABLE `banner` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `position` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `banner`
--

INSERT INTO `banner` (`id`, `name`, `description`, `link`, `image`, `position`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(6, 'Laptop ', 'Đang có chương trình chào đón sinh viên năm nhất với nhiều chương trình ưu đãi tốt lên đến 20%', '/aa', 'asus-vivobook-15-x1504za-i5-1nj1528w-1.jpg', 'slider-main', '2024-05-28 18:20:28', '2024-06-13 05:59:26', 1, 1, 1),
(11, 'Máy tính bảng ', 'Máy tính bảng giảm giá lên đến 30% hỗ trợ trả góp  0%', '/aaa', 'ipad-air-5-m1-hong-1.jpg', 'slider-main', '2024-05-30 06:23:08', '2024-06-13 05:58:29', 1, 1, 1),
(12, 'iPhone 14 Pro Max ', 'iphone 14 Pro Max đang giảm giá cực sốc ', '/aaa', 'iphone-14-pro-max-purple-1.jpg', 'slider-main', '2024-05-30 06:23:19', '2024-06-13 05:54:37', 1, 1, 1),
(13, 'Máy tính bảng ', 'Máy tính bảng giảm giá sốc lên đến 30%', '/', 'ipad-air-5-m1-xanh-duong-1.jpg', 'slider-main', '2024-05-31 09:01:51', '2024-06-13 05:57:17', 1, 1, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brand`
--

CREATE TABLE `brand` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `icon` varchar(1000) DEFAULT NULL,
  `description` varchar(1000) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `brand`
--

INSERT INTO `brand` (`id`, `name`, `slug`, `icon`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Samsung', 'samsung', 'samsungnew-220x48-1.png', 'sangsung', '2024-04-13 10:43:53', '2024-04-13 10:43:53', 1, NULL, 1),
(2, 'Apple', 'App-le', 'Apple482-b_37.jpg', 'Apple', '2024-04-13 10:59:29', '2024-04-13 10:59:29', 1, NULL, 1),
(3, 'oppo', 'oppo', 'OPPO42-b_5.jpg', 'oppo', '2024-04-13 11:11:33', '2024-04-13 11:11:33', 1, NULL, 1),
(4, 'Asus', 'asus', 'logo-asus-149x40.png', 'asus', '2024-04-22 14:04:09', NULL, 1, NULL, 1),
(5, 'Hp', 'hp', 'logo-hp-149x40-1.png', 'hp', '2024-05-03 06:54:19', NULL, 1, NULL, 1),
(6, 'Xiaomi', 'Xiaomi', 'logo-xiaomi-220x48-5.png', 'Xiaomi', '2024-04-13 10:43:53', '2024-04-13 10:43:53', 1, NULL, 1),
(30, 'Nokia', 'nokia', 'Nokia42-b_21.jpg', 'nokia', '2024-06-13 17:26:40', NULL, 1, NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `sort_order` int(11) NOT NULL,
  `parent` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `slug`, `sort_order`, `parent`, `status`, `created_at`) VALUES
(1, 'Điện thoại', 'i-n-tho-i', 0, 0, 1, 2147483647),
(2, 'Laptop', 'laptop', 1, 0, 1, 2147483647),
(3, 'Phụ kiện', 'ph-ki-n', 4, 0, 1, 2147483647),
(4, 'Tai nghe', 'tai-nghe', 3, 3, 0, 2147483647),
(5, 'Sạc dự phòng', 's-c-d-ph-ng', 5, 3, 2, 2147483647),
(6, 'Máy tính bảng', 'may-tinh-bang', 2, 0, 1, 2147483647),
(7, 'iPhone', 'iphone', 2, 1, 2, 2147483647),
(50, 'Samsung', 'samsung', 2, 1, 2, 2147483647),
(51, 'Laptop Asus', 'laptop-asus', 2, 2, 2, 2147483647);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `config`
--

CREATE TABLE `config` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `author` varchar(500) NOT NULL,
  `email` varchar(255) NOT NULL,
  `logo` varchar(1000) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `zalo` varchar(255) NOT NULL,
  `youtobe` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `description`
--

CREATE TABLE `description` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `chip` varchar(255) NOT NULL,
  `screen` varchar(255) NOT NULL,
  `rear_camera` varchar(255) NOT NULL,
  `front_camera` varchar(255) NOT NULL,
  `operating_system` varchar(255) NOT NULL,
  `ram` varchar(255) NOT NULL,
  `rom` varchar(255) NOT NULL,
  `pin` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `connect` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `description`
--

INSERT INTO `description` (`id`, `product_id`, `chip`, `screen`, `rear_camera`, `front_camera`, `operating_system`, `ram`, `rom`, `pin`, `size`, `connect`, `created_at`, `updated_at`) VALUES
(1, 2, '\r\nApple A17 Pro 6 nhân', 'OLED', 'Chính 48 MP & Phụ 12 MP, 12 MP', '12 MP', 'iOS 17', '\r\n8 GB', '256 GB', '\r\n4422 mAh', 'Dài 159.9 mm - Ngang 76.7 mm - Dày 8.25 mm - Nặng 221 g', 'Hỗ trợ 5G, 1 Nano SIM & 1 eSIM', '2024-05-03 07:22:14', NULL),
(2, 1, '\r\nApple A15 Bionic 6 nhân', 'OLED - 6.1\" - Tần số quét 60 Hz', '2 camera 12 MP', '12 MP', '\r\niOS 15', '4 GB', '128 GB', '3240 mAh', 'Dài 146.7 mm - Ngang 71.5 mm - Dày 7.65 mm - Nặng 173 g', 'Hỗ trợ 5G - 1 Nano SIM & 1 eSIM', '2024-05-03 07:22:14', NULL),
(3, 3, '\r\nMediaTek Dimensity 7050 5G 8 nhân', '\r\nAMOLED', 'Chính 50 MP & Phụ 32 MP, 8 MP', '32 MP', 'Android 13', '8 GB', '128 GB', '5000 mAh33 W', 'Dài 165.65 mm - Ngang 75.98 mm - Dày 7.99 mm - Nặng 192 g', '2 Nano SIM - Hỗ trợ 5G', '2024-05-03 07:22:14', NULL),
(4, 4, 'Snapdragon 8 Gen 3 for Galaxy', ' Dynamic AMOLED 2X', ' Chính 200 MP & Phụ 50 MP, 12 MP, 10 MP', '12 MP', 'Android 14', '12 GB', '256 GB', '5000 mAh', 'Dài 162.3 mm - Ngang 79 mm - Dày 8.6 mm - Nặng 232 g', '2 Nano SIM hoặc 2 eSIM hoặc 1 Nano SIM + 1 eSIM - Hỗ trợ 5G', '2024-04-21 19:14:18', NULL),
(5, 6, 'i511400H2.7GHz', ' 17.3 inch  Full HD (1920 x 1080)  144 Hz', '', ' HD webcam', 'Windows 11 Home SL', '16 GB - DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)', '1 TB SSD M.2 PCIeHỗ trợ thêm 1 khe cắm SSD M.2 PCIe mở rộng (nâng cấp tối đa 1 TB)', ' 3-cell Li-ion, 48 Wh', ' Dài 399 mm - Rộng 269 mm - Dày 23.3 ~ 24.8 mm - Nặng 2.6 kg', 'LAN (RJ45)\r\nJack tai nghe 3.5 mm\r\n1 x USB Type-C 3.2 (hỗ trợ DisplayPort / G-SYNC)\r\n2 x USB 3.2\r\nHDMI\r\n1 x Thunderbolt 4 (hỗ trợ DisplayPort)\r\nBluetooth 5.2Wi-Fi 6 (802.11ax)', '2024-05-03 07:22:14', NULL),
(6, 7, 'Intel Core i5 Raptor Lake - 13500H', '14 inch - WUXGA (1920 x 1200) - 60 Hz', '', 'HD webcam', 'Windows 11 Home SL', '16 GB - DDR4 2 khe (8 GB onboard + 1 khe 8 GB)', '512 GB SSD NVMe PCIe', ' 3-cell Li-ion, 50 Wh', ' Dài 356.8 mm - Rộng 227.6 mm - Dày 19.9 mm - Nặng 1.7 kg', 'Jack tai nghe 3.5 mm\r\n1 x USB 2.0\r\nx USB 3.2\r\nHDMI\r\n1 x USB Type-C 3.2 (hỗ trợ Power Delivery và DisplayPort)\r\nWi-Fi 6E (802.11ax)Bluetooth 5', '2024-04-22 13:47:46', NULL),
(7, 8, 'Intel Core i5 Alder Lake - 1235U', '14 inch - Full HD (1920 x 1080) - 60 Hz', '', '', 'Windows 11 Home SL', '16 GB', '512 GB SSD PCIe M.2 (2280) (Có thể tháo rời, lắp thanh khác tối đa 1 TB (2280))', '3-cell Li-ion, 43 Wh', 'Dài 360.2 mm - Rộng 234 mm - Dày 17.9 mm - Nặng 1.74 kg', 'Jack tai nghe 3.5 mm\r\n2 x USB Type-A\r\nHDMI\r\n1 x USB Type-C (hỗ trợ USB Power Delivery, DisplayPort 1.4)', '2024-05-03 06:57:52', NULL),
(8, 9, 'Intel Core i5 Alder Lake - 1240P', '15.6 inch - Full HD (1920 x 1080) - 60 Hz', '', '', 'Windows 11 Home SL', '8 GB', '512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 2 TB (Gen 3) / 1 TB (Gen 4))', '3 cell, 41.04 Wh - 65 W', 'Dài 322 mm - Rộng 210 mm - Dày 19.9 mm - Nặng 1.53 kg', 'Jack tai nghe 3.5 mm  2 x USB 3.2  HDMI  1 x USB Type-C 3.2 (hỗ trợ Power Delivery và DisplayPort)', '2024-05-03 07:08:32', NULL),
(9, 10, 'Apple A16 Bionic 6 nhân', '6.7\" - Tần số quét 120 Hz - Super Retina XDR (1290 x 2796 Pixels) - OLED', 'Chính 48 MP & Phụ 12 MP, 12 MP', '12 MP', 'iOS 16', '6 GB', '128 GB', '4323 mAh - 20 W', 'Dài 160.7 mm - Ngang 77.6 mm - Dày 7.85 mm - Nặng 240 g', 'Hỗ trợ 5G - 1 Nano SIM & 1 eSIM - Wi-Fi MIMO\r\nWi-Fi hotspot\r\nWi-Fi 802.11 a/b/g/n/ac/ax', '2024-05-03 07:15:45', NULL),
(10, 11, 'Snapdragon 8 Gen 2 for Galaxy', 'Chính: Dynamic AMOLED 2X, Phụ: Super AMOLED', '2 camera 12 MP', '10 MP', 'Android 13', '8 GB', '256 GB', '3700 mAh - 25 W', 'Dài 165.1 mm - Ngang 71.9 mm - Dày 6.9 mm - Nặng 187 g', 'Hỗ trợ 5G - 1 Nano SIM & 1 eSIM -Wi-Fi MIMO\r\nWi-Fi 802.11 a/b/g/n/ac/ax\r\nDual-band (2.4 GHz/5 GHz)', '2024-05-03 07:22:14', NULL),
(11, 13, 'Snapdragon 8 Gen 2 for Galaxy', 'Chính: Dynamic AMOLED 2X, Phụ: Super AMOLED', '2 camera 12 MP', '10 MP', 'Android 13', '8 GB', '256 GB', '3700 mAh - 25 W', 'Dài 165.1 mm - Ngang 71.9 mm - Dày 6.9 mm - Nặng 187 g', 'Hỗ trợ 5G - 1 Nano SIM & 1 eSIM -Wi-Fi MIMO\r\nWi-Fi 802.11 a/b/g/n/ac/ax\r\nDual-band (2.4 GHz/5 GHz)', '2024-05-03 07:22:14', NULL),
(13, 14, 'Apple A13 BionicApple A13 Bionic', ' 10.2\"Retina IPS LCD', '8 MP', '12 MP', ' iPadOS 15', '3 GB', '64 GB', '32.4 Wh (~ 8600 mAh)', 'Dài 250.6 mm - Ngang 174.1 mm - Dày 7.5 mm - Nặng 487 g', 'Hỗ trợ 5G, 1 Nano SIM & 1 eSIM', '2024-05-03 07:22:14', NULL),
(14, 18, 'Chip Apple H2', '', '', '', '', '', '', ' Dùng 30 giờ - Sạc Hãng không công bố', ' Dài 3.09 cm - Rộng 2.18 cm - Cao 2.17 cm', ' Android, iOS, WindowsmacOS (Macbook, iMac)  Bluetooth 5.3', '2024-05-03 07:22:14', NULL),
(23, 15, 'Apple A13 BionicApple A13 Bionic', ' 10.2\"Retina IPS LCD', '8 MP', '12 MP', ' iPadOS 15', '3 GB', '64 GB', '32.4 Wh (~ 8600 mAh)', 'Dài 250.6 mm - Ngang 174.1 mm - Dày 7.5 mm - Nặng 487 g', 'Hỗ trợ 5G, 1 Nano SIM & 1 eSIM', '2024-05-03 07:22:14', NULL),
(24, 16, ' Snapdragon 695 8 nhân', ' TFT LCD  1200 x 1920 Pixels', ' 8 MP', ' 5 MP', ' Android 13', ' 4 GB', ' 64 GB', ' 7040 mAh', 'Dài 257.1 mm - Ngang 168.7 mm - Dày 6.9 mm - Nặng 491 g', ' Hỗ trợ 5G, 1 Nano SIM', '2024-05-03 07:22:14', NULL),
(25, 17, 'Snapdragon 680 8 nhân', ' TFT LCD  1200 x 1920 Pixels', ' 8 MP', ' 5 MP', ' Android 13', ' 8 GB', ' 128 GB', ' 8000 mAh', 'Dài 255.53 mm - Ngang 167.08 mm - Dày 7.36 mm - Nặng 478 g', 'Wi-Fi 802.11 a/b/g/n/acDual-band  Hỗ trợ 5G, 1 Nano SIM ', '2024-05-03 07:22:14', NULL),
(26, 27, ' Hãng không công bố', ' Hãng không công bố', ' Hãng không công bố', ' Hãng không công bố', '4000 DPI', ' Hãng không công bố', ' Hãng không công bố', '1 viên pin AA', '73.8 g (bao gồm hộp)', 'WindowsmacOS (MacBook, iMac)', '2024-06-13 19:37:07', NULL),
(28, 28, ' Hãng không công bố', ' Hãng không công bố', ' Hãng không công bố', ' Hãng không công bố', ' Bluetooth 5.2', ' Hãng không công bố', ' Hãng không công bố', 'Dùng 28 giờ - Sạc 3 giờ', 'Dài 2.1 cm - Rộng 2.2 cm - Cao 3.4 cm', 'HeyMelody App', '2024-06-13 19:40:26', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `discount`
--

CREATE TABLE `discount` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(1000) NOT NULL,
  `price_sale` float NOT NULL,
  `price_percent` int(11) NOT NULL,
  `short_description` varchar(1000) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `discounted_products`
--

CREATE TABLE `discounted_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `sale_id` bigint(20) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `qty` int(11) NOT NULL,
  `qty_sold` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `discounted_products`
--

INSERT INTO `discounted_products` (`id`, `product_id`, `sale_id`, `start_time`, `end_time`, `qty`, `qty_sold`, `created_at`, `updated_at`, `created_by`, `status`) VALUES
(1, 1, 2, '2024-04-01 19:46:12', '2024-05-31 19:46:12', 5, 0, '2024-06-13 15:34:43', NULL, 0, 2),
(2, 2, 1, '2024-05-31 11:48:18', '2024-06-29 11:48:18', 2, 0, '2024-05-31 08:35:28', NULL, 0, 1),
(3, 3, 1, '2024-05-31 11:48:18', '2024-06-29 11:48:18', 2, 0, '2024-06-13 17:19:05', NULL, 0, 0),
(4, 4, 1, '2024-05-31 11:48:18', '2024-06-29 11:48:18', 2, 0, '2024-05-31 08:35:28', NULL, 0, 1),
(5, 5, 1, '2024-05-31 11:48:18', '2024-06-29 11:48:18', 2, 0, '2024-05-31 08:35:28', NULL, 0, 1),
(7, 18, 2, '2024-06-02 01:48:26', '2024-06-15 01:48:26', 3, 0, '2024-06-13 05:32:35', NULL, 1, 1),
(10, 10, 1, '2024-06-13 00:00:00', '2024-06-27 00:00:00', 5, 0, '2024-06-12 04:49:58', NULL, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `image`
--

CREATE TABLE `image` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(1000) NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `image`
--

INSERT INTO `image` (`id`, `image`, `product_id`, `created_at`, `updated_at`) VALUES
(1, 'iphone-13-1.jpg', 1, '2024-04-24 13:12:58', NULL),
(2, 'iphone-13-2.jpg', 1, '2024-04-24 13:15:13', NULL),
(3, 'iphone-15-pro-max-black-1-1.jpg', 2, NULL, NULL),
(5, 'iphone-15-pro-max-white-1-3.jpg', 2, NULL, NULL),
(6, 'iphone-15-pro-max-tu-nhien-1-1.jpg', 2, NULL, NULL),
(7, 'iphone-15-pro-max-tu-nhien-1-1.jpg', 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `note` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `name`, `phone`, `email`, `address`, `note`, `created_at`, `updated_at`, `updated_by`, `status`) VALUES
(10, 12, 'thiện', '0387998788', '', 'đỗ xuân hợp', 'aaaaaa', '2024-06-05 06:32:09', NULL, NULL, 1),
(12, 12, 'thiện', '0387998788', '', 'thiện', 'bom hàng', '2024-06-05 07:15:52', NULL, NULL, 3),
(13, 12, 'aaaa', '123123', '', 'aaaaa', '', '2024-06-07 12:14:08', NULL, NULL, 0),
(14, 35, 'lê ngọc thiện', '0387998788', 'thien@gmail.com', 'dĩ an bình dương', 'aaaaa', '2024-06-11 16:23:09', NULL, NULL, 0),
(15, 35, 'Ngoc Thiện', '012345678', '', 'dĩ an bình dương', '', '2024-06-12 07:39:22', NULL, NULL, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_detail`
--

CREATE TABLE `order_detail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(11) UNSIGNED NOT NULL,
  `product_id` int(11) UNSIGNED NOT NULL,
  `price` double(8,2) NOT NULL,
  `qty` int(11) UNSIGNED NOT NULL,
  `discount` double(8,2) NOT NULL,
  `total` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `order_detail`
--

INSERT INTO `order_detail` (`id`, `order_id`, `product_id`, `price`, `qty`, `discount`, `total`) VALUES
(5, 10, 13, 11.29, 3, 0.00, 0),
(8, 12, 10, 27390.00, 1, 0.00, 0),
(9, 12, 9, 16190.00, 1, 0.00, 0),
(10, 13, 2, 27891.00, 1, 0.00, 0),
(11, 13, 6, 22.00, 5, 0.00, 0),
(12, 14, 13, 11.29, 2, 0.00, 0),
(13, 14, 11, 16090.00, 1, 0.00, 0),
(14, 14, 17, 11090.00, 1, 0.00, 0),
(15, 15, 2, 27891.00, 1, 0.00, 0),
(16, 15, 14, 16090.00, 1, 0.00, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `post`
--

CREATE TABLE `post` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `topic_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `description_1` mediumtext NOT NULL,
  `description_2` mediumtext NOT NULL,
  `description_3` mediumtext NOT NULL,
  `image_1` varchar(1000) DEFAULT NULL,
  `image_2` varchar(1000) DEFAULT NULL,
  `image_3` varchar(1000) DEFAULT NULL,
  `type` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `post`
--

INSERT INTO `post` (`id`, `topic_id`, `title`, `slug`, `description_1`, `description_2`, `description_3`, `image_1`, `image_2`, `image_3`, `type`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 28, 'iPad Air M2 giá chỉ từ 16.99 triệu, trả góp 0% chỉ cần trả trước 8.49 triệu, góp 50K mỗi ngày, quá rẻ', 'ipad-air-m2-gi-ch-t-16-99-tri-u-tr-g-p-0-ch-c-n-tr-tr-c-8-49-tri-u-g-p-50k-m-i-ng-y-qu-r', 'iPad Air 6 M2 hay còn gọi là iPad Air M2 đã ra mắt cách đây khoảng 1 tháng, sản phẩm lần này gây ấn tượng mạnh bởi cấu hình đã nâng cấp lên con chip M2 có hiệu năng khủng. Thế Giới Di Động đã sắp về hàng tất tần tật các phiên bản của iPad Air 6 với nhiêu ưu đãi khủng, xem ngay bên dưới nhé!', 'Thời gian: Hàng sắp về, dự kiến trong tháng 06.\n\nKhuyến mãi:\n\nTrả góp 0%. Trả trước từ 8.49 triệu, góp chỉ 50K mỗi ngày.\nThu cũ lên trời trợ giá đến 2 triệu.\nLưu ý: Khuyến mãi có thể thay đổi tuỳ vào thời điểm hoặc số lượng sản phẩm, để xem chi tiết nhất, bạn vào trang sản phẩm và để lại thông tin, nhân viên sẽ liên hệ để tư vấn cụ thể hơn nhé!', 'Bạn sẽ có một chiếc tablet với hiệu năng siêu mạnh bởi sức mạnh của con chip Apple M2, mang lại nhiều đột phá cho CPU, đồ hoạ, Neural Engine và năng lực AI mạnh mẽ. Dù hãng không công bố dung lượng pin cụ thể nhưng iPad trước giờ luôn nổi tiếng bởi độ \"cầm pin\", bạn sẽ thoải mái hoạt động làm việc, vui chơi giải trí cả ngày.Về camera, máy có camera trước Ultra Wide 12 MP, vị trí ống kính năm nay đã được đặt trên cạnh ngang cho trải nghiệm video call rộng rãi và mới mẻ hơn. Camera sau 12 MP cũng đáp ứng đủ toàn bộ các nhu cầu chụp ảnh hằng ngày, chụp tài liệu dành cho bạn.\n\nCuối cùng, với việc ra mắt Apple Pencil Pro thì trải nghiệm iPad Air 6 sẽ càng tuyệt vời hơn.', 'apple-ipad-air-intro-1280x720.jpg', 'ipadair-1280x721.jpg', 'ipad-air-m2-13-inch-wifi-cellular-128gb-desktop-1.jpg', 'news', '2024-05-31 13:24:33', '2024-06-11 13:51:37', 1, NULL, 1),
(11, 2, 'Chỉ từ 2.39 triệu đã có thể mua loa Marshall, thiết kế cực đẹp, trải nghiệm âm nhạc đỉnh cao', 'post-1', 'Loa Marshall từ lâu không đơn giản là một sản phẩm để nghe, mà còn là một món đồ decor cực sang trọng tại nơi nó an vị. Chỉ từ 2.39 triệu đồng, bạn đã có thể sử hữu loa Marshall với thiết kế đẹp cùng chất lượng âm thanh ấn tượng.  Hôm nay, Thế Giới Di Động sale tất tần tật với giá cực ngon, mời bạn xem ngay.\nThời gian ưu đãi: Đến hết 30/06/2024.\n\nLưu ý:\n\nKhuyến mãi có thể kết thúc sớm trước thời hạn nếu hết số lượng sản phẩm hoặc thông tin khuyến mãi có thay đổi.\nÔ sản phẩm chưa hiển thị ưu đãi chính xác, để hiện ưu đãi chính xác, khách cần bấm Xem chi tiết.', 'Với sự kết hợp tinh tế giữa phong cách cổ điển và công nghệ hiện đại, Marshall Willen hứa hẹn đem đến cho bạn những phút giây giải trí tuyệt vời nhất. Loa Bluetooth ấn tượng với thời gian sử dụng lên đến 15 tiếng và thời gian sạc nhanh chóng chỉ trong vòng 3 tiếng. Điều này mang lại trải nghiệm nghe nhạc liền mạch và tiện lợi cho không bị giới hạn bởi năng lượng.\n\nLoa Marshall này có tổng công suất mạnh mẽ lên đến 10 W. Điều này mang lại trải nghiệm âm nhạc sôi động và mạnh mẽ, phù hợp cho cả những buổi tiệc nhỏ hoặc các hoạt động ngoài trời. Mẫu loa sở hữu chất lượng âm thanh tiên tiến, đặc biệt với công nghệ âm thanh Hi-Res Audio. Điều này mang lại trải nghiệm nghe nhạc chân thực và chi tiết, cho phép bạn thưởng thức mọi nốt nhạc với độ rõ nét cao và âm sắc tự nhiên.', 'Thiết kế của Marshall Willen là sự kết hợp tinh tế giữa vẻ đẹp cổ điển và tính hiện đại. Với vỏ ngoài được làm từ chất liệu chất lượng cao và các chi tiết kim loại bền bỉ, loa mang đến sự sang trọng và đẳng cấp. Loa Bluetooth Marshall Willen còn được trang bị tính năng chống nước và chống bụi với chuẩn IP67. Điều này có nghĩa là loa có khả năng chịu được nước và bụi một cách hiệu quả, cho phép bạn thưởng thức âm nhạc mà không cần phải lo lắng về điều kiện môi trường.', 'marshall-1280x720.jpeg', 'marshall-3-1280x853.jpeg', 'marshall-2-1280x853.jpeg', 'news', '2024-05-31 12:44:41', NULL, 1, NULL, 1),
(13, 2, 'Mời bạn tải Full bộ hình nền iOS 18 với độ phân giải cao siêu đẹp, thử ngay', 'post-3', 'iOS 18 không chỉ mang đến những tính năng mới mẻ mà còn làm say lòng người dùng bởi những hình nền độc đáo và đầy màu sắc. Bạn muốn khoác lên chiếc điện thoại iPhone của mình \"chiếc áo mới\" đậm chất iOS 18? Đừng bỏ lỡ bài viết này! Mình sẽ hướng dẫn bạn cách tải hình nền iOS 18 siêu đơn giản và nhanh chóng, giúp bạn thể hiện cá tính và phong cách riêng trên chiếc điện thoại của mình.\nXem thêm: Hướng dẫn cách cập nhật iOS 18 Beta với nhiều tính năng mới siêu hay và bảo mật hơn\n\nCách tải hình nền iOS 18\nBước 1: Nhấn vào đường link bên dưới để tiến hành tải bộ hình nền iOS 18 về điện thoại của mình.\n\nTải hình nền iOS 18 mới nhất\nBước 2: Mở ứng dụng Cài đặt trên điện thoại lên > Chọn vào mục Hình nền > Nhấn vào biểu tượng dấu Cộng để tiến hành thêm mới ảnh nền.', 'Bước 3: Chọn mục Ảnh và tiến hành Chọn một trong những ảnh của bộ hình nền iOS 18 mà bạn vừa tải về > Nhấn Thêm là xong. ', 'Với những cách đơn giản trên, bạn đã có thể dễ dàng tải về và khoác lên chiếc iPhone của mình những hình nền iOS 18 độc đáo và ấn tượng. Hãy thỏa sức sáng tạo, thể hiện cá tính riêng và biến chiếc điện thoại của bạn trở nên thật phong cách. Đừng quên chia sẻ những hình nền tuyệt đẹp mà bạn tìm được với bạn bè và người thân nhé! Cảm ơn bạn đã theo dõi bài viết.\n\nSự kiện WWDC24 vừa kết thúc có nhiều thông tin hấp dẫn của Apple, nếu bạn đã vô tình bỏ lỡ thì hãy xem lại các bài viết bằng cách nhấn vào nút cam bên dưới nhé.', 'ios-thumb-1280x720.jpg', 'nenn-1-1280x1386.jpg', 'nenn-2-1280x1386.jpg', 'news', '2024-05-31 13:16:30', '2024-05-31 13:39:22', 1, NULL, 1),
(14, 2, '[WWDC 2024] macOS Sequoia ra mắt: Giao diện được đổi mới, nhiều tính năng thông minh và có thể chơi được game', 'wwdc-2024-macos-sequoia-ra-m-t-giao-di-n-c-i-m-i-nhi-u-t-nh-n-ng-th-ng-minh-v-c-th-ch-i-c-game', 'Tại sự kiện WWDC 2024, Apple đã chính thức cho ra mắt hệ điều hành macOS Sequoia hoàn toàn mới. Đây có thể được coi là bước ngoặt mới của Apple trong suốt cả lịch sử phát triển. macOS giờ đây đã trở nên thông minh hơn và là một hệ điều hành đáng tin cậy dành cho người dùng. \nTính năng Phản Chiếu iPhone mới\nVới macOS Sequoia, người dùng giờ đây đã có thể sử dụng iPhone để phản chiếu màn hình lên trực tiếp các thiết bị Mac. Cùng với đó, bạn có thể chia sẻ trực tiếp file từ máy Mac lên iPhone thông qua trình kéo thả mới. ', 'Tính năng Họp Trực Tuyến Qua Video mới\nTrên macOS Sequoia, giờ đây bạn có thể trình chiếu màn hình và thuyết trình trực tiếp trên các ứng dụng như Facetime và Zoom. Với Họp Trực Tuyến Qua Video, tính năng này có thể tự động làm mờ nền phía sau.', 'Ứng dụng Mật Khẩu mới \nTrên macOS Sequoia, Apple cũng đề cao vấn đề bảo mật với ứng dụng Mật Khẩu mới. Với Mật Khẩu, bạn hoàn toàn có thể lưu trữ những mật khẩu từ Wi-Fi đến những mật khẩu trên ứng dụng và trang web. Ứng dụng Mật Khẩu cũng hoàn toàn được hỗ trợ ứng dụng iCloud trên hệ điều hành Windows. Những Cập Nhật Quan Trọng trên Safari\nTrên Safari, Apple đã sử dụng công nghệ máy học để học hỏi và quan sát những gì bạn quan tâm khi đang sử dụng trình duyệt Safari. ', 'thumb3-1280x720.jpg', 'Apple9-1280x720.jpg', 'Apple10-1280x720.jpg', 'news', '2024-05-31 13:27:45', '2024-06-12 03:12:49', 1, NULL, 1),
(19, 28, 'a b', 'a-b', 'aaa', 'aaaa', 'aaa', 'hp-pavilion-15-eg2081tu-i5-7c0q4pa-2.jpg', 'hp-pavilion-x360-14-ek1049tu-i5-80r27pa-glr-abc-1.jpg', 'asus-vivobook-15-x1504za-i5-1nj1528w-6.jpg', 'news', '2024-06-13 16:38:31', NULL, 1, NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `price` float(8,3) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `image_detail` varchar(1000) NOT NULL,
  `detail_1` mediumtext NOT NULL,
  `detail_2` mediumtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `qty` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `category_id`, `brand_id`, `name`, `slug`, `price`, `image`, `image_detail`, `detail_1`, `detail_2`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `qty`) VALUES
(1, 1, 2, 'Điện thoại iPhone 13 128GB', 'DJien-thoai-iPhone-13-128GB', 14090.000, 'iphone-12-xanh-la-1-1-org.jpg', 'iphone-13-1.jpg', 'Con chip Apple A15 Bionic siêu mạnh được sản xuất trên quy trình 5 nm giúp iPhone 13 đạt hiệu năng ấn tượng, với CPU nhanh hơn 50%, GPU nhanh hơn 30% so với các đối thủ trong cùng phân khúc.', 'Cụm camera kép phía sau trên iPhone 13 đều sở hữu độ phân giải 12 MP, camera chính giúp thu được nhiều ánh sáng hơn, tăng khả năng thu sáng lên đến 47% nên chất lượng ảnh chụp cũng cải thiện hơn so với bản tiền nhiệm. Điện thoại có camera góc siêu rộng cho góc nhìn 120 độ giúp thu được nhiều chi tiết hơn, dễ dàng ghi lại những khung cảnh núi non hùng vĩ, ảnh chụp nhóm đông người.', '2024-04-21 13:59:28', '2024-06-13 19:28:59', 1, NULL, 1, 100),
(2, 1, 2, 'iPhone 15 Pro Max 256GB', 'iPhone-15-Pro-Max-256GB', 30990.000, 'iphone-15-pro-max-blue-1-1.jpg', 'iphone-15-pro-130923-102854.jpg', 'iPhone 15 Pro Max tiếp tục sẽ là một chiếc điện thoại có màn hình và mặt lưng phẳng đặc trưng đến từ nhà Apple, mang lại vẻ đẹp thanh lịch và sang trọng.\r\n\r\nChất liệu chủ đạo của iPhone 15 Pro Max vẫn là khung kim loại và mặt lưng kính cường lực, tạo nên sự bền bỉ và chắc chắn. Tuy nhiên, với công nghệ tiên tiến, khung này đã được nâng cấp thành chất liệu titanium thay vì thép không gỉ hay nhôm ở những thế hệ trước.', 'Dynamic Island là một tính năng độc đáo mà iPhone 15 Pro Max mang đến. Đây là một phần của màn hình dành riêng cho thông báo và tương tác nhanh chóng mà không làm gián đoạn trải nghiệm xem nội dung chính. Dynamic Island giúp bạn dễ dàng kiểm tra thông báo, kiểm soát âm nhạc, và thậm chí là xem bản đồ mà không cần thoát khỏi ứng dụng bạn đang sử dụng.', '2024-04-21 14:49:02', '2024-06-13 19:26:43', 1, NULL, 1, 100),
(3, 1, 3, 'Điện thoại OPPO A58 8GB 256 GB', 'DJien-thoai-OPPO-A58-8GB-256-GB', 5490.000, 'oppo-a58-xanh-8gb-1.jpg', 'oppo-a58-note-new.jpg', 'Thị trường điện thoại di động ngày nay, OPPO A58 8GB là một trong những sản phẩm nổi bật với thiết kế vuông vức và hiện đại. Được thiết kế với mục tiêu tối ưu hóa trải nghiệm người dùng, chiếc điện thoại này mang đến một loạt tính năng ấn tượng trong một thiết kế thon gọn và nhẹ nhàng.', 'Một điểm nổi bật đầu tiên của OPPO A58 là thiết kế vuông vức, mặt lưng và màn hình phẳng, tạo nên vẻ ngoài thanh lịch và hiện đại. Mặt lưng được làm bằng thuỷ tinh hữu cơ với kiểu nhám nhẹ, giúp hạn chế bám bẩn và dấu vân tay, đồng thời mang lại cảm giác cầm nắm ổn định và thoải mái. Điều này giúp người dùng dễ dàng bảo vệ thiết bị mà không cần lo lắng về vết trầy xước không mong muốn.\r\nVới độ mỏng ấn tượng chỉ với 7.99 mm, OPPO A58 trở thành một trong những chiếc điện thoại mỏng nhất trong phân khúc của mình. Điều này giúp điện thoại trông rất sang trọng và dễ dàng để bỏ vào túi áo hay túi xách mà không gây cảm giác nặng nề. OPPO A58 được trang bị tấm nền LTPS LCD, công nghệ màn hình được đánh giá cao trong ngành công nghệ hiển thị. Điểm mạnh của tấm nền này là khả năng tái tạo màu sắc rõ ràng và chân thực, giúp hình ảnh và video hiển thị trên màn hình trở nên sống động và chất lượng cao.\r\nOPPO A58 sở hữu độ phân giải Full HD+ (1080 x 2412 Pixels), mang đến cho bạn trải nghiệm hình ảnh rõ ràng và sắc nét. Với số lượng điểm ảnh cao, màn hình điện thoại hiển thị hình ảnh và văn bản một cách chi tiết, giúp bạn thưởng thức các bộ phim, video và nội dung trực tuyến một cách trọn vẹn. Điều này cũng giúp cho việc đọc, lướt web và làm việc trên điện thoại trở nên dễ dàng và thoải mái hơn.\r\nVới màn hình rộng 6.72 inch, OPPO A58 là điện thoại lý tưởng cho những người yêu thích giải trí di động. Kích thước lớn này cho phép bạn thưởng thức các nội dung giải trí như phim ảnh, video và trò chơi với trải nghiệm hấp dẫn và sống động. Đồng thời, kích thước màn hình rộng cũng hỗ trợ công việc đọc sách, lướt web và làm việc hiệu quả trên màn hình.', '2024-04-21 13:59:28', '2024-06-13 19:30:59', 1, NULL, 1, 100),
(4, 1, 1, 'Điện thoại Samsung Galaxy S24 Ultra', 'DJien-thoai-Samsung-Galaxy-S24-Ultra', 32990.000, 'samsung-galaxy-s24-ultra-den-1.jpg', 'samsung-galaxy-s24-ultra-note.jpg', 'Samsung Galaxy S24 Ultra mẫu điện thoại cao cấp được ra mắt vào đầu năm 2024, sản phẩm tiếp tục kế thừa và cải tiến từ thế hệ trước. Điểm đặc biệt là sử dụng chip Snapdragon 8 Gen 3 for Galaxy, camera 200 MP và tích hợp nhiều tính năng AI.\r\nThiết kế sang trọng và có sử dụng Titanium\r\nThiết kế của Galaxy S24 Ultra có thể xem là một điểm nâng cấp nổi bật trong dòng điện thoại flagship của Samsung ở năm 2024. Bên cạnh đó, sự thay đổi này cũng tạo nên một số ý kiến trái chiều cho rằng hãng đang lười làm mới sản phẩm của mình khi đem nguyên kiểu thiết kế cũ sang và thay đổi ở phần chất liệu.\r\n\r\n', 'Không chỉ mặt lưng, bốn góc của điện thoại cũng được làm 90 độ như Samsung Galaxy S23 Ultra. Phải công nhận kiểu thiết kế này đẹp, sang và ấn tượng. Tuy nhiên, kích thước của Galaxy S24 Ultra cũng khá lớn nên các góc vuông này vô tình tạo nên một vài điểm hạn chế như: Gây cấn khi bỏ vào túi quần trước, hay cầm ngang điện thoại khi chơi game,...\r\n\r\nỞ phần khung viền, năm nay Samsung làm nó lớn hơn so với thế hệ tiền nhiệm, nó có phần bo cong nhẹ ở vị trí giao nhau với mặt lưng và màn hình nên khi cầm cực kỳ đã tay. Kể cả khi cầm chặt, mình dường như không cảm thấy bị cấn một tí nào cả.\r\n\r\n', '2024-04-21 19:12:22', '2024-06-13 19:24:38', 1, NULL, 1, 100),
(6, 2, 4, 'Laptop Asus TUF Gaming A15 FA506NF R5 7535HS/16GB/512GB/4GB RTX2050/144Hz/Win11 (HN012W)', 'Laptop-Asus-TUF-Gaming-A15-FA506NF-R5-7535HS16GB512GB4GB-RTX2050144HzWin11-(HN012W)', 17990.000, 'asus-tuf-gaming-a15-fa506nf-r5-hn012w-glr-1.jpg', 'asus-tuf-gaming-f17-fx706hf-i5-hx390w-glr-note.jpg', 'Một mẫu laptop chiến game đến từ thương hiệu Asus vừa được lên kệ tại Thế Giới Di Động, sở hữu những thông số cấu hình vượt trội với AMD Ryzen 5 dòng HS mạnh mẽ, card rời RTX 2050 và có một mức giá cân đối. Laptop Asus TUF Gaming A15 FA506NF R5 7535HS (HN012W) chắc chắn sẽ là công cụ tuyệt vời để thoả mãn mọi nhu cầu giải trí của anh em.', ' Bộ vi xử lý AMD Ryzen 5 7535HS cùng card đồ họa rời NVIDIA GeForce RTX 2050 4 GB cung cấp một hiệu năng xử lý mạnh mẽ, thừa sức để chỉnh sửa hình ảnh, render video chuyên nghiệp trên Photoshop, AI,... đồng thời chiến các tựa game hot ở mức cấu hình Medium đến High.\r\n Laptop Asus với bộ nhớ RAM 16 GB chuẩn DDR5 cho phép người dùng đa nhiệm trơn tru, chạy các trò chơi hay phần mềm đồ họa nặng mà không gặp hiện tượng giật lag. Máy có khả năng nâng cấp RAM lên đến 32 GB, giúp cho hệ thống nâng cao hiệu suất, đáp ứng mượt mà cho nhu cầu sử dụng cao hơn.\r\n Ổ cứng SSD 512 GB NVMe PCIe 4.0 không chỉ có tốc độ truy xuất dữ liệu cao, giúp tối ưu khởi động máy mà còn cho phép người dùng lưu trữ nhiều ứng dụng, dữ liệu và trò chơi.\r\n Màn hình laptop 15.6 inch được phủ tấm nền IPS độ phân giải Full HD (1920 x 1080) có khả năng tái tạo màu tốt, hình ảnh hiển thị sắc nét cùng góc nhìn bao quát và đều màu lên đến 178 độ. Công nghệ Anti Glare hỗ trợ chống chói, lóa mờ trên màn hình khi bạn sử dụng ở nơi có cường độ ánh sáng mạnh.\r\n Tần số quét 144 Hz tích hợp công nghệ làm mới Adaptive-Sync giúp loại bỏ những vấn đề như giật, xé ảnh cũng như có độ trễ hình thấp mang lại cho bạn trải nghiệm giải trí tuyệt vời, thích hợp với những game có tiết tấu và tốc độ chuyển cảnh nhanh.\r\n Một số những thông số về màu sắc cơ bản như 62.5% sRGB, 47.34% Adobe RGB và 45% NTSC cũng đáp ứng được những điều kiện tối thiểu về màu sắc, để bạn có thể thoải mái tinh chỉnh đồ hoạ một cách bán chuyên.\r\n Hệ thống loa đạt chuẩn Hi-Res có khả năng tái tạo chất âm 3D từ nhiều hướng nhờ tích hợp với công nghệ DTS Audio cung cấp chất âm sống động, tách biệt rõ từng sắc âm trầm bổng, hỗ trợ bạn cảm nhận rõ hơn từng giai điệu bài hát, những thước phim hay những trận game kịch tính.', '2024-04-22 13:37:05', '2024-06-13 19:22:44', 1, NULL, 1, 100),
(7, 2, 4, 'Laptop Asus Vivobook 15 X1504ZA i5 1235U/16GB/1TB/Win11 (NJ1528W)', 'Laptop-Asus-Vivobook-15-X1504ZA-i5-1235U16GB1TBWin11-(NJ1528W)', 18999.000, 'asus-vivobook-15-x1504za-i5-1nj1528w-1.jpg', 'asus-vivobook-15-oled-a1505va-i5-l1341w-note.jpg', 'Đừng chần chừ mà hãy sở hữu ngay mẫu laptop kiểu dáng sang trọng, cấu hình ổn định cùng đa dạng các tính năng tân tiến khác tại Thế Giới Di Động. Laptop Asus Vivobook 15 X1504ZA i5 1235U (NJ1528W) hứa hẹn sẽ là người đồng hành đáng tin cậy cho mọi người dùng trong công việc và học tập.', ' Laptop Asus sở hữu kiểu dáng bắt mắt, vẻ ngoài thanh mảnh cùng tông màu xanh vô cùng \"hợp thời\" khiến thiết bị như sở hữu nét thẩm mỹ, có thể phù hợp với bất cứ hoàn cảnh hay môi trường nào. Mảnh mai nhưng vô cùng chắc chắn với lớp vỏ nhựa cao cấp cùng tiêu chuẩn độ bền quân đội MIL STD 810H, chỉ cần sắm thêm một túi chống sốc là bạn hoàn toàn có thể tự tin mang máy đến bất cứ đâu.\r\n Chức năng bảo mật vân tay được tích hợp trực tiếp ngay trên phần TouchPad hỗ trợ bạn truy cập thiết bị vừa an toàn lại không mất công nhập từng phím mỗi khi mở lên.\r\n Dọc hai bên thân laptop là đa dạng các cổng giao tiếp như USB Type-C, USB 2.0, Jack tai nghe 3.5 mm, USB 3.2 và HDMI để thuận tiện kết nối khi cần thiết.\r\n Sở hữu CPU Intel Core i5 1235U thế hệ 12 hiện đại, hiệu năng dư sức cân các tệp Word dài vài chục trang hoặc file Excel nặng, đồng thời dòng CPU hậu tố U này cũng làm giảm lượng điện tiêu thụ cho thiết bị đi đáng kể, kéo dài thời lượng và hiệu suất sử dụng laptop.\r\n GPU tích hợp Intel Iris Xe Graphics mang đến khả năng dựng xuất hình ảnh vô cùng tốt, người dùng có thể tự tin làm việc đồ hoạ thông dụng trên Photoshop, AI, Figma,... dựng các video ngắn và cùng với đó là chiến thoải mái các tựa game đang thịnh hành với mức đồ hoạ tinh chỉnh.\r\n Đa nhiệm tuyệt vời nhờ mức RAM 16 GB thừa sức cho các bạn vừa xem phim giải trí vừa học online trên Microsoft Teams, một lúc chạy nhiều tác vụ như trình duyệt, các ứng dụng học tập,... Ổ cứng SSD 1 TB cung cấp không gian lưu trữ cá nhân khá rộng rãi, lưu trữ hiệu quả các tài liệu, video,...\r\n Laptop Asus Vivobook sở hữu màn hình 15.6 inch với thiết kế NanoEdge viền mỏng cả ba cạnh, tỷ lệ hiển thị trên khung hình thoải mái hơn khiến người dùng hoàn toàn chuyên tâm vào công việc. Hơn nữa, độ phân giải Full HD (1920 x 1080) đảm bảo nội dung luôn được thể hiện với độ sắc nét cao, màu sắc tái tạo chân thực và sống động.', '2024-04-22 13:44:16', '2024-06-13 19:19:44', 1, NULL, 1, 100),
(8, 2, 5, 'Laptop HP Pavilion 15 eg2081TU i5 1240P/16GB/512GB/Win11 (7C0Q4PA)', 'Laptop-HP-Pavilion-15-eg2081TU-i5-1240P16GB512GBWin11-(7C0Q4PA)', 20990.000, 'hp-pavilion-15-eg2081tu-i5-7c0q4pa-2.jpg', 'hp-pavilion-15-eg2088tu-i7-7c0r0pa-note.jpg', 'Khả năng đáp ứng hiệu quả và mượt mà mọi tác vụ làm việc và giải trí nhờ sức mạnh của chip Intel Gen 12 cùng RAM 16 GB, laptop HP Pavilion 15 eg2081TU i5 1240P (7C0Q4PA) chắc chắn sẽ rất phù hợp với những bạn sinh viên, học sinh cũng như người đi làm.', ' Laptop sử dụng chip Intel Core i5 1240P có tốc độ ép xung cao 4.4 GHz kết hợp cùng card Intel Iris Xe Graphics cho hiệu năng vượt trội để thực hiện mượt mà mọi tác vụ soạn thảo văn bản và làm việc trên Word, Excel,... hay xem phim giải trí. Bạn còn có thể tạo ra các ấn phẩm 2D, chỉnh sửa video ngắn, hình ảnh cũng như chơi các tựa game thịnh hành nhờ khả năng xử lý đồ họa nâng cao đến từ GPU.\r\n Bộ nhớ RAM 16 GB có hỗ trợ nâng cấp tối đa lên đến 32 GB cho người dùng khả năng đa nhiệm nhanh chóng, chuyển qua lại giữa các tab làm việc một cách trơn tru, vận hành nhiều tác vụ mà không bị đơ hay giật lag.\r\n Laptop HP với ổ cứng SSD NVMe PCIe hỗ trợ truy xuất và khởi động các ứng dụng nhanh hơn đáng kể so với những ổ HDD thông thường, đồng thời dung lượng 512 GB cũng mang đến không gian lưu trữ thoải mái cho tệp tin và tài liệu của bạn.\r\n Màn hình kích thước 15.6 inch có công nghệ BrightView cùng độ phân giải Full HD (1920 x 1080) đem lại không gian trải nghiệm nội dung bao quát, khung hình rõ nét cùng màu sắc tươi tắn cho những trải nghiệm xem phim hay làm việc của bạn. \r\nCông nghệ Realtek High Definition Audio mang đến chất âm sống động và được khuếch đại với tần số cao, đắm chìm bạn vào những trải nghiệm phim ảnh, âm nhạc tuyệt vời.\r\n Máy được thiết kế với kiểu dáng thanh lịch và tinh tế, vỏ máy bằng nhựa và chiếu nghỉ tay được chế tác với kim loại cũng mang đến tính bền bỉ, chắc chắn nhất định trong quá trình sử dụng. Ngoài ra, khối lượng tổng thể 1.72 kg vẫn rất dễ dàng cho người dùng có thể mang theo laptop mọi lúc, mọi nơi.', '2024-05-03 06:55:35', '2024-06-13 19:17:28', 1, NULL, 1, 100),
(9, 2, 5, 'Laptop HP Pavilion X360 14 ek1049TU i5 1335U/16GB/512GB', 'Laptop-HP-Pavilion-X360-14-ek1049TU-i5-1335U16GB512GB', 24990.000, 'hp-pavilion-x360-14-ek1049tu-i5-80r27pa-glr-abc-1.jpg', 'hp-pavilion-x360-14-ek1047tu-i7-80r25pa-glr-note.jpg', 'Với sức mạnh hiệu năng vượt trội đến từ con chip Intel Gen 13 tân tiến, vẻ ngoài đơn giản mà hiện đại cùng lối thiết kế độc đáo, laptop HP Pavilion X360 14 ek1049TU i5 1335U (80R27PA) sẽ là sự lựa chọn hoàn hảo đáp ứng tốt các tác vụ học tập, làm việc cũng như xem phim, chơi game giải trí.', 'Thiết kế 2 trong 1 \"độc đáo\" với bản lề 360 độ\r\nĐiểm đầu tiên khi nhìn vào chiếc máy này thì nhận thấy không quá khác biệt mấy so với những dòng laptop HP Pavilion điển hình, phủ bên ngoài là tông màu vàng hồng rất phù hợp với các bạn nữ, logo HP quen thuộc được phủ bóng và đặt giữa mặt lưng máy. Tuy không mang quá nhiều chi tiết nhưng HP Pavilion X360 vẫn đem lại cảm giác thanh lịch, tinh tế nhất định của dòng laptop học tập - văn phòng, cho phép bạn có thể sử dụng ở bất kì không gian nào.\r\nLaptop được trang bị đa dạng cổng giao tiếp, giúp mình dễ dàng kết nối với các thiết bị và phụ kiện khác như HDMI, Jack tai nghe 3.5 mm, USB 3.2, USB Type-C 3.2 và khe cắm Micro SD. Mình có thể truyền dữ liệu, kết nối màn hình ngoại vi, sạc thiết bị di động và thậm chí mở rộng bộ nhớ lưu trữ, đáp ứng được đầy đủ các nhu cầu kết nối.\r\nVề phần màn hình, kích thước 14 inch cùng độ phân giải Full HD (1920 x 1080) mình thấy đáp ứng rất tốt cho các hoạt động làm việc thường ngày, xem phim, giải trí hay duyệt web đều cho chất lượng hình ảnh rất tốt. Bên cạnh đó, sự trang bị với tấm nền IPS còn giúp mở rộng góc nhìn, mình có thể thay đổi nhiều tư thế khi làm việc lâu dài mà vẫn quan sát được rõ nội dung đang hiển thị. \r\n\r\nThông số màu trên chiếc màn hình này không quá cao, tầm 60% sRGB nên các yếu tố màu sắc đồ họa chưa được tốt lắm, nhưng mình vẫn có thể thực hiện các chỉnh sửa hình ảnh, edit video ngắn thuận lợi. Điều này cũng không hẳn là quá bất lợi khi bạn không có yêu cầu cao về mặt sáng tạo, thiết kế khi dùng chiếc laptop này.', '2024-05-03 07:07:08', '2024-06-13 19:15:43', 1, NULL, 1, 100),
(10, 1, 2, 'iPhone 14 Pro Max 128GB', 'iPhone-14-Pro-Max-128GB', 26990.000, 'iphone-14-pro-max-purple-1.jpg', 'iphone-14-pro-max.jpg', 'iPhone 14 Pro Max một siêu phẩm trong giới smartphone được nhà Táo tung ra thị trường vào tháng 09/2022. Máy trang bị con chip Apple A16 Bionic vô cùng mạnh mẽ, đi kèm theo đó là thiết kế màn hình mới, hứa hẹn mang lại những trải nghiệm đầy mới mẻ cho người dùng iPhone.\r\nThiết kế cao cấp bền bỉ\r\niPhone năm nay sẽ được thừa hưởng nét đặc trưng từ người anh iPhone 13 Pro Max, vẫn sẽ là khung thép không gỉ và mặt lưng kính cường lực kết hợp với tạo hình vuông vức hiện đại thông qua cách tạo hình phẳng ở các cạnh và phần mặt lưng.', 'Hiển thị nội dung chân thực hơn thông qua màn hình chất lượng\r\nTừ trước đến nay, tấm nền OLED luôn được cộng đồng người dùng đánh giá rất cao khi xuất hiện trên các dòng sản phẩm của Apple, với chiếc iPhone 14 Pro Max điều này cũng không là ngoại lệ khi hình ảnh mà máy mang lại hết sức chân thực.Nhìn vào màn hình ta sẽ thấy được một độ trong trẻo vô cùng thích mắt, nội dung hiển thị có chiều sâu, cảm giác khi xem phim hay chơi game cũng trở nên sống động hơn.\r\nĐiểm vượt trội nhất mà tấm nền này mang lại là độ chuẩn xác về màu sắc, mình cũng đã sử dụng iPhone 14 Pro Max để thiết kế một vài ấn phẩm như poster hay sticker đơn giản và thành quả lúc in ra sau khi đối chiếu lại với ảnh trên điện thoại thì gần như là bằng nhau, độ sai lệch không quá đáng kể giúp mình an tâm hơn trong việc thiết kế hình ảnh.', '2024-05-03 07:14:06', '2024-06-13 18:58:31', 1, NULL, 1, 100),
(11, 1, 1, 'Điện thoại Samsung Galaxy Z Flip5 5G 512GB ', 'DJien-thoai-Samsung-Galaxy-Z-Flip5-5G-512GB', 16090.000, 'samsung-galaxy-zflip-5-kem-512gb-1-1.jpg', 'samsung-galaxy-z-flip5-note-new.jpg', 'Samsung Galaxy Z Flip5 5G 512GB cũng đã chính thức ra mắt, được xem là một kiệt tác về thiết kế độc đáo đầy cuốn hút, thiết bị này hứa hẹn sẽ làm say đắm lòng người bởi vẻ ngoài vuông vắn tinh tế, khả năng gập độc đáo theo hướng dọc cùng cấu hình mạnh mẽ hàng đầu trong ngành.', 'Tích hợp các tính năng AI\r\nGalaxy Z Flip5, một sản phẩm chỉ vừa được ra mắt không lâu, đã nhanh chóng được trang bị những tính năng AI mạnh mẽ từ Galaxy S24 series thông qua giao diện người dùng One UI 6.1 ra mắt vào cuối tháng 3 năm 2024. Mỗi tính năng mới giúp nâng cao trải nghiệm người dùng trên Galaxy Z Flip5.Trợ lý Note thông minh giúp tạo và quản lý ghi chú nhanh chóng. Trợ lý chỉnh ảnh hoàn thiện trải nghiệm chỉnh sửa. Trợ lý chat thông minh và Phiên dịch trực tiếp cải thiện giao tiếp. Khoanh vùng tìm kiếm thông minh giúp tìm kiếm nhanh chóng và chính xác. Tổng cộng, Galaxy Z Flip5 đã tạo ra một trải nghiệm người dùng tốt hơn nhờ các tính năng AI này.\r\nThiết kế tinh tế cùng cơ chế gấp gọn\r\nGalaxy Z Flip5 về tổng thể thiết kế sẽ không có quá nhiều thay đổi và được tinh chỉnh để có kiểu dáng mỏng nhẹ so với đàn anh Flip4. Điểm nhấn chính của thiết kế này là màn hình chính Infinity Flex kích thước 6.7 inch khi mở ra, cho phép người dùng tận hưởng trải nghiệm xem video, chơi game và làm việc với diện tích hiển thị rộng rãi. \r\nKhi gập lại, điện thoại có kích thước nhỏ gọn, giúp dễ dàng mang theo và cất giữ trong túi xách hay túi quần. Phần bản lề được cải tiến nên đã loại bỏ khe hở, giúp máy gập lại phẳng hơn, hạn chế bụi bẩn bám vào.', '2024-05-03 07:20:17', '2024-06-13 18:27:00', 1, NULL, 1, 100),
(13, 1, 1, 'Điện thoại Samsung Galaxy A55 5G', 'DJien-thoai-Samsung-Galaxy-A55-5G', 11690.000, 'samsung-galaxy-a55-5g-tim-1.jpg', 'samsung-galaxy-a55-5g-note.jpg', 'Samsung Galaxy A55 5G, mẫu điện thoại mới của dòng Galaxy A, ra mắt với nhiều công nghệ tiên phong kèm theo kết nối 5G nhanh chóng. Được giới thiệu như một lựa chọn đa năng, chất lượng cao nhưng có mức giá hợp lý, hứa hẹn sẽ là sản phẩm đáng chú ý trên thị trường.\r\nThiết kế sang trọng, tinh tế\r\nĐiện thoại Galaxy A55 5G tạo điểm nhấn với chất lượng và thiết kế vuông vức tinh tế. Nó thể hiện sự hòa trộn hoàn hảo giữa đường nét mềm mại và các góc cạnh, kết hợp với viền màn hình siêu mỏng và mặt lưng nhám mịn, tạo ra cảm giác sang trọng và đẳng cấp.', 'Được trang bị camera chính 50 MP kèm theo camera phụ 12 MP góc siêu rộng và camera macro 5 MP, Galaxy A55 5G mang lại trải nghiệm chụp ảnh ấn tượng, không chỉ cho ra ảnh chất lượng cao mà máy còn mang đến nhiều tính năng với các chế độ chụp đầy thú vị như góc siêu rộng hay chụp cận.\r\n\r\nCó khả năng quay video 4K, Galaxy A55 5G đem đến những khoảnh khắc cuộc sống với độ chuyên nghiệp và sắc nét tối đa. Mỗi video ghi lại đều tái hiện sự rõ ràng, mượt mà và sống động đến từng chi tiết.', '2024-05-03 07:20:17', '2024-06-13 18:28:07', 1, NULL, 1, 100),
(14, 6, 2, 'Máy tính bảng iPad 9 WiFi 64GB ', 'May-tinh-bang-iPad-9-WiFi-64GB', 7090.000, 'ipad-9-wifi-trang-1.jpg', 'ipad-9-wifi-note-2.jpg', 'Sau thành công của iPad 8, Apple đã cho ra mắt iPad Gen 9 - phiên bản tiếp theo của dòng iPad 10.2, về cơ bản nó kế thừa những điểm mạnh từ các phiên bản trước đó và được cải tiến thêm hiệu suất, trải nghiệm người dùng nhằm giúp nhu cầu sử dụng giải trí và làm việc tiện lợi, linh hoạt hơn.', 'Thiết kế quen thuộc của dòng iPad\r\niPad 9 sở hữu hình dạng chữ nhật kèm viền trên dưới quen thuộc, có 2 màu sắc chính để bạn lựa chọn là xám thanh lịch và màu bạc thời thượng cho bạn tùy chọn theo sở thích của mình.Thiết kế nút Home ở giữa viền dưới của màn hình cho bạn thao tác nhanh khi cần. Cảm biến vân tay Touch ID được tích hợp ở trong phím Home, cho bạn mở khóa một cách nhanh chóng và an toàn.Trang bị cấu hình mạnh mẽ\r\nMáy được tích hợp con chip Apple A13 Bionic 6 nhân cho hiệu suất cao đến 20% so với thế hệ trước bao gồm CPU, GPU đến Neural Engine. Kết hợp cùng RAM 3 GB thì với hiệu năng này iPad Gen 9 64GB sẽ mang đến những trải nghiệm trò chơi sống động, mượt mà và có độ chi tiết cao, các tác vụ 3D cũng sẽ được xử lý một cách nhanh chóng nhất.', '2024-05-03 07:20:17', '2024-06-13 18:33:04', 1, NULL, 1, 100),
(15, 6, 2, 'Máy tính bảng iPad Air 5 M1 WiFi 64GB', 'May-tinh-bang-iPad-Air-5-M1-WiFi-64GB', 16090.000, 'ipad-air-5-m1-hong-1.jpg', 'ipad-air-5-m1-xanh-duong-1.jpg', 'iPad Air 5 đã được công bố tại sự kiện Peek Performance diễn ra hôm 9/3 (theo giờ Việt Nam). Năm nay Apple đã có những thay đổi lớn về cả hiệu năng và bổ sung màu sắc mới cho thiết bị.\r\nSức mạnh từ con chip M1\r\nApple M1 8 nhân là vi xử lý do chính Apple nghiên cứu và sản xuất. Con chip này đã được chứng minh sức mạnh qua nhiều dòng sản phẩm và bây giờ đã xuất hiện trên iPad Air 5 M1 WiFi 64 GB. Với 8 nhân CPU, vi xử lý này sẽ giúp thiết bị có thể hoạt động ổn định cùng với RAM 8 GB. ', 'iPad Air 5 M1 WiFi 64 GB có thiết kế phẳng ở 4 cạnh, mặt sau được làm từ nhôm với nhiều màu sắc tươi trẻ. Đặc biệt, năm nay Apple đã bổ sung màu tím cho dòng iPad Air, màu sắc này sẽ gây ấn tượng mạnh khi chúng ta cầm máy sử dụng. Màn hình của máy cũng được làm phẳng với kích thước 10.9 inch.Công nghệ màn hình:Retina IPS LCD\r\nĐộ phân giải:1640 x 2360 Pixels\r\nQuay phim:\r\nHD 720p@30fps\r\nFullHD 1080p@60fps\r\nFullHD 1080p@30fps\r\nFullHD 1080p@25fps\r\n4K 2160p@60fps\r\n4K 2160p@30fps\r\n4K 2160p@25fps\r\n4K 2160p@24fps', '2024-05-03 07:20:17', '2024-06-13 18:39:36', 1, NULL, 1, 100),
(16, 6, 1, 'Máy tính bảng Samsung Galaxy Tab A9+ 5G ', 'May-tinh-bang-Samsung-Galaxy-Tab-A9+-5G', 6690.000, 'samsung-galaxy-tab-a9-plus-xam-1-2.jpg', 'samsung-galaxy-tab-a9-plus-note.jpg', 'Với giá cả phải chăng, Samsung Galaxy Tab A9+ 5G là một sản phẩm máy tính bảng của Samsung dành cho người dùng muốn sở hữu một thiết bị giải trí cơ bản với màn hình rộng và khả năng kết nối mạng toàn diện để truy cập internet bất kỳ lúc nào và ở bất kỳ đâu.', 'Ngoại hình sang trọng, cứng cáp\r\nThiết kế của Galaxy Tab A9+ 5G đem đến một sự tươi mới và tinh tế. Máy sở hữu một ngoại hình hiện đại và thanh lịch với mặt lưng phẳng và khung kim loại. Các góc bo tròn mềm mại làm cho máy có sự đối lập với những đường nét phẳng phiu nên trông khá thú vị. \r\nVỏ ngoài của Galaxy Tab A9+ 5G được làm từ kim loại, tạo nên một vẻ ngoài sang trọng và đẳng cấp. Chất liệu kim loại cung cấp sự cứng cáp và độ bền cho máy tính bảng, giúp tăng thêm độ bền bỉ để hạn chế hư hại cho va đập. Đặc biệt, việc làm nhám bề mặt này giúp ngăn máy trượt tay và mang lại cảm giác thoải mái khi cầm máy.\r\nPhiên bản này hỗ trợ gắn SIM, tạo sự tiện lợi cho người dùng khi cần kết nối internet khi không có Wi-Fi. Với khả năng kết nối 5G, bạn có thể truy cập internet mọi lúc, mọi nơi và không bị giới hạn bởi việc phải tìm điểm Wi-Fi công cộng. Điều này làm cho Galaxy Tab A9+ 5G trở nên linh hoạt và đáng tin cậy hơn cho cả công việc và giải trí.', '2024-05-03 07:20:17', '2024-06-13 18:52:01', 1, NULL, 1, 100),
(17, 6, 6, 'Máy tính bảng Xiaomi Redmi Pad SE (4GB/128GB) ', 'May-tinh-bang-Xiaomi-Redmi-Pad-SE-(4GB128GB)', 4290.000, 'xiaomi-pad-se-xanh-1-1.jpg', 'xiaomi-redmi-pad-se-4gb-note.jpg', 'Xiaomi Redmi Pad SE 4GB mẫu máy tính bảng tầm trung được Xiaomi ra mắt tại thị trường Việt Nam vào tháng 09/2023. Máy ấn tượng với màn hình lớn, cấu hình khủng cùng viên pin có dung lượng 8000 mAh giúp đảm bảo mọi trải nghiệm được liền mạch và ổn định.', 'Thiết kế vuông vắn thanh lịch\r\nMáy tính bảng Xiaomi Redmi Pad SE được thiết kế với sự hiện đại và tinh tế theo kiểu vuông vắn bắt trend. Sự kết hợp hoàn hảo giữa mặt lưng và bộ khung làm phẳng không chỉ tạo nên một cái nhìn hiện đại mà còn mang lại cảm giác sang trọng, đầy vẻ thanh lịch.\r\nVới việc sử dụng chất liệu kim loại chất lượng cao và thiết kế nguyên khối, máy tính bảng này không chỉ đẹp mắt mà còn đảm bảo độ bền và độ chắc chắn đáng tin cậy.\r\nMặt lưng của máy tính bảng này được thiết kế theo kiểu nhám, tạo điểm nhấn cho thiết kế tổng thể. Điều này không chỉ mang lại một vẻ đẹp độc đáo mà còn giúp máy tính bảng dễ dàng cầm nắm và chống trơn trượt hay hạn chế bám dấu vân tay.\r\nMàn hình của Xiaomi Redmi Pad SE sử dụng tấm nền IPS LCD, một công nghệ hiển thị có chất lượng và thường thấy trong phân khúc tầm trung, đảm bảo rằng mọi góc độ xem đều có hình ảnh chất lượng ổn và màu sắc tươi sáng, rõ ràng. Điều này cho phép bạn thưởng thức nội dung với sự sắc nét và trung thực tối ưu, dù bạn đang xem ảnh, video hay làm các công việc về nội dung đa phương tiện.\r\nVới độ phân giải 1200 x 1920 pixels, màn hình của Xiaomi Redmi Pad SE mang đến một cấp độ chi tiết tuyệt vời. Tất cả các pixel trên màn hình hoạt động cùng nhau để tạo ra hình ảnh sắc nét, sáng rõ và độ chính xác màu sắc cao, giúp bạn trải nghiệm nội dung với chất lượng hình ảnh vượt trội.\r\n\r\n', '2024-05-03 07:20:17', '2024-06-13 18:56:34', 1, NULL, 1, 100),
(18, 3, 2, 'Tai nghe Bluetooth AirPods Pro Gen 2', 'Tai-nghe-Bluetooth-AirPods-Pro-Gen-2', 5690.000, 'tai-nghe-bluetooth-airpods-pro-2nd-gen-usb-c-charge-apple-1.jpg', 'tai-nghe-bluetooth-airpods-pro-2nd-gen-usb-c-charge-apple-1.jpg', 'AirPods Pro Gen 2 sở hữu thiết kế mang đậm chất thương hiệu Apple, màu sắc sang trọng, đi cùng nhiều công nghệ cho các iFan: chip Apple H2, chống bụi, chống ồn chủ động,... hứa hẹn mang đến trải nghiệm âm thanh sống động, chinh phục người dùng.', 'Tai nghe Bluetooth AirPods Pro (2nd Gen) được Apple trình làng vào tháng 09/2023 với nhiều sự mong đợi, Apple vẫn giữ nguyên thiết kế AirPods Pro Gen 2 giống với phiên bản tiền nhiệm của mình như: kích thước nhỏ gọn, đường bo góc tinh tế, gam màu trắng sang trọng.\r\n\r\nTuy nhiên trong lần ra mắt này, Apple đã thay mới cổng sạc cho các thiết bị của mình, tương tự như cổng sạc trên các mẫu iPhone 15 series, AirPods Pro Gen 2 được tích hợp cổng sạc Type-C nhằm tối ưu phụ kiện sạc giữa các thiết bị. Khi hết pin bạn có thể sạc lại hộp sạc bằng bộ sạc Apple Watch hay MagSafe. Ngoài ra bạn còn có thể sử dụng đầu nối Type-C hoặc bộ sạc chuẩn Qi để nạp lại pin cho chiếc AirPods của mình.\r\n\r\n', '2024-04-21 13:59:28', '2024-06-13 19:33:59', 1, NULL, 1, 100),
(27, 3, 3, 'Chuột Bluetooth Silent Logitech M240 ', 'Chuot-Bluetooth-Silent-Logitech-M240', 320.000, 'chuot-bluetooth-silent-logitech-m240-1.jpg', 'chuot-bluetooth-silent-logitech-m240-1.jpg', 'Chuột Bluetooth Silent Logitech M240 với kiểu dáng gọn gàng, gam màu đẹp mắt, kích thước vừa vặn tay cầm, kết nối ổn định cùng độ nhạy khá cao, hứa hẹn mang đến cho bạn những trải nghiệm tuyệt vời.', '• Màu sắc thanh lịch, khối lượng siêu gọn nhẹ, không chiếm quá nhiều diện tích không gian, tiện lợi bỏ vào balo hay túi xách mang theo bất cứ đâu.\n\n• Thiết kế chuột với đường nét sắc sảo đến từng chi tiết đem đến cho người dùng cảm giác êm tay trong quá trình sử dụng, hạn chế mỏi tay khi dùng trong thời gian dài.\n\n• Trang bị tốc độ di chuyển khá nhanh và phản hồi cao nhờ độ phân giải lên đến 4000 DPI, bạn có thể điều chỉnh mức DPI phù hợp cho từng loại tác vụ, tối ưu trải nghiệm sử dụng.\n\n• Bạn có thể dễ dàng kết nối với các thiết bị thông qua Bluetooth trong vòng 10 m, đường truyền ổn định và mượt mà.\n\n• Chuột Logitech sử dụng viên pin AA giúp bạn có thể yên tâm dùng trong thời gian khá lâu mà không lo gián đoạn, dễ dàng thay thế khi hết pin. ', '2024-06-13 19:37:07', NULL, 1, NULL, 1, 100),
(28, 3, 3, 'Tai nghe Bluetooth True Wireless OPPO ENCO Buds 2 ETE41', 'Tai-nghe-Bluetooth-True-Wireless-OPPO-ENCO-Buds-2-ETE41', 690.000, 'tai-nghe-bluetooth-tws-oppo-enco-buds-2-ete41-trang-1.jpg', 'tai-nghe-bluetooth-tws-oppo-enco-buds-2-ete41-notecopy.jpg', 'Thiết kế dạng tròn mới lạ, màu sắc thời thượng, sang trọng\nPhần hộp đựng của tai nghe Bluetooth True Wireless OPPO ENCO Buds 2 ETE41 mang kiểu dáng thiết kế dạng tròn trông khá lạ mắt với khối lượng gọn nhẹ. Nắp hộp có thể đóng, mở dễ dàng cùng phần bản lề vô cùng chắc chắn. Sở hữu bề mặt bóng bao bọc trọn vẹn hộp đựng giúp tai nghe thêm phần thời thượng, sang chảnh, phù hợp với mọi đối tượng.', 'Bluetooth chuẩn 5.2 cho kết nối vừa nhanh, vừa mượt\nĐường truyền kết nối ổn định và nhanh chóng trong vòng 10 m nhờ chuẩn Bluetooth 5.2 hiện đại. Bạn có thể vừa đeo tai nghe để nghe nhạc vừa thoải mái di chuyển khắp phòng mà không cần cầm theo điện thoại kết nối nữa.\n\nNhờ khả năng tương thích với hệ điều hành Android và iOS (iPhone) giúp tai nghe có thể dễ dàng kết nối với hầu hết các thiết bị.', '2024-06-13 19:40:26', '2024-06-13 19:48:41', 1, NULL, 1, 100);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sale`
--

CREATE TABLE `sale` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `percent_sale` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sale`
--

INSERT INTO `sale` (`id`, `name`, `slug`, `description`, `percent_sale`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Giảm giá đến 10%', 'gi-m-gi-n-10', '-10%', 10, '2024-04-16 09:38:18', '2024-06-09 20:25:28', 1, NULL, 1),
(2, 'Giảm giá đến 20%', 'gi-m-gi-n-20', '-20%', 20, '2024-04-16 09:38:18', '2024-05-12 04:17:19', 1, NULL, 1),
(16, '20%', '20', 'aaaa', 20, '2024-06-09 20:30:34', NULL, 1, NULL, 0),
(17, 'a b', 'a-b', 'a b', 2, '2024-06-13 08:47:40', NULL, 1, NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `topic`
--

CREATE TABLE `topic` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL,
  `description` mediumtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `topic`
--

INSERT INTO `topic` (`id`, `name`, `slug`, `parent_id`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(2, 'Hỗ trợ trả góp với lãi suất 0% áp dụng với tất cả sản phẩm trên toàn hệ thống', 'h-tr-tr-gp-vi-li-sut-0-p-dng-vi-tt-c-sn-phm-trn-ton-h-thng', 2, 'string', '2024-04-15 07:59:58', '2024-05-28 21:06:28', 1, NULL, 1),
(19, 'aaaaa bbbbbccc', 'aaaaa-bbbbbccc', 19, 'aaaaa bbbbbcc', '2024-05-28 20:10:22', '2024-05-28 21:04:23', 1, NULL, 0),
(20, 'aaaa', 'aaaa', 0, 'aaaa', '2024-05-28 20:37:17', NULL, 1, NULL, 0),
(28, 'san pham moi', 'san-pham-moi', 2, 'aaaaaa', '2024-05-29 21:37:46', NULL, 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `name`, `user_name`, `email`, `phone`, `password`, `roles`, `address`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(2, 'aa', 'aa', 'aa@gmail.com', '123456789', '0000', 'Customer', '12 phạm hữu lầu, khu phố thống nhất 1, phường Dĩ An, Tp.Dĩ an, Tỉnh Bình Dương\n', '2024-04-16 15:23:49', '2024-04-16 12:55:50', 1, NULL, 1),
(12, 'thiện1', 'a', 'a@gmail.com', '0387998788', '$2b$10$/SwlvUAeGmZkNyQT5S7PTO5YHwg9tvjO6.YIlAbx6SYRnvG55KteS', 'admin', '12 phạm hữu lầu, khu phố thống nhất 1, phường Dĩ An, Tp.Dĩ an, Tỉnh Bình Dương\n', '2024-05-21 21:00:14', '2024-06-12 00:40:21', 1, NULL, 1),
(15, 'c', 'thien', 'c@gmail.com', '1111111111', '$2b$10$TcUX02tu.rZW0olLlpC2DOXq.uht/7Mu.nQx9TGUlFeQLwgKU/ofu', 'customer', '12 phạm hữu lầu, khu phố thống nhất 1, phường Dĩ An, Tp.Dĩ an, Tỉnh Bình Dương\n', '2024-05-22 02:37:54', NULL, 1, NULL, 2),
(30, 'bbbb', 'bcd@gmail.com', 'bcd@gmail.com', '1231231231', '$2b$10$/crRBe0erWksERGw6R9bGeUikaOUzqQHpqTTLe7apnIcJOv.HQRIe', 'customer', 'bcd@gmail.com', '2024-06-09 19:24:31', '2024-06-09 19:29:04', 1, NULL, 1),
(32, 'Lê Ngoc Thiện', 'admin@gmail.com', 'admin@gmail.com', '0387998788', '$2b$10$FBN.rfb/usHd7iUbWpTFQuM1cOOTw9UUZ84zDSu588/jo1QTt00A.', 'admin', '12 phạm hữu lầu, khu phố thống nhất 1, phường Dĩ An, Tp.Dĩ an, Tỉnh Bình Dương', '2024-06-09 20:05:22', '2024-06-12 00:40:09', 1, NULL, 2),
(35, 'Ngoc Thiện', 'thien@gmail.com', 'thien@gmail.com', '012345678', '$2b$10$madQFTiWy76/LV/90F4UZe8bfZsGKVeKRyMpzRjnQ2ky7PDhRarwC', 'admin', 'dĩ an bình dương', '2024-06-11 08:50:22', '2024-06-12 00:35:52', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_address`
--

CREATE TABLE `user_address` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `address_1` varchar(1000) NOT NULL,
  `address_2` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_address`
--

INSERT INTO `user_address` (`id`, `user_id`, `address_1`, `address_2`) VALUES
(1, 1, 'tphcm', 'Hà nội'),
(2, 2, 'Hà Nội', 'Bình Dương'),
(3, 12, 'quận 7', 'quận 9'),
(4, 35, '', NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `config`
--
ALTER TABLE `config`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `description`
--
ALTER TABLE `description`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `discount`
--
ALTER TABLE `discount`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `discounted_products`
--
ALTER TABLE `discounted_products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user_address`
--
ALTER TABLE `user_address`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `banner`
--
ALTER TABLE `banner`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `brand`
--
ALTER TABLE `brand`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT cho bảng `config`
--
ALTER TABLE `config`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `description`
--
ALTER TABLE `description`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT cho bảng `discount`
--
ALTER TABLE `discount`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `discounted_products`
--
ALTER TABLE `discounted_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `image`
--
ALTER TABLE `image`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `post`
--
ALTER TABLE `post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `sale`
--
ALTER TABLE `sale`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `topic`
--
ALTER TABLE `topic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT cho bảng `user_address`
--
ALTER TABLE `user_address`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
