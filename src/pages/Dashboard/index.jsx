import React from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="w-2/3 mx-auto h-full flex flex-col justify-center text-center">
      <h1 className="text-6xl font-bold mb-8">Collection Intelegent App</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
        harum nobis molestiae pariatur accusantium et aspernatur quod nisi
        distinctio vitae, dolorum architecto soluta repellat expedita obcaecati
        quo consectetur corporis suscipit debitis, sit rerum adipisci provident
        hic repudiandae. Inventore beatae iste, officiis aut delectus et,
        reprehenderit voluptatum atque hic doloremque sunt! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolor, obcaecati. Quisquam eaque
        molestias inventore rerum delectus placeat a, expedita dolores doloribus
        ea illum facilis, soluta vel eos aliquam unde reprehenderit! Debitis
        inventore fugit molestias nobis facilis similique tempora eligendi
        ratione nam numquam unde qui, et, quos commodi cupiditate pariatur
        rerum.
      </p>

      {/* <motion.div
        className="w-14 h-14 bg-white rounded-xl"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      /> */}
    </div>
  );
};

export default Dashboard;
