-- MySQL dump 10.13  Distrib 8.0.37, for Win64 (x86_64)
--
-- Host: localhost    Database: foodapp
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `state_province` varchar(255) DEFAULT NULL,
  `street_address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'TP Ha Noi','VietNam','Ha Noi','275 Dinh Cong'),(2,'TP Ha Noi','VietNam','Ha Noi','275 Dinh Cong'),(3,'adsadas','dasdas','dasdasd','nasd'),(4,'adsadas','dasdas','dasdasd','nasd'),(5,'vgbhjn','fgyhu','gbhjn','vghbjn'),(6,'vgbhjn','fgyhu','gbhjn','vghbjn'),(7,'vgbhjn','fgyhu','gbhjn','vghbjn'),(8,'cfgvhbj','vhbj','cvbh','fcgvhbjn'),(9,'dasdsad','dasdsads','dsadsa','gvhjkl;'),(10,'dasd','fgyhu','dasdasd','dsadsa'),(11,'dsa','saddsa','sda','sdasa'),(12,'dsadas','dsasa','dsadsa','dasdsa'),(13,'adsadas','dasdas','dasdasd','nasd');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `customer_id` bigint DEFAULT NULL,
  `total` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_867x3yysb1f3jk41cv3vsoejj` (`customer_id`),
  CONSTRAINT `FK9mocisyryuqas1xrlbl8872lb` FOREIGN KEY (`customer_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,1,NULL),(2,2,NULL),(3,3,NULL),(4,4,NULL),(5,5,NULL),(6,6,NULL),(7,7,NULL),(8,8,18000),(9,9,NULL),(10,10,NULL);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_item`
--

DROP TABLE IF EXISTS `cart_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ingredients` varbinary(255) DEFAULT NULL,
  `quantity` int NOT NULL,
  `total_price` bigint DEFAULT NULL,
  `cart_id` bigint DEFAULT NULL,
  `food_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1uobyhgl1wvgt1jpccia8xxs3` (`cart_id`),
  KEY `FKcro8349ry4i72h81en8iw202g` (`food_id`),
  CONSTRAINT `FK1uobyhgl1wvgt1jpccia8xxs3` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`),
  CONSTRAINT `FKcro8349ry4i72h81en8iw202g` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
INSERT INTO `cart_item` VALUES (11,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0w\0\0\0t\0lolt\0Doan Van Namt\0whitSDAet\0whiteA soucex',4,36000,8,11);
/*!40000 ALTER TABLE `cart_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `restaurant_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKp6n44aqw5n74qc4f1d6eyqgha` (`restaurant_id`),
  CONSTRAINT `FKp6n44aqw5n74qc4f1d6eyqgha` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'pizza',1),(2,'burger',1),(3,'A',1),(4,'B',1),(5,'C',1),(6,'burger Super',1),(7,'dsadas',1),(8,'dgfs',1),(9,'dgfs',1),(10,'wertyuiop',1),(11,'wertyuiop',1),(12,'Doan Nam',1),(13,'dasdassa',1);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluate`
--

DROP TABLE IF EXISTS `evaluate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evaluate` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `comment` varchar(255) DEFAULT NULL,
  `rate` int NOT NULL,
  `food_id` bigint DEFAULT NULL,
  `restaurant_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKi2by61e1dr2xqwd3mohgliu5t` (`food_id`),
  KEY `FKk2jhb1rvdrdvsabkd7j5w2phm` (`restaurant_id`),
  CONSTRAINT `FKi2by61e1dr2xqwd3mohgliu5t` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`),
  CONSTRAINT `FKk2jhb1rvdrdvsabkd7j5w2phm` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluate`
--

LOCK TABLES `evaluate` WRITE;
/*!40000 ALTER TABLE `evaluate` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaluate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `end_at` datetime(6) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `started_at` datetime(6) DEFAULT NULL,
  `restaurant_id` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrgu130w46mhdumw9oh9i6372h` (`restaurant_id`),
  CONSTRAINT `FKrgu130w46mhdumw9oh9i6372h` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (2,'2024-03-14 00:00:00.000000','https://cdn.pixabay.com/photo/2023/09/25/19/58/piran-8275931_1280.jpg','dsads','HÃ  Äá»©c Chung','2024-03-13 00:00:00.000000',1,NULL);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `available` bit(1) NOT NULL,
  `creation_date` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_seasonal` bit(1) NOT NULL,
  `is_vegetarian` bit(1) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `food_category_id` bigint DEFAULT NULL,
  `restaurant_id` bigint DEFAULT NULL,
  `non_vegetarian` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKd5jb57wcj3nomso10nhrit3dc` (`food_category_id`),
  KEY `FKm9xrxt95wwp1r2s7andom1l1c` (`restaurant_id`),
  CONSTRAINT `FKd5jb57wcj3nomso10nhrit3dc` FOREIGN KEY (`food_category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `FKm9xrxt95wwp1r2s7andom1l1c` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (1,_binary '\0',NULL,'10 diem khong co nhung',_binary '',_binary '','Burger Super',399,NULL,NULL,_binary '\0'),(2,_binary '\0',NULL,'10 diem khong co nhung',_binary '',_binary '','Burger Super',399,6,NULL,_binary '\0'),(3,_binary '\0',NULL,'dasdsada',_binary '\0',_binary '','HÃ  Äá»©c Chung',200,5,NULL,_binary '\0'),(4,_binary '',NULL,'sdadsa',_binary '',_binary '\0','dsadsa',10,5,NULL,_binary '\0'),(5,_binary '',NULL,'dsadsa',_binary '\0',_binary '','HÃ  Äá»©c Chung',100,12,NULL,_binary '\0'),(6,_binary '',NULL,'dasdsada',_binary '',_binary '\0','dsadsa',20,12,NULL,_binary '\0'),(7,_binary '',NULL,'dasdsada',_binary '',_binary '\0','dsadsa',20,12,NULL,_binary '\0'),(8,_binary '',NULL,'dsa',_binary '\0',_binary '','HÃ  Äá»©c Chung',9000,7,NULL,_binary '\0'),(11,_binary '',NULL,'dasdsada',_binary '\0',_binary '','HÃ  Äá»©c Chung',9000,6,1,_binary '\0');
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_images`
--

DROP TABLE IF EXISTS `food_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_images` (
  `food_id` bigint NOT NULL,
  `images` varchar(1000) DEFAULT NULL,
  KEY `FKjjjt9373et45vaj0mguo4pd2p` (`food_id`),
  CONSTRAINT `FKjjjt9373et45vaj0mguo4pd2p` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_images`
--

LOCK TABLES `food_images` WRITE;
/*!40000 ALTER TABLE `food_images` DISABLE KEYS */;
INSERT INTO `food_images` VALUES (1,'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_1280.jpg'),(2,'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_1280.jpg'),(3,'http://res.cloudinary.com/dvt1lfyzh/image/upload/v1710176015/ki39d3tsxyvvwq0b8rwl.jpg'),(4,'http://res.cloudinary.com/dvt1lfyzh/image/upload/v1710247025/u3yqq5pndooyuqkogooz.jpg'),(5,'http://res.cloudinary.com/dvt1lfyzh/image/upload/v1710259246/r52yi84ndve3xgt4aqb1.jpg'),(6,'http://res.cloudinary.com/dvt1lfyzh/image/upload/v1710260258/sm881ehbnobsb1f0xwr1.jpg'),(7,'http://res.cloudinary.com/dvt1lfyzh/image/upload/v1710260258/sm881ehbnobsb1f0xwr1.jpg'),(8,'http://res.cloudinary.com/dvt1lfyzh/image/upload/v1710260461/wpfukrklinhiu6arlmyy.png'),(11,'http://res.cloudinary.com/dvt1lfyzh/image/upload/v1710346281/hahkhsey6rwtdjtkbqoe.jpg');
/*!40000 ALTER TABLE `food_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_ingredients`
--

DROP TABLE IF EXISTS `food_ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_ingredients` (
  `food_id` bigint NOT NULL,
  `ingredients_id` bigint NOT NULL,
  KEY `FKhy3t7b303ydmureccjf1qak2k` (`ingredients_id`),
  KEY `FKnfwd9dp2aw8o8l4ftu39jmvv9` (`food_id`),
  CONSTRAINT `FKhy3t7b303ydmureccjf1qak2k` FOREIGN KEY (`ingredients_id`) REFERENCES `ingredients_item` (`id`),
  CONSTRAINT `FKnfwd9dp2aw8o8l4ftu39jmvv9` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_ingredients`
--

LOCK TABLES `food_ingredients` WRITE;
/*!40000 ALTER TABLE `food_ingredients` DISABLE KEYS */;
INSERT INTO `food_ingredients` VALUES (2,6),(2,7),(2,8),(2,9),(8,5),(8,7),(8,8),(11,5),(11,8),(11,10),(11,12);
/*!40000 ALTER TABLE `food_ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredient_category`
--

DROP TABLE IF EXISTS `ingredient_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredient_category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `restaurant_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKdx2hvej3t5hkiguy698n9covv` (`restaurant_id`),
  CONSTRAINT `FKdx2hvej3t5hkiguy698n9covv` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredient_category`
--

LOCK TABLES `ingredient_category` WRITE;
/*!40000 ALTER TABLE `ingredient_category` DISABLE KEYS */;
INSERT INTO `ingredient_category` VALUES (1,'souce',1),(2,'bread',1),(3,'meat',1),(4,'nut',1),(5,'dsadas',1),(6,'DTTD',1),(7,'dgfs',1);
/*!40000 ALTER TABLE `ingredient_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredients_item`
--

DROP TABLE IF EXISTS `ingredients_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredients_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `category_id` bigint DEFAULT NULL,
  `restaurant_id` bigint DEFAULT NULL,
  `is_stock` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjb94f4rm414htlxd1mwhf56in` (`category_id`),
  KEY `FKkokfv1la8uvwmow57uv6aeqnx` (`restaurant_id`),
  CONSTRAINT `FKjb94f4rm414htlxd1mwhf56in` FOREIGN KEY (`category_id`) REFERENCES `ingredient_category` (`id`),
  CONSTRAINT `FKkokfv1la8uvwmow57uv6aeqnx` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients_item`
--

LOCK TABLES `ingredients_item` WRITE;
/*!40000 ALTER TABLE `ingredients_item` DISABLE KEYS */;
INSERT INTO `ingredients_item` VALUES (1,'white souce',1,1,_binary ''),(2,'whiteA souce',1,1,_binary ''),(3,'whiteA souce',2,1,_binary ''),(4,'whiteA souce',3,1,_binary '\0'),(5,'whiteA souce',4,1,_binary '\0'),(6,'whitedas souce',4,1,_binary '\0'),(7,'whitedas souce',1,1,_binary ''),(8,'whitSDAe',2,1,_binary ''),(9,'whitSDAesadsa',3,1,_binary ''),(10,'Doan Van Nam',1,1,_binary ''),(11,'Doan Van Nam',6,1,_binary ''),(12,'lol',6,1,_binary '');
/*!40000 ALTER TABLE `ingredients_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ingredients` varbinary(255) DEFAULT NULL,
  `quantity` int NOT NULL,
  `total_price` bigint DEFAULT NULL,
  `food_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4fcv9bk14o2k04wghr09jmy3b` (`food_id`),
  CONSTRAINT `FK4fcv9bk14o2k04wghr09jmy3b` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (1,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0w\0\0\0t\0whitSDAex',5,1995,2),(2,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0w\0\0\0t\0whitSDAex',5,1995,2),(3,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0w\0\0\0t\0\rwhitSDAesadsat\0whitSDAet\0whitedas soucex',1,399,2),(4,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0\0w\0\0\0\0x',3,1197,1),(5,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0w\0\0\0t\0\rwhitSDAesadsat\0whitSDAet\0whitedas soucex',1,399,2),(6,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0\0w\0\0\0\0x',3,1197,1),(7,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0w\0\0\0t\0\rwhitSDAesadsat\0whitSDAet\0whitedas soucex',1,399,2),(8,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0\0w\0\0\0\0x',3,1197,1),(9,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0w\0\0\0t\0\rwhitSDAesadsat\0whitSDAet\0whitedas soucex',1,399,2),(10,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0\0w\0\0\0\0x',3,1197,1),(11,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0w\0\0\0t\0\rwhitSDAesadsat\0whitSDAet\0whitedas soucex',1,399,2),(12,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0\0w\0\0\0\0x',3,1197,1),(13,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0w\0\0\0t\0\rwhitSDAesadsat\0whitSDAet\0whitedas soucex',2,798,2),(14,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0\0w\0\0\0\0x',2,798,1),(15,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0w\0\0\0t\0whiteA soucet\0whitedas soucet\0whitSDAex',3,27000,8),(16,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0w\0\0\0t\0lolt\0Doan Van Namt\0whitSDAet\0whiteA soucex',2,18000,11);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `total_amount` bigint DEFAULT NULL,
  `total_item` int NOT NULL,
  `total_price` bigint DEFAULT NULL,
  `customer_id` bigint DEFAULT NULL,
  `delivery_address_id` bigint DEFAULT NULL,
  `restaurant_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK14n2jkmoyhpimhracvcdy7sst` (`customer_id`),
  KEY `FKbwhiubtkxf94knbm9oo55wdbm` (`delivery_address_id`),
  KEY `FKi7hgjxhw21nei3xgpe4nnpenh` (`restaurant_id`),
  CONSTRAINT `FK14n2jkmoyhpimhracvcdy7sst` FOREIGN KEY (`customer_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKbwhiubtkxf94knbm9oo55wdbm` FOREIGN KEY (`delivery_address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `FKi7hgjxhw21nei3xgpe4nnpenh` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2024-03-07 21:31:54.578000','COMPLETED',NULL,0,1995,8,3,1),(2,'2024-03-07 21:32:54.520000','DELIVERED',NULL,0,1995,8,4,1),(3,'2024-03-08 00:21:43.317000','PENDING',NULL,0,1596,8,5,1),(4,'2024-03-08 00:23:51.938000','PENDING',NULL,0,1596,8,6,1),(5,'2024-03-08 00:25:16.615000','PENDING',NULL,0,1596,8,7,1),(6,'2024-03-08 00:26:26.191000','PENDING',NULL,0,1596,8,8,1),(7,'2024-03-08 00:31:06.192000','PENDING',NULL,0,1596,8,9,1),(8,'2024-03-08 22:12:27.131000','PENDING',NULL,0,1596,8,10,1),(9,'2024-03-13 21:03:58.094000','PENDING',NULL,0,27000,8,12,1),(10,'2024-03-26 21:46:51.787000','PENDING',NULL,0,18000,8,13,1);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_order_items`
--

DROP TABLE IF EXISTS `orders_order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_order_items` (
  `order_id` bigint NOT NULL,
  `order_items_id` bigint NOT NULL,
  UNIQUE KEY `UK_9d47gapmi35omtannusv6btu3` (`order_items_id`),
  KEY `FK3l8rktw0f4w5t6tift31e2d7c` (`order_id`),
  CONSTRAINT `FK3l8rktw0f4w5t6tift31e2d7c` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `FK7nw03p9mxq154wvbsonaq0qrw` FOREIGN KEY (`order_items_id`) REFERENCES `order_item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_order_items`
--

LOCK TABLES `orders_order_items` WRITE;
/*!40000 ALTER TABLE `orders_order_items` DISABLE KEYS */;
INSERT INTO `orders_order_items` VALUES (1,1),(2,2),(3,3),(3,4),(4,5),(4,6),(5,7),(5,8),(6,9),(6,10),(7,11),(7,12),(8,13),(8,14),(9,15),(10,16);
/*!40000 ALTER TABLE `orders_order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `cuisine_type` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `open` bit(1) NOT NULL,
  `opening_hours` varchar(255) DEFAULT NULL,
  `registration_date` datetime(6) DEFAULT NULL,
  `address_id` bigint DEFAULT NULL,
  `owner_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_2b01rrbfd5g6hklh8ei57uhgn` (`address_id`),
  UNIQUE KEY `UK_e5wptm5diypt91i1wpsa42h6x` (`owner_id`),
  CONSTRAINT `FK96q13p1ptpewvus590a8o83xt` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `FKnm7kj0jgjep1nm5rslxei79jl` FOREIGN KEY (`owner_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,'bread@gmail.com','@bread_instagram','0986720857','@bread_twitter','Viet Nam Hust','description of the Restaurant: 10 point',' Bread Restaurant',_binary '','Mon-Sun : 7:00 AM - 9:00 PM','2024-03-01 21:51:35.392753',1,1),(3,'sdaasdsa','sdasad','sdasa','dsasad','dsasad','dsadsa','dsadsa',_binary '','Mon - Sun : 9:00 AM - 9:00 PM','2024-03-11 20:46:39.524938',11,10);
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant_images`
--

DROP TABLE IF EXISTS `restaurant_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant_images` (
  `restaurant_id` bigint NOT NULL,
  `images` varchar(1000) DEFAULT NULL,
  KEY `FK810i11orew47qx1nrcwlh43jb` (`restaurant_id`),
  CONSTRAINT `FK810i11orew47qx1nrcwlh43jb` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_images`
--

LOCK TABLES `restaurant_images` WRITE;
/*!40000 ALTER TABLE `restaurant_images` DISABLE KEYS */;
INSERT INTO `restaurant_images` VALUES (1,'https://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459_1280.jpg'),(1,'https://cdn.pixabay.com/photo/2014/10/17/22/30/waiter-492872_1280.jpg'),(1,'https://cdn.pixabay.com/photo/2014/10/17/22/30/waiter-492872_1280.jpg'),(3,'http://res.cloudinary.com/dvt1lfyzh/image/upload/v1710164677/nn6cci6bak2gg78xudna.jpg');
/*!40000 ALTER TABLE `restaurant_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `user_chk_1` CHECK ((`role` between 0 and 2))
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'doan@gmail.com','ÄoÃ n VÄn Nam','$2a$10$jT88aMHCk6S7T8Xq4Kf3leEuD3VCHGhQuYPfhbVBPLENNbgWS4.56',1),(2,'haducchung@gmail.com','HÃ  Äá»©c Chung','$2a$10$Yjo5mTTm4WkEgAtQr.4M5u45k69Ricr8s4dXRti0F9cZ47pU0tp4i',0),(3,'nam0@sis.hust.edu.vn','hanoi university of science and technology','$2a$10$ob42qkfNFMeCqcFHsL9C0.OiUEO8u6ZV5azNHSMOzzApgJ0uCkZru',0),(4,'doanhang186@gmail.com','Doan Van Nam','$2a$10$5jryw8FXbIAJ/JAnJwIs7O9FQYO6kQS6Rs.3MTIVeg38xL5Kk09P.',0),(5,'dsadsa','dsadas','$2a$10$B.UUrOJOHdyLKBY7Cx8Z6ucLZMRoeVQzWp54aC2rMULIJjV2D8xpW',1),(6,'dassad','dasdas','$2a$10$fS4VXNpoYv88rWS8MosnkeIH.OOySUBX3KD1Syu9IsyVLUCZ0BGDW',0),(7,'doannambka626@gmail.com','dasdas','$2a$10$rzHW.B2iS9vmta.fJItd1evL7Im65H.KOQ9ReC2j5OuAWn4f6QL4G',0),(8,'dttd38@gmail.com','Äá» Thá» ThÃ¹y Dung','$2a$10$QymjU4VV7WZL2UeUU2VUA.PuAqTlW7U94P/B3CFfWBfxi.KLk7/F6',0),(9,'doanvannam@gmail.com','Doan Van Nam','$2a$10$oZmH7YV.tMHd5z1HCoNUM.Xlzn42pu35G0Yv66U4u3o92ScZ70cTy',1),(10,'1','1','$2a$10$TvM8Ua5WOMLEYYu7QU3tneUkpx.Li6KeGnlpnWey.KPFLBeC9j5qe',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_addresses`
--

DROP TABLE IF EXISTS `user_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_addresses` (
  `user_id` bigint NOT NULL,
  `addresses_id` bigint NOT NULL,
  UNIQUE KEY `UK_i5lp1fvgfvsplfqwu4ovwpnxs` (`addresses_id`),
  KEY `FKfm6x520mag23hvgr1oshaut8b` (`user_id`),
  CONSTRAINT `FKfm6x520mag23hvgr1oshaut8b` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKth1icmttmhhorb9wiarm73i06` FOREIGN KEY (`addresses_id`) REFERENCES `address` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_addresses`
--

LOCK TABLES `user_addresses` WRITE;
/*!40000 ALTER TABLE `user_addresses` DISABLE KEYS */;
INSERT INTO `user_addresses` VALUES (8,3),(8,4),(8,5),(8,6),(8,7),(8,8),(8,9),(8,10),(8,12),(8,13);
/*!40000 ALTER TABLE `user_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_favorites`
--

DROP TABLE IF EXISTS `user_favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_favorites` (
  `user_id` bigint NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `id` bigint DEFAULT NULL,
  `images` varbinary(1000) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  KEY `FK848qdyqh37xmekek29npyyjuo` (`user_id`),
  CONSTRAINT `FK848qdyqh37xmekek29npyyjuo` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_favorites`
--

LOCK TABLES `user_favorites` WRITE;
/*!40000 ALTER TABLE `user_favorites` DISABLE KEYS */;
INSERT INTO `user_favorites` VALUES (8,'description of the Restaurant: 10 point',1,_binary '¬\í\0sr\0java.util.ArrayListx\Ò\Ça\0I\0sizexp\0\0\0w\0\0\0t\0Fhttps://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459_1280.jpgt\0Ehttps://cdn.pixabay.com/photo/2014/10/17/22/30/waiter-492872_1280.jpgt\0Ehttps://cdn.pixabay.com/photo/2014/10/17/22/30/waiter-492872_1280.jpgx',' Bread Restaurant');
/*!40000 ALTER TABLE `user_favorites` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-16 13:02:34
