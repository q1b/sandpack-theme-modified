"use client";
import { useState } from "react";
import { SSRProvider } from "react-aria";
import { Tabs, Item, Basic, Advance, Library } from "./Tabs";
import { generateBasedOnSimpleColors } from "../lib/generateTheme";
import {
  Sandpack,
  SandpackProvider,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";
import { Container } from "./common";
const DEFAULT_COLORS = {
  primary: "#0971F1",
  secondary: "#BF5AF2",
  tertiary: "#FF453A",
};
const DEFAULT_MODE = "light";
const DEFAULT_THEME = generateBasedOnSimpleColors(DEFAULT_COLORS, DEFAULT_MODE);

export default function Example() {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [simpleColors, setSimpleColors] = useState(DEFAULT_COLORS);
  const [mode, setMode] = useState("light");

  // -----------------------
  // Updates
  const updateColor = (key: keyof typeof DEFAULT_COLORS, color: string) => {
    let newState = { ...simpleColors };
    newState[key] = color;
    let newTheme = generateBasedOnSimpleColors(newState, mode);

    setTheme(newTheme);
    setSimpleColors(newState);
  };

  const updateTheme = (path: string, value: string) => {
    let newTheme = { ...theme };
    let [area, key] = path.split(".") as [keyof typeof DEFAULT_THEME, string];

    // HANDLE Comment 2 level deep
    if (key === "comment") {
      newTheme[area][key] = {
        color: value,
        fontStyle: "italic",
      };
    } else {
      newTheme[area][key] = value;
    }

    setTheme(newTheme);
  };

  const updateMode = (newMode) => {
    let newTheme = generateBasedOnSimpleColors(simpleColors, newMode);

    setTheme(newTheme);
    setMode(newMode);
  };
  return (
    <SSRProvider>
      {/* grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 place-content-center */}
      <div className="flex flex-wrap w-full pb-10">
        {/* flex sm:mb-10 flex-col gap-y-6 w-full items-start */}
        <Tabs className="flex w-full sm:w-1/2 flex-col px-5 sm:pl-10 sm:pr-5 mb-16 sm:mb-0 justify-stretch h-full gap-y-6 w-full sm:sticky sm:top-10 items-start">
          <Item title="Basic">
            <Basic
              className="w-full"
              mode={mode}
              simpleColors={simpleColors}
              updateColor={updateColor}
              updateMode={updateMode}
            />
          </Item>
          <Item title="Advanced">
            <Advance
              className="w-full"
              theme={theme}
              updateTheme={updateTheme}
            />
          </Item>
          <Item title="Library">
            <Library setTheme={setTheme} />
          </Item>
        </Tabs>
        <SandpackKnob theme={theme} />
      </div>
    </SSRProvider>
  );
}

const SandpackKnob = ({ theme }: { theme: typeof DEFAULT_THEME }) => {
  return (
    <div className="w-full sm:w-1/2 h-full justify-stretch px-5 sm:pl-5 sm:pr-10 flex flex-col gap-y-4 mt-2 sm:sticky sm:top-10">
      {/* w-full h-full justify-stretch flex flex-col gap-y-4 mt-2 sm:sticky sm:top-0 */}
      <Container label="Preview">
        <Sandpack
          options={{
            showLineNumbers: true,
            showInlineErrors: true,
            showNavigator: true,
            showTabs: true,
            closableTabs: true,
            visibleFiles: [
              "/App.js",
              "/index.js",
              "/public/index.html",
              "/styles.css",
            ],
          }}
          template="react"
          theme={theme}
        />
      </Container>
      <Container label="Export">
        <div className="w-full">
          <SandpackProvider>
            <div className="border overflow-x-scroll rounded-md">
              <SandpackCodeViewer code={JSON.stringify(theme, null, 2)} />
            </div>
          </SandpackProvider>
        </div>
      </Container>
    </div>
  );
};
