import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AuthForm({ isSignUp }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-96 bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent transition-all duration-500 hover:border-blue-400"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 blur-xl opacity-50"></div>

      <h2 className="text-3xl font-bold text-center text-gray-800 relative z-10">
        {isSignUp ? "Create an Account" : "Welcome Back"}
      </h2>

      <div className="mt-6 space-y-5 relative z-10">
        {isSignUp && (
          <motion.div className="flex items-center space-x-2 border-2 border-gray-300 p-3 rounded-lg transition-all duration-300 focus-within:border-purple-500">
            <FaUser className="text-purple-500" />
            <input type="text" placeholder="Username" className="w-full outline-none bg-transparent" />
          </motion.div>
        )}

        <motion.div className="flex items-center space-x-2 border-2 border-gray-300 p-3 rounded-lg transition-all duration-300 focus-within:border-purple-500">
          <FaUser className="text-purple-500" />
          <input type="email" placeholder="Email" className="w-full outline-none bg-transparent" />
        </motion.div>

        <motion.div className="flex items-center space-x-2 border-2 border-gray-300 p-3 rounded-lg transition-all duration-300 focus-within:border-purple-500">
          <FaLock className="text-purple-500" />
          <input type="password" placeholder="Password" className="w-full outline-none bg-transparent" />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#7e22ce" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/dashboard")}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl mt-4 shadow-md transition-all duration-300 hover:shadow-purple-500/50 hover:bg-purple-700"
        >
          {isSignUp ? "Sign Up" : "Log In"}
        </motion.button>
      </div>

      <p className="text-center text-sm mt-6 text-gray-600 relative z-10">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => navigate(isSignUp ? "/" : "/signup")}
        >
          {isSignUp ? "Log In" : "Sign Up"}
        </span>
      </p>
    </motion.div>
  );
}
