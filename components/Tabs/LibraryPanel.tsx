import * as themeGallery from "@codesandbox/sandpack-themes";
import ThemeSwatch from "../ThemeSwatch";
import { Container } from "../common";
// --------------------------------------------
// Library Tab
export default function Library({ className, setTheme }: any) {
  return (
    <div className={className}>
      <Container label="Themes">
        <div className="flex flex-wrap gap-6 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Object.entries(themeGallery).map(([label, payload]) => {
            if (!payload.colors) return null;
            return (
              <ThemeSwatch
                key={payload.colors.accent + payload.colors.surface1}
                colors={[payload.colors.accent, payload.colors.surface1]}
                label={label}
                onClick={() => setTheme(payload)}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}
