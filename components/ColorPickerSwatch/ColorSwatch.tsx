export function ColorSwatch(props: any) {
  let { value, ...otherProps } = props;
  return (
    <div
      role="img"
      className="inline-block rounded-md [forced-color-adjust:none] relative w-10 h-10 m-0.5 overflow-hidden"
      aria-label={value.toString("css")}
      {...otherProps}
    >
      <div className="color-preview-swatch-background" />
      <div
        className="color-preview-swatch-color"
        style={{
          backgroundColor: value.toString("css"),
        }}
      />
    </div>
  );
}
