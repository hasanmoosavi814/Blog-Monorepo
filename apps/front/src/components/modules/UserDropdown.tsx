"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignOutButton } from "./SignOutBtn";
import { TSessionUser } from "@/types/auth";

import Image from "next/image";
import Link from "next/link";

type Props = {
  user: TSessionUser;
};

const UserDropdown = ({ user }: Props) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-9 h-9 rounded-full overflow-hidden border hover:shadow"
      >
        {user.avatar ? (
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={36}
            height={36}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
              />
            </svg>
          </div>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            transition={{ duration: 0.2 }}
            className="
                mt-2 
                w-48 
                z-50 
                border 
                right-0 
                text-sm 
                absolute 
                shadow-lg 
                rounded-md 
                to-sky-200
                bg-gradient-to-br 
                from-indigo-100 
                origin-top-right"
          >
            <div className="p-3 border-b border-black">
              <p className="font-semibold">{user.name || "User"}</p>
            </div>

            <div className="px-2 flex items-start flex-col my-2 gap-2">
              <Link
                href="/dashboard"
                className="block hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>
              <SignOutButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserDropdown;
