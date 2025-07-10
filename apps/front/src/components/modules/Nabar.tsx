import { getSession } from "@/lib/session";

import UserDropdown from "./UserDropdown";
import SignInPanel from "../templates/SignInPanel";
import Link from "next/link";

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
