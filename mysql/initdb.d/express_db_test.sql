/*

SQLyog Ultimate v8.55
MySQL - 5.5.5-10.4.21-MariaDB : Database - express_db_test

*********************************************************************

*/



/*!40101 SET NAMES utf8 */;



/*!40101 SET SQL_MODE=''*/;



/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`express_db_test` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;



USE `express_db_test`;



/*Table structure for table `companies` */



DROP TABLE IF EXISTS `companies`;



CREATE TABLE `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;



/*Table structure for table `employees` */



DROP TABLE IF EXISTS `employees`;



CREATE TABLE `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `company_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;



/*Table structure for table `users` */



DROP TABLE IF EXISTS `users`;



CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

insert  into `users`(`id`,`email`,`password`,`created_at`,`updated_at`,`deleted_at`) values (1,'hoge@fuga.co.jp','in0E6AV1zGg13NIIeBOtNQ==$YaUdnYxBpBrgtrHTO9x75d88OeDO1JRv1Rn1Xrt4ggeOVPW3xidF/90ECPwqOUOuQveYWnKuKdEWLd7gvuZ4Mw==','2021-10-22 21:40:40','2021-10-22 21:40:40',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
