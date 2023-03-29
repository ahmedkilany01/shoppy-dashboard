import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 left-0">
      <div className="h-screen w-400 float-right bg-white dark:bg-gray-200 dark:[#484B52]">
        <div className="flex items-center justify-between p-4 ml-4">
          <p className="text-xl font-semibold">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            className="text-2xl rounded-full hover:bg-light-gray hover:drop-shadow-xl p-3"
            style={{ color: "rgb(153, 171, 180)" }}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="border-t-1 border-color flex flex-col p-4 ml-4">
          <p className="text-lg font-semibold">Theme Option</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              onChange={setMode}
              checked={currentMode === "Light" ? true : false}
              className="cursor-pointer"
            />
            <label htmlFor="light" className="text-md cursor-pointer ml-2">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={setMode}
              checked={currentMode === "Dark" ? true : false}
              className="cursor-pointer"
            />
            <label htmlFor="dark" className="text-md cursor-pointer ml-2">
              Dark
            </label>
          </div>
        </div>

        <div className="border-t-1 border-color flex flex-col p-4 ml-4">
          <p className="text-lg font-semibold">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    onClick={() => setColor(item.color)}
                    className="cursor-pointer w-10 h-10 rounded-full"
                    style={{ backgroundColor: item.color }}
                  >
                    <BsCheck
                      className={`text-2xl text-white ml-2 ${
                        currentColor === item.color ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
