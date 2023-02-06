"use client";
import "./index.css";
import { useEffect, useState } from "react";
import { parseColor, Color } from "@react-stately/color";
import { ColorArea } from "./ColorArea";
import { ColorSlider } from "./ColorSlider";
import { ColorSwatch } from "./ColorSwatch";

// ---- PopOver
import {
  Button,
  Dialog,
  DialogTrigger,
  OverlayArrow,
  Popover,
} from "react-aria-components";
import { swatchCls } from "../consts";

export default function ColorPicker(props: {
  value: string;
  onChange: (c: Color) => void;
  horizontal?: boolean;
  label?: string;
}) {
  const [color, setColor] = useState(parseColor(props?.value).toFormat("hsla"));
  let [hChannel, sChannel, lChannel] = color.getColorChannels();
  const [endColor, setEndColor] = useState(color);
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    if (rendered) props.onChange(endColor);
    else setRendered(true);
  }, [endColor]);
  return (
    <DialogTrigger>
      <div
        className={`${
          props?.horizontal ? "flex-row" : "flex-col"
        } flex items-center gap-4`}
      >
        <Button
          className={`${swatchCls.outer} border-2 rounded-full bg-white ring-2 focus:outline-none ring-transparent focus:ring-slate-300`}
        >
          <div
            style={{ backgroundColor: endColor.toString("css") }}
            className={swatchCls.inner}
          ></div>
        </Button>
        {props?.label && (
          <span className="text-xl text-slate-700">{props.label}</span>
        )}
      </div>
      <Popover offset={12} placement="bottom left">
        <OverlayArrow>
          <svg className="text-slate-600 fill-slate-900" width={12} height={12}>
            <path
              strokeWidth={2}
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="currentColor"
              d="M0 0,L6 6,L12 0"
            />
          </svg>
        </OverlayArrow>
        <Dialog className="flex flex-col gap-y-2 bg-white shadow-xl border rounded-md p-2">
          <ColorArea
            aria-labelledby="hsb-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={sChannel}
            yChannel={lChannel}
            onChangeEnd={setEndColor}
          />
          <div className="flex items-center gap-2">
            <div className="flex flex-col w-full gap-y-2">
              <ColorSlider
                channel={hChannel}
                value={color}
                onChange={setColor}
                onChangeEnd={setEndColor}
              />
              <ColorSlider
                channel="alpha"
                value={color}
                onChange={setColor}
                onChangeEnd={setEndColor}
              />
            </div>
            <div className="h-full flex items-center justify-center">
              <ColorSwatch
                value={color}
                aria-label={`current color swatch with alpha channel: ${color.toString(
                  "hsla"
                )}`}
              />
            </div>
          </div>
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
}
