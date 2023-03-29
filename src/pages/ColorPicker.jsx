import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <div className="m-2 p-2 md:m-10 md:p-10 rounded-3xl bg-white dark:bg-secondary-dark-bgnom">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex gap-20 justify-center flex-wrap items-center">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              modeSwitcher={false}
              showButtons={false}
              inline
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              modeSwitcher={false}
              showButtons={false}
              inline
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
