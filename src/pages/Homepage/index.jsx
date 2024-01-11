import React from "react";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div style={{ padding: 20 }} className="bg-red-500">
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>

      <motion.div
        className="w-14 h-14 bg-white rounded-xl"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      />
    </div>
  );
};

export default Homepage;
