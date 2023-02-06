// --------------------------------------------
// Basic Panel
import ToggleSwatch from "../ToggleSwatch";
import ColorPickerSwatch from "../ColorPickerSwatch";
import { Container, Divider } from "../common";

export default function Basic({
  className,
  simpleColors,
  mode,
  updateColor,
  updateMode,
}) {
  return (
    <div className={className}>
      <Container label="Appearance">
        <div className="flex gap-4">
          <ToggleSwatch
            label="light theme"
            className="bg-[#f8f9fb]"
            isSelected={mode === "light"}
            onChange={() => updateMode("light")}
          />
          <ToggleSwatch
            label="dark theme"
            className="bg-[#151515]"
            isSelected={mode === "dark"}
            onChange={() => updateMode("dark")}
          />
        </div>
      </Container>
      <Divider />
      <Container label="Custom Colors">
        <div className="flex flex-wrap gap-4">
          <ColorPickerSwatch
            label="Primary"
            value={simpleColors.primary}
            onChange={(color) => updateColor("primary", color.toString("hexa"))}
          />
          <ColorPickerSwatch
            label="Secondary"
            value={simpleColors.secondary}
            onChange={(color) =>
              updateColor("secondary", color.toString("hexa"))
            }
          />
          <ColorPickerSwatch
            label="Tertiary"
            value={simpleColors.tertiary}
            onChange={(color) =>
              updateColor("tertiary", color.toString("hexa"))
            }
          />
        </div>
      </Container>
    </div>
  );
}
