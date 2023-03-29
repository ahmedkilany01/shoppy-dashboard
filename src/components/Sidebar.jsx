import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex text-white items-center gap-5 m-2 pl-4 pt-3 pb-2.5 rounded-lg text-md bg-gray-200";

  const normalLink =
    "flex text-gray-700 dark:text-gray-200 items-center gap-5 m-2 pl-4 pt-3 pb-2.5 rounded-lg text-md hover:bg-light-gray dark:hover:text-black transition duration-75 ease-out hover:ease-in";

  return (
    <div className="ml-3 overflow-auto md:overflow-hidden md:hover:overflow-auto h-screen pb-10">
      {activeMenu && (
        <>
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="flex items-center gap-3 text-xl ml-3 mt-4 font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              <SiShopware />
              <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prev) => !prev)}
                className="rounded-full hover:bg-light-gray text-xl md:hidden block mt-4 p-3"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((link) => (
              <div key={link.title}>
                <p className="text-gray-400 mt-4 uppercase m-3">{link.title}</p>
                {link.links.map((item) => (
                  <NavLink
                    to={`/${item.name}`}
                    onClick={handleCloseSideBar}
                    key={item.name}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {item.icon}
                    <span className="capitalize">{item.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
