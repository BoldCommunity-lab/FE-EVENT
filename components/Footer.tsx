import React from "react";
import { LOGO_URL, TIKTOK_URL, ADMIN_DISCORD_URLS } from "../constants";
import { DiscordIcon } from "./icons/DiscordIcon";
import { TikTokIcon } from "./icons/TikTokIcon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black relative mt-16 border-t-2 border-brand-orange/50">
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange shadow-orange-glow animate-pulse"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <img
              src={LOGO_URL}
              alt="BOLD Community Logo"
              className="h-12 w-12 rounded-full border-2 border-brand-orange"
            />
            <div>
              <p className="font-bold text-lg text-white">BOLD Community</p>
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} BOLD Community. All Rights
                Reserved.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
            >
              <TikTokIcon className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
