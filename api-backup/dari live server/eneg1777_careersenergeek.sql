-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 14, 2025 at 10:10 AM
-- Server version: 10.11.11-MariaDB-cll-lve
-- PHP Version: 8.3.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eneg1777_careersenergeek`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_users`
--

CREATE TABLE `admin_users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `role` enum('superadmin','admin') DEFAULT 'admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `admin_users`
--

INSERT INTO `admin_users` (`id`, `username`, `email`, `password_hash`, `created_at`, `updated_at`, `role`) VALUES
(9, 'one', 'one@mail.com', '$2y$10$0osnHLZS8ejDnktCzY0qpOkvB2tmQROVjhdnHW6DwFzwGJ4YQlBMu', '2025-01-02 11:07:35', '2025-01-02 11:07:35', 'admin'),
(11, 'admin', 'energeekmail@gmail.com', '$2y$10$pgKZlf61VfBgaMNGRzFjPOwUPcMPA1T2/1Hlf0pOh/hPZx2BO9c2u', '2025-01-03 09:56:24', '2025-01-03 09:56:24', 'superadmin');

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `loker_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `portfolio_link` varchar(255) DEFAULT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `shortresume` longtext NOT NULL,
  `desiredsalary` varchar(256) NOT NULL,
  `status` enum('selected','unselected') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `loker_id`, `name`, `email`, `phone`, `portfolio_link`, `attachment`, `created_at`, `shortresume`, `desiredsalary`, `status`) VALUES
(15, 8, 'Test User', 'test@mail.com', '231231', 'https://www.google.co.id', 'attachment/unaivan-resum_67775096a2e28.pdf', '2025-01-03 02:51:02', '', '', NULL),
(16, 7, '.htaccess', 'kerja.lur01@gmail.com', '666', 'https://www.google.co.id', 'attachment/unaivan-resum_677c8aa608a34.pdf', '2025-01-07 02:00:06', '', '', 'selected'),
(17, 7, 'una', 'unaivandesign@gmail.com', '666', 'https://www.google.co.id', 'attachment/unaivan-resum_677c9718a3a66.pdf', '2025-01-07 02:53:12', '', '', NULL),
(18, 7, 'ilma', 'munawar@live.com', '213123', 'https://www.google.co.id', 'attachment/unaivan-resum_677c9788421b3.pdf', '2025-01-07 02:55:04', '', '', NULL),
(19, 7, 'php.ini', 'munawar@live.com', '231231', 'https://www.google.co.id', 'attachment/unaivan-resum_677c97bb4de91.pdf', '2025-01-07 02:55:55', '', '', NULL),
(20, 7, 'Dinivan Nendra Gunawan', 'dinivannendragunawan@gmail.com', '+6289513627458', 'https://dinivan.vercel.app/', 'attachment/unaivan-resum_677c986db36ce.pdf', '2025-01-07 02:58:53', '', '', NULL),
(21, 7, 'UX Una', 'unaivan22@gmail.com', '+6289513627458', 'https://www.google.co.id', 'attachment/unaivan-resum_677c9994d8ac4.pdf', '2025-01-07 03:03:48', 'Currently, a designer at an agency where translate complex technical concepts into simple UX. On spare time I Enjoy the design engineering and component manufacturing as well as the fun interactions.', '', NULL),
(22, 7, 'Iin', 'unaivan22@gmail.com', '+6289513627458', 'https://www.google.co.id', 'attachment/unaivan-resum_677ca448cce0f.pdf', '2025-01-07 03:49:28', 'Oke gas', '', NULL),
(23, 8, 'una', 'unaivan22@gmail.com', '+6289513627458', 'https://www.google.co.id', 'attachment/unaivan-resum_677ca49b37642.pdf', '2025-01-07 03:50:51', 'ok', '1000000000', NULL),
(24, 7, 'Junaedi', 'juna@edi.com', '990', 'https://dinivan.vercel.app/', 'attachment/unaivan-resum_677d453690684.pdf', '2025-01-07 15:16:06', 'oke', '10000', NULL),
(25, 7, 'ridwan', 'rid@wan.com', '9999', 'https://www.google.co.id', 'attachment/unaivan-resum_677d45654dcff.pdf', '2025-01-07 15:16:53', 'Joss', '100000', NULL),
(26, 7, 'XC', 'kerja.lur01@gmail.com', '23123', '', 'attachment/unaivan-resum_677d55452df25.pdf', '2025-01-07 16:24:37', 'haha', '123123', NULL),
(27, 7, 'XZZ', 'unaivan22@gmail.com', '231231', 'https://dinivan.vercel.app/', 'attachment/resum_677f4cee090d8.pdf', '2025-01-09 04:13:34', 'Currently, a designer at an agency where translate complex technical concepts into simple UX. On spare time I Enjoy the design engineering and component manufacturing as well as the fun interactions.', '12312312312', NULL),
(28, 7, 'Renu', 'renu@mail.xyz', '123123', '', 'attachment/resum_6781e551470fc.pdf', '2025-01-11 03:28:17', 'renu here', '1000000000', NULL),
(29, 7, 'hihi', 'unaivan22@gmail.com', '990', 'https://dinivan.vercel.app/', 'attachment/resum_6788738f1bfb3.pdf', '2025-01-16 02:48:47', 'jozz', '1000000000', NULL),
(30, 7, 'dirga', 'unaivan22@gmail.com', '+6289513627458', 'https://dinivan.vercel.app/', 'attachment/resum_678da58d8b502.pdf', '2025-01-20 01:23:25', 'a', '1000000000', NULL),
(31, 7, 'UX Una', 'unaivan22@gmail.com', '+6289513627458', 'https://dinivan.vercel.app/', 'attachment/resum_678da637a6ed0.pdf', '2025-01-20 01:26:15', 'The sun set over the horizon, painting the sky with hues of orange and pink. A gentle breeze rustled the leaves, and the world seemed to pause, embracing the calm before the arrival of twilight.', '1000000000', NULL),
(32, 7, 'dani', 'dani@pedrosa.com', '231231', 'google.com', 'attachment/resum_678dbf8aa3a4d.pdf', '2025-01-20 03:14:18', 'oke', '10', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `loker`
--

CREATE TABLE `loker` (
  `id` int(11) NOT NULL,
  `namaposisi` varchar(255) NOT NULL,
  `divisi` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deadline` date NOT NULL,
  `jobdeskripsi` text NOT NULL,
  `techstack` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `loker`
--

INSERT INTO `loker` (`id`, `namaposisi`, `divisi`, `created_at`, `deadline`, `jobdeskripsi`, `techstack`, `status`) VALUES
(7, 'UI/UX Designer', 'Design', '2025-01-01 01:36:32', '2025-04-01', '<h4><strong>Tanggung Jawab</strong>:</h4><ul><li>Melakukan riset untuk memahami kebutuhan, perilaku, dan masalah pengguna.</li><li>Menganalisis feedback pengguna untuk meningkatkan pengalaman antarmuka.</li><li>Membuat wireframe, prototipe, dan desain akhir antarmuka menggunakan alat desain seperti Figma, Adobe XD, atau Sketch.</li><li>Memastikan desain sesuai dengan pedoman branding perusahaan.</li><li>Membuat user flow yang intuitif untuk aplikasi atau situs web.</li><li>Menguji prototipe untuk mengidentifikasi hambatan atau masalah dalam pengalaman pengguna.</li><li>Bekerja sama dengan pengembang, manajer produk, dan tim pemasaran untuk memastikan implementasi desain berjalan sesuai rencana.</li><li>Memberikan panduan desain dan spesifikasi teknis kepada tim pengembang.</li><li>Melakukan evaluasi terhadap produk digital berdasarkan data analitik dan umpan balik pengguna.</li><li>Mengoptimalkan desain yang ada untuk meningkatkan usability dan performa.</li></ul><p><br></p><h4><strong>Kualifikasi</strong>:</h4><ul><li>Pengalaman minimal 2 tahun di bidang desain UI/UX.</li><li>Menguasai alat desain seperti Figma, Sketch, atau Adobe Creative Suite.</li><li>Pemahaman mendalam tentang prinsip-prinsip desain responsif dan pengalaman pengguna.</li><li>Mampu membuat prototipe interaktif menggunakan alat seperti Figma atau InVision.</li><li>Pengetahuan dasar tentang HTML, CSS, atau teknologi web lainnya lebih diutamakan.</li></ul><p><br></p><h4><strong>Keuntungan</strong>:</h4><ul><li>Gaji kompetitif.</li><li>Waktu kerja fleksibel.</li><li>Kesempatan untuk bekerja dalam tim kreatif yang inovatif.</li><li>Pengembangan keterampilan melalui pelatihan atau konferensi.</li></ul>', 'Figma, Adobe Creative Suite, UX', 0),
(8, 'Frontend Developer', 'Developer', '2025-01-01 01:59:13', '2025-04-16', '<h4><strong>Tanggung Jawab</strong>:</h4><ul><li>Mengubah desain UI/UX menjadi kode yang fungsional menggunakan HTML, CSS, dan JavaScript.</li><li>Membuat komponen antarmuka yang responsif dan interaktif untuk situs web atau aplikasi.</li><li>Mengoptimalkan situs web atau aplikasi untuk kecepatan dan skalabilitas.</li><li>Memastikan aplikasi berjalan dengan baik di berbagai perangkat dan browser (cross-browser compatibility).</li><li>Berkolaborasi dengan tim backend untuk mengintegrasikan layanan API ke dalam antarmuka.</li><li>Memastikan data yang ditampilkan sesuai dengan kebutuhan aplikasi.</li><li>Melakukan pengujian dan debugging untuk memastikan kualitas dan fungsionalitas aplikasi.</li><li>Memanfaatkan alat pengujian seperti Jest, Cypress, atau lainnya untuk memastikan aplikasi bebas bug.</li><li>Bekerja sama dengan UI/UX Designer, Product Manager, dan Backend Developer dalam pengembangan produk.</li><li>Memberikan masukan teknis untuk meningkatkan pengalaman pengguna.</li><li>Mempelajari dan mengimplementasikan teknologi front-end terbaru seperti React, Vue.js, atau Angular.</li><li>Menulis kode yang bersih, terstruktur, dan dapat di-maintain.</li></ul><p><br></p><h4><strong>Kualifikasi</strong>:</h4><ul><li>Pengalaman minimal 2 tahun sebagai Front-End Developer.</li><li>Menguasai HTML, CSS, dan JavaScript (ES6+).</li><li>Familiar dengan framework front-end seperti React, Angular, atau Vue.js.</li><li>Memahami prinsip desain responsif dan grid system.</li><li>Pengalaman menggunakan alat pengelolaan versi seperti Git.</li><li>Pengetahuan tentang SEO dasar dan optimisasi performa front-end.</li><li>Pemahaman dasar tentang pengembangan backend adalah nilai tambah.</li></ul><p><br></p><h4><strong>Keuntungan</strong>:</h4><ul><li>Gaji kompetitif sesuai pengalaman.</li><li>Kesempatan untuk bekerja dengan teknologi terkini.</li><li>Lingkungan kerja kolaboratif dan inovatif.</li><li>Waktu kerja fleksibel dan kesempatan bekerja secara remote.</li></ul>', 'Vuejs, Reactjs, Nextjs', 0),
(13, 'DevOps Engineer', 'Engineer', '2025-01-20 02:47:55', '2025-04-20', '<h4><strong>Tanggung Jawab</strong>:</h4><ul><li>Mendesain, mengimplementasikan, dan mengelola infrastruktur berbasis cloud seperti AWS, Google Cloud, atau Azure.</li><li>Mengotomatiskan penyebaran infrastruktur menggunakan alat seperti Terraform, Ansible, atau CloudFormation.</li><li>Membuat dan mengelola pipeline Continuous Integration/Continuous Deployment (CI/CD) menggunakan Jenkins, GitLab CI, CircleCI, atau alat serupa.</li><li>Memastikan proses build, test, dan deployment berjalan secara otomatis dan efisien.</li><li>Memantau kinerja sistem dan aplikasi menggunakan alat seperti Prometheus, Grafana, atau ELK Stack (Elasticsearch, Logstash, Kibana).</li><li>Mendeteksi dan memperbaiki masalah performa dan infrastruktur dengan cepat.</li><li>Mengimplementasikan langkah-langkah keamanan untuk melindungi infrastruktur dan aplikasi, seperti enkripsi, firewall, dan monitoring keamanan.</li><li>Melakukan pengujian kerentanan dan audit keamanan secara rutin.</li><li>Mengotomatiskan proses operasional untuk meningkatkan efisiensi tim pengembangan.</li><li>Memastikan sistem dapat diskalakan untuk menangani peningkatan lalu lintas dan beban kerja.</li><li>Bekerja sama dengan tim pengembang untuk memastikan lingkungan pengembangan sesuai dengan kebutuhan aplikasi.</li><li>Membantu menyelesaikan masalah yang muncul selama proses pengembangan dan deployment.</li></ul><h4><br></h4><h4><br></h4><p><strong>Kualifikasi</strong>:</p><ul><li>Pengalaman minimal 2-3 tahun di bidang DevOps atau peran serupa.</li><li>Pemahaman mendalam tentang sistem operasi Linux/Unix.</li><li>Pengalaman dengan alat CI/CD seperti Jenkins, GitLab CI, atau CircleCI.</li><li>Familiar dengan alat otomasi seperti Terraform, Ansible, atau Chef.</li><li>Pengetahuan mendalam tentang layanan cloud (AWS, GCP, Azure).</li><li>Pengalaman dengan containerisasi menggunakan Docker dan manajemen Kubernetes.</li><li>Pemahaman tentang keamanan infrastruktur dan best practices.</li><li>Keterampilan scripting menggunakan Bash, Python, atau Go adalah nilai tambah.</li></ul><h4><br></h4><h4><br></h4><p><strong><span class=\"ql-cursor\">ï»¿</span>Keuntungan</strong>:</p><ul><li>Gaji kompetitif sesuai pengalaman.</li><li>Kesempatan untuk bekerja dengan teknologi dan infrastruktur modern.</li><li>Program pelatihan dan sertifikasi untuk pengembangan keterampilan.</li><li>Fleksibilitas kerja (remote atau hybrid).</li></ul><p><br></p>', 'AWS, Google Cloud Platform (GCP), Microsoft Azure, GitLab CI/CD, Docker', 1),
(14, 'Backend Developer', 'Developer', '2025-01-21 01:05:58', '2025-05-21', '<h4><strong>Tanggung Jawab</strong>:</h4><ul><li>Mendesain, mengembangkan, dan memelihara API RESTful atau GraphQL untuk mendukung aplikasi front-end.</li><li>Memastikan API aman, efisien, dan dapat diskalakan.</li><li>Mendesain dan mengelola skema database untuk menyimpan dan mengambil data dengan efisien.</li><li>Mengoptimalkan kueri dan performa database.</li><li>Mengelola database relasional (MySQL, PostgreSQL) atau NoSQL (MongoDB, Redis).</li><li>Mengimplementasikan langkah-langkah keamanan seperti otentikasi, otorisasi, dan enkripsi data.</li><li>Melakukan audit dan pengujian keamanan pada aplikasi backend.</li><li>Menganalisis dan meningkatkan kinerja sistem backend untuk menangani lalu lintas tinggi.</li><li>Mengoptimalkan proses server untuk meminimalkan latensi.</li><li>Mengintegrasikan layanan pihak ketiga seperti gateway pembayaran, layanan email, atau API eksternal lainnya.</li><li>Bekerja dengan tim DevOps untuk deployment aplikasi yang efisien.</li><li>Bekerja sama dengan tim front-end dan desainer untuk memastikan integrasi aplikasi berjalan lancar.</li><li>Memberikan masukan teknis kepada tim produk untuk merancang fitur baru.</li><li>Menulis dan menjalankan unit testing, integration testing, atau end-to-end testing untuk backend.</li><li>Memperbaiki bug dan memastikan stabilitas aplikasi.</li></ul><h4><br></h4><h4><strong>Kualifikasi</strong>:</h4><ul><li>Pengalaman minimal 2-3 tahun sebagai Backend Developer.</li><li>Menguasai bahasa pemrograman backend seperti <strong>Node.js</strong>, <strong>Python (Django/Flask)</strong>, <strong>Java (Spring Boot)</strong>, <strong>PHP (Laravel)</strong>, atau <strong>Ruby on Rails</strong>.</li><li>Pemahaman mendalam tentang database relasional (MySQL, PostgreSQL) dan NoSQL (MongoDB, Redis).</li><li>Familiar dengan arsitektur microservices dan pengelolaan API.</li><li>Pengalaman dengan alat pengelolaan versi seperti Git.</li><li>Pemahaman tentang keamanan backend dan best practices.</li><li>Pengalaman menggunakan Docker, Kubernetes, atau teknologi container lainnya merupakan nilai tambah.</li></ul><h4><br></h4><h4><strong>Keuntungan</strong>:</h4><ul><li>Gaji kompetitif sesuai pengalaman.</li><li>Fleksibilitas kerja (remote atau hybrid).</li><li>Kesempatan untuk bekerja dengan teknologi terbaru.</li><li>Lingkungan kerja kolaboratif dan inovatif.</li><li>Fasilitas pelatihan dan pengembangan karir.</li></ul><p><br></p>', 'Laravel, API, Nodejs', 1),
(15, 'Software Tester', 'Production', '2025-01-21 01:08:43', '2025-10-21', '<h4><strong>Tanggung Jawab</strong>:</h4><ul><li>Menyusun rencana pengujian berdasarkan kebutuhan dan spesifikasi sistem.</li><li>Membuat skenario pengujian (test cases) untuk memastikan semua fungsi bekerja dengan baik.</li><li>Melakukan pengujian manual atau otomatis untuk menemukan bug atau masalah fungsionalitas.</li><li>Melakukan pengujian kompatibilitas pada berbagai perangkat dan browser.</li><li>Menganalisis hasil pengujian untuk mengidentifikasi masalah dan memberikan rekomendasi.</li><li>Membuat laporan bug menggunakan alat seperti JIRA, Bugzilla, atau Trello.</li><li>Bekerja sama dengan tim pengembang untuk memperbaiki bug dan memastikan kualitas aplikasi.</li><li>Memberikan masukan untuk meningkatkan performa dan pengalaman pengguna.</li><li>Membuat skrip pengujian otomatis menggunakan alat seperti Selenium, Appium, atau Katalon Studio.</li><li>Memastikan skrip pengujian tetap diperbarui sesuai perubahan sistem.</li></ul><h4><br></h4><h4><strong>Kualifikasi</strong>:</h4><ul><li>Pendidikan minimal D3/S1 di bidang Teknologi Informasi atau terkait.</li><li>Pengalaman minimal 1-2 tahun di bidang pengujian perangkat lunak.</li><li>Familiar dengan alat pengujian seperti Selenium, Postman, atau JMeter.</li><li>Pemahaman tentang siklus hidup pengembangan perangkat lunak (SDLC) dan metodologi Agile.</li><li>Kemampuan analitis yang baik dan perhatian terhadap detail.</li></ul>', 'TestRail, Zephyr, TestLink', 1),
(16, 'Mobile Developer', 'Developer', '2025-01-21 01:12:18', '2025-07-31', '<h4><strong>Tanggung Jawab</strong>:</h4><ul><li>Mendesain, mengembangkan, dan memelihara aplikasi mobile berbasis <strong>Android</strong> atau <strong>iOS</strong>.</li><li>Mengoptimalkan performa aplikasi agar responsif, ringan, dan sesuai standar UX/UI.</li><li>Mengintegrasikan aplikasi mobile dengan API RESTful atau GraphQL.</li><li>Memastikan komunikasi data antara aplikasi dan backend berjalan lancar.</li><li>Melakukan pengujian aplikasi secara manual maupun otomatis untuk memastikan tidak ada bug.</li><li>Memperbaiki bug yang ditemukan dalam proses pengembangan atau laporan pengguna.</li><li>Bekerja sama dengan desainer UI/UX untuk memastikan desain diterapkan sesuai dengan spesifikasi.</li><li>Berkolaborasi dengan tim backend untuk mengintegrasikan fitur baru.</li><li>Melakukan pembaruan aplikasi secara berkala untuk menambahkan fitur baru atau kompatibilitas dengan sistem operasi terbaru.</li><li>Memonitor kinerja aplikasi di produksi dan memberikan solusi untuk meningkatkan stabilitas dan performa.</li><li>Mengelola penyimpanan data lokal menggunakan SQLite, Room, Core Data, atau teknologi serupa.</li><li>Mengimplementasikan langkah-langkah keamanan seperti enkripsi data, otentikasi, dan otorisasi.</li></ul><h4><br></h4><h4><strong>Kualifikasi</strong>:</h4><ul><li>Pengalaman kerja minimal 2 tahun sebagai Mobile Developer.</li><li>Menguasai teknologi pengembangan aplikasi mobile:</li><li class=\"ql-indent-1\"><strong>Android</strong>: Kotlin atau Java</li><li class=\"ql-indent-1\"><strong>iOS</strong>: Swift atau Objective-C</li><li class=\"ql-indent-1\"><strong>Hybrid/Multiplatform</strong>: Flutter, React Native, Xamarin, atau Ionic.</li><li>Pemahaman mendalam tentang arsitektur aplikasi mobile (MVC, MVVM, atau Clean Architecture).</li><li>Familiar dengan tools pengembangan seperti Android Studio, Xcode, atau Visual Studio Code.</li><li>Pengalaman dengan pengujian aplikasi menggunakan tools seperti Espresso, XCTest, atau Appium.</li><li>Pemahaman tentang layanan cloud dan notifikasi push seperti Firebase atau AWS.</li><li>Keterampilan dalam integrasi API dan manajemen penyimpanan data lokal.</li></ul><h4><br></h4><h4><strong>Keuntungan</strong>:</h4><ul><li>Gaji kompetitif sesuai pengalaman.</li><li>Kesempatan bekerja dengan teknologi terbaru di bidang mobile development.</li><li>Lingkungan kerja yang mendukung pengembangan karir.</li><li>Dukungan pelatihan dan sertifikasi untuk meningkatkan keahlian.</li><li>Fleksibilitas kerja (remote atau hybrid).</li></ul>', 'Flutter, Rest API', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_users`
--
ALTER TABLE `admin_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `loker_id` (`loker_id`);

--
-- Indexes for table `loker`
--
ALTER TABLE `loker`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_users`
--
ALTER TABLE `admin_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `loker`
--
ALTER TABLE `loker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `applications`
--
ALTER TABLE `applications`
  ADD CONSTRAINT `applications_ibfk_1` FOREIGN KEY (`loker_id`) REFERENCES `loker` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
