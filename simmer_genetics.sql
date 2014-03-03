-- phpMyAdmin SQL Dump
-- version 4.0.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 03, 2014 at 10:48 PM
-- Server version: 5.5.33-log
-- PHP Version: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `simmer_genetics`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `answer_id` int(11) NOT NULL AUTO_INCREMENT,
  `answer_name` varchar(3000) NOT NULL,
  `question_id` int(11) NOT NULL,
  `correct` varchar(100) NOT NULL,
  `feedback_correct` varchar(200) DEFAULT NULL,
  `feedback_incorrect` varchar(200) DEFAULT NULL,
  `feedback_partially` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`answer_id`),
  KEY `question_id` (`question_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`answer_id`, `answer_name`, `question_id`, `correct`, `feedback_correct`, `feedback_incorrect`, `feedback_partially`) VALUES
(1, 'A) A + T = C + G |B) A + G = C + T |C) A + C = G + T |D) Purines = Pyrimidines', 1, 'false|true|false|true', 'Very Good! Purines bind to Pyridimines. A and G are purines, while C and T are pyridimines! Watson and Crick used this to support their DNA model', 'That is Incorrect. Try again!', 'not partially correct|This is correct, but you might have missed another|not partially correct|This is correct, but you might have missed another'),
(2, 'A) 3 : 1 |B) 2 : 1 |C) 1 : 2 : 1 |D) 9 : 3 : 3 : 1', 2, '0', '---Feedback set by data_Access.php---', '---Feedback set by data_Access.php---', '---Feedback set by data_Access.php---'),
(3, 'A) YY and yy |B) YG and GG |C) YY and GG |D) Yy and yy |E) Yy and Yy |F) YG and YG|G) YY and Yy|H) YY and YY', 3, '0', '---Feedback set by data_Access.php---', '---Feedback set by data_Access.php---', '---Feedback set by data_Access.php---'),
(4, 'A) The offspring yield roughly a 3:1 ratio with the white trait being dominant. This means the procreators were possibly one homozygous dominant paired with one heterozygote (BB x Bb).|B) The offspring yield roughly a 3:1 ratio with the black trait being dominant. This means the procreators were possibly one homozygous recessive paired with one heterozygote (bb x Bb).|C) The offspring yield roughly a 2:1 ratio with the black trait being dominant.This means the procreators were possibly one homozygous dominant paired with one heterozygote (BB x Bb).|D) The offspring yield roughly a 3:1 ratio with the black trait being dominant. This means the procreators resulted in a monohybrid cross, or two heterozygotes having the same alleles (Bb x Bb).|E) The offspring yield roughly a 2:1 ratio with the white trait being dominant.  			This means the procreators resulted in a monohybrid cross, or two heterozygotes having the same alleles (Bb x Bb).', 4, 'false|false|false|true|false', NULL, NULL, NULL),
(5, 'A) 3 : 1|B) 2 : 1|C) 1 : 2 : 1|D) 9 : 3 : 3 : 1', 5, '', NULL, NULL, NULL),
(6, 'A) 1 : 1|B) 2 : 1|C) 3 : 1|D) 1 : 2 : 1', 6, '', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `lesson`
--

CREATE TABLE `lesson` (
  `lesson_id` int(11) NOT NULL AUTO_INCREMENT,
  `lesson_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`lesson_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `lesson`
--

INSERT INTO `lesson` (`lesson_id`, `lesson_name`) VALUES
(1, 'Lesson 1: The Basics'),
(2, 'Lesson 2: The Ratio'),
(3, 'Lesson 3: Single Locus');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `question_id` int(11) NOT NULL AUTO_INCREMENT,
  `question_name` varchar(1000) NOT NULL,
  `question_type_id` int(11) NOT NULL,
  `random` varchar(10) NOT NULL,
  `hint` varchar(1000) DEFAULT NULL,
  `lesson_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`question_id`),
  KEY `question_type_id` (`question_type_id`),
  KEY `question_type_id_2` (`question_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`question_id`, `question_name`, `question_type_id`, `random`, `hint`, `lesson_id`) VALUES
(1, 'Which of the following are predicted by Chargaff''s rule (select all that are correct):', 2, '0', 'Remember that adenine and guanine bind to cytosine and thymine', '1'),
(2, 'What is the implied informative ratio of:', 1, '1', 'Gene ratios are not always an exact representation of the data shown, nor may they be in the same order!', '2'),
(3, 'You are given two pea plants that are raised from peas, one yellow and one green. What are the likely genetypes of the above plants if the offspring of their mating yield the following peas?', 2, '1', 'Make sure you use the correct notation!', '3'),
(4, 'Two black guinea pigs were mated and over several years produced the following offspring: Explain these results, giving the genotypes of parents and progeny.', 1, '1', 'Make sure you sort the procreators correctly.', '3'),
(5, 'What single locus ratio might be produced by the progeny from the previous question? Remember, two black guinea pigs mated over several years and produced:', 1, '1', 'Recall the gene makeup of the two black guinea pigs. Where they both heterozygotes?', '3'),
(6, 'What are the genotypes of plants raised from an unknown yellow pea were crossed with plants grown from a green pea that when crossed yielded the following progeny', 1, '1', 'Analyze the data carefully. Are yellow or green peas recessive or dominant? Which is which?', '3'),
(7, 'In nature, the plant Plectritis congesta is dimorphic for fruit shape; that is, individual plants bear either wingless or winged fruits, \n	as shown below. Plants were collected from nature before flowering and were crossed or selfed with the following results:', 1, '1', 'Selfing results in identical haplotypes for both male and female gametes, meaning the parents will have the same alleles. Also, the phenotypes of progeny marked by asterisks probably have a nongenetic explanation. What do you think it is?', '3');

-- --------------------------------------------------------

--
-- Table structure for table `question_types`
--

CREATE TABLE `question_types` (
  `question_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `question_type` varchar(45) NOT NULL,
  PRIMARY KEY (`question_type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `question_types`
--

INSERT INTO `question_types` (`question_type_id`, `question_type`) VALUES
(1, 'Multiple Choice'),
(2, 'Multiple Answer'),
(3, 'Long Response');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user_answers`
--

CREATE TABLE `user_answers` (
  `user_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `user_answer` text NOT NULL,
  KEY `question_id` (`question_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
