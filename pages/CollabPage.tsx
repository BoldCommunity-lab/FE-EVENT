import React from "react";
import { motion } from "framer-motion";
import { ADMIN_DISCORD_URLS } from "../constants";
import { DiscordIcon } from "../components/icons/DiscordIcon";

const CollabPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center bg-gray-900/50 p-10 rounded-xl border border-gray-700 max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Request Event or Collab
        </h1>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Kami sangat terbuka untuk berkolaborasi dengan komunitas Roblox
          lainnya atau menerima ide event seru dari para member. Jika kamu
          memiliki ide, proposal, atau ingin bekerjasama, jangan ragu untuk
          menghubungi Admin Event kami.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
          {ADMIN_DISCORD_URLS.map((admin, index) => (
            <motion.a
              key={index}
              href={admin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-brand-orange text-black font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-white hover:shadow-orange-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DiscordIcon className="w-7 h-7" />
              <span className="text-lg">Chat {admin.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CollabPage;
