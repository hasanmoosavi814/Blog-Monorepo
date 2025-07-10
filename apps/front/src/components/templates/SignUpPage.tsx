"use client";

import { motion } from "framer-motion";

import SignUpForm from "../modules/SignUpForm";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side - Illustration */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-sky-100 to-indigo-200 flex items-center justify-center p-8"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-700 text-center leading-snug"
        >
          Join the community <br /> of lifelong learners 🌱
        </motion.h1>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center px-8 py-12"
      >
        <div className="max-w-md w-full mx-auto space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-sm text-gray-500 mt-1">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          </div>

          <SignUpForm />
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
