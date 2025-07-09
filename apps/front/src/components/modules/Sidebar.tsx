"use client";

import { PropsWithChildren, ReactNode, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";

type Props = PropsWithChildren<{
  triggerIcon: ReactNode;
  triggerClassName?: string;
}>;

const Sidebar = (props: Props) => {
  // ============ State =============
  const [show, setShow] = useState(false);

  // ============ Ref =============
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as React.RefObject<HTMLElement>, () => setShow(false));

  // ============ State =============
  return (
    <>
      <button
        onClick={() => setShow((prev) => !prev)}
        className={props.triggerClassName}
      >
        {props.triggerIcon}
      </button>
      <div
        ref={ref}
        className={cn(
          "w-60 absolute top-0 z-60 transition-all duration-300 bg-white rounded-r-md min-h-screen",
          {
            "-left-full": !show,
            "left-0": show,
          }
        )}
      >
        {props.children}
      </div>
    </>
  );
};

export default Sidebar;
