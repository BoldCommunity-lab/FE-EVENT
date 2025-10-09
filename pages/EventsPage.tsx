import React from "react";
import { motion } from "framer-motion";
import { EVENTS_DATA } from "../constants";
import type { EventType } from "../types";

const EventCard: React.FC<{ event: EventType }> = ({ event }) => {
  return (
    <motion.a
      href={event.tiktokUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-brand-orange transition-colors duration-300 group block"
      whileHover={{
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(255, 123, 0, 0.25)",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <p className="text-brand-orange text-sm font-semibold">{event.date}</p>
        <h3 className="text-xl font-bold mt-2 text-white group-hover:text-brand-orange transition-colors duration-300">
          {event.name}
        </h3>
        <p className="text-gray-400 mt-3 text-sm">{event.description}</p>
      </div>
    </motion.a>
  );
};

const EventsPage: React.FC = () => {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Community Events
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Lihat berbagai kolaborasi dan event seru yang telah kami adakan
          bersama komunitas lainnya!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EVENTS_DATA.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
