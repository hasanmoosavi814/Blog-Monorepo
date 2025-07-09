import { PropsWithChildren } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Sidebar from "../modules/Sidebar";

type Props = PropsWithChildren;

const MobileNavbar = (props: Props) => {
  return (
    <div className="md:hidden">
      <Sidebar
        triggerIcon={<Bars3Icon className="w-4" />}
        triggerClassName="absolute top-2 left-2 fixed"
      >
        {props.children}
      </Sidebar>
    </div>
  );
};

export default MobileNavbar;
