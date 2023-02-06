// --------------------------------------------
// Advanced Panel
import { NumberField as NumericInput, Input } from "../Input";
import ColorPickerSwatch from "../ColorPickerSwatch";
import { useState, useEffect, Fragment } from "react";
import { Container, Divider } from "../common";

export default function Advanced({ className, theme, updateTheme }) {
  //Using state to update the pickers when the color change
  const [controls, setControls] = useState({
    syntax: { ...theme.syntax },
    colors: { ...theme.colors },
  });

  const [typeControls, setTypeControls] = useState({
    body: theme.font.body,
    mono: theme.font.mono,
    size: Number(theme.font.size.replace("px", "")),
    lineHeight: Number(theme.font.lineHeight.replace("px", "")),
  });

  useEffect(() => {
    let newControls = {
      colors: { ...theme.colors },
      syntax: { ...theme.syntax },
    };

    if (newControls.syntax.comment) {
      newControls.syntax.comment = newControls.syntax.comment.color;
    }

    setControls(newControls);
  }, [theme]);

  const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

  return (
    <div className={className}>
      {Object.keys(controls).map((area, i) => {
        return (
          <Fragment key={i}>
            {i !== 0 && <Divider />}
            <Container label={capitalize(area)}>
              <div className="grid grid-cols-2 gap-5">
                {Object.keys(controls[area]).map((c, i) => {
                  if (typeof controls[area][c] === "string")
                    return (
                      <ColorPickerSwatch
                        key={c + i}
                        value={controls[area][c]}
                        label={c}
                        horizontal
                        onChange={(color) =>
                          updateTheme(`${area}.${c}`, color.toString("hexa"))
                        }
                      />
                    );
                })}
              </div>
            </Container>
          </Fragment>
        );
      })}
      <Divider />
      <Container label="Font">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            label="Body"
            onChange={(body) => {
              setTypeControls({ ...typeControls, body });
              updateTheme("font.body", body);
            }}
            type="text"
            defaultValue={typeControls.body}
          />
          <Input
            label="Mono"
            onChange={(mono) => {
              setTypeControls({ ...typeControls, mono });
              updateTheme("font.mono", mono);
            }}
            type="text"
            defaultValue={typeControls.mono}
          />
          <NumericInput
            label="Size (px)"
            onChange={(size) => {
              setTypeControls({ ...typeControls, size });
              updateTheme("font.size", `${size}px`);
            }}
            defaultValue={typeControls.size}
          />
          <NumericInput
            label="Line-height (px)"
            onChange={(lh) => {
              setTypeControls({
                ...typeControls,
                lineHeight: lh,
              });
              updateTheme("font.lineHeight", `${lh}px`);
            }}
            defaultValue={typeControls.lineHeight}
          />
        </div>
      </Container>
    </div>
  );
}
