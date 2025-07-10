"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PencilSquareIcon, UserIcon } from "@heroicons/react/16/solid";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@/components/ui/popover";
import { ListBulletIcon } from "@heroicons/react/16/solid";
import { SignOutButton } from "./SignOutBtn";
import { TSessionUser } from "@/types/auth";

import Link from "next/link";

type Props = {
  user: TSessionUser;
};

const UserDropdown = ({ user }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer hover:shadow w-9 h-9">
          <AvatarImage
            src={user.avatar || ""}
            alt={user.name || "User"}
            className="object-cover"
          />
          <AvatarFallback>
            <UserIcon className="w-8 text-slate-500" />
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className="w-48 bg-gradient-to-br from-indigo-100 to-sky-200 border-black border text-sm p-2"
      >
        <div className="pb-2 mb-2 border-b border-black text-center">
          <p className="font-semibold">{user.name?.toUpperCase() || "User"}</p>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            href="/user/create-post"
            className="flex gap-2 hover:bg-gray-100 px-2 py-1 rounded transition"
          >
            <PencilSquareIcon className="w-4" />
            <span>Create New Post</span>
          </Link>
          <Link
            href="/user/create-post"
            className="flex gap-2 hover:bg-gray-100 px-2 py-1 rounded transition"
          >
            <ListBulletIcon className="w-4" />
            <span>Post</span>
          </Link>
          <SignOutButton />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserDropdown;
