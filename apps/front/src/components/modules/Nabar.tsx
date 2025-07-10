import { SignOutButton } from "./SignOutBtn";
import { getSession } from "@/lib/session";

import SignInPanel from "../templates/SignInPanel";
import Image from "next/image";
import Link from "next/link";
import UserDropdown from "./UserDropdown";

const Navbar = async () => {
  const session = await getSession();

  return (
    <>
      <Link href="/" className="text-2xl font-bold p-2 block">
        My Modern Blog
      </Link>

      <div
        className="
          flex 
          gap-2 
          flex-col 
          ml-auto 
          md:flex-row 
          items-center
          [&>a]:py-2 
          [&>a]:px-4 
          [&>a]:transition 
          [&>a]:rounded-md 
          [&>a]:text-gray-600
          [&>a:hover]:bg-sky-500
          [&>a:hover]:text-sky-100"
      >
        <Link href={"/"}>Blog</Link>
        <Link href={"#about"}>About</Link>
        <Link href={"#contact"}>Contact</Link>
        {session?.user ? <UserDropdown user={session.user} /> : <SignInPanel />}
      </div>
    </>
  );
};

export default Navbar;
