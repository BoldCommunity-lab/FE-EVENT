import React from "react";
import { motion } from "framer-motion";
import { LOGO_URL, ADMIN_DISCORD_URLS } from "../constants";
import { DiscordIcon } from "../components/icons/DiscordIcon";

const AnimatedLogo: React.FC = () => {
  return (
    <motion.div
      className="w-48 h-48 md:w-64 md:h-64 mb-6"
      style={{ perspective: 1000 }}
      animate={{ rotateY: 360 }}
      transition={{
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <img
        src={LOGO_URL}
        alt="BOLD Community Logo"
        className="w-full h-full object-cover rounded-full shadow-orange-glow"
      />
    </motion.div>
  );
};

const HomePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const benefits = [
    "Menambah relasi dan jaringan komunitas Roblox yang lebih luas.",
    "Kesempatan untuk membuat event bersama yang lebih seru dan kreatif.",
    "Promosi dan exposure lebih besar melalui platform komunitas BOLD.",
    "Membangun reputasi komunitasmu melalui kolaborasi yang solid dan profesional.",
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.div variants={itemVariants}>
          <AnimatedLogo />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold text-white tracking-wider"
          style={{ textShadow: "0 0 10px #ff7b00" }}
        >
          BOLD Community
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300"
        >
          Kami membuka kesempatan kolaborasi dengan berbagai komunitas Roblox
          yang ingin membuat event, kegiatan seru, dan membangun koneksi baru
          bersama kami.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/60 border border-gray-700 p-6 rounded-xl text-gray-200 hover:border-brand-orange hover:shadow-orange-glow transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-lg font-semibold">🔥 {benefit}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          {ADMIN_DISCORD_URLS.map((admin) => (
            <motion.a
              key={admin.name}
              href={admin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-64 bg-brand-orange text-black font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-white hover:shadow-orange-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DiscordIcon className="w-6 h-6" />
              <span>Chat {admin.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-8 text-gray-400 text-base max-w-xl"
        >
          Yuk, jadikan eventmu lebih besar dan berkesan dengan bergabung bersama
          kami di BOLD Community 🤝
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HomePage;
