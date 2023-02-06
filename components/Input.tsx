import { useRef } from "react";
import { useTextField, AriaTextFieldProps } from "@react-aria/textfield";

// import { Label, NumberField, TextField, Text } from "react-aria-components";
// import type { TextFieldProps, NumberFieldProps } from "react-aria-components";
import { useNumberFieldState } from "@react-stately/numberfield";
import { useNumberField, AriaNumberFieldProps } from "@react-aria/numberfield";
import { useLocale } from "@react-aria/i18n";

export function NumberField(props: AriaNumberFieldProps) {
  let { locale } = useLocale();
  let state = useNumberFieldState({ ...props, locale });
  let inputRef = useRef(null);
  let { labelProps, inputProps } = useNumberField(props, state, inputRef);

  return (
    <div className="flex flex-col w-full">
      <label
        className="text-slate-900 font-medium sm:text-xl mb-1.5"
        {...labelProps}
      >
        {props.label}
      </label>
      <input
        className="w-full placehover-slate-300 text-slate-700 font-medium sm:text-xl focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent focus:ring-slate-500 focus:ring-offset-white  tracking-[-0.025em] m-0 p-1 rounded-md border"
        {...inputProps}
        ref={inputRef}
      />
    </div>
  );
}

export function Input(props: AriaTextFieldProps) {
  let { label } = props;
  let ref = useRef(null);
  let { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <div className="flex flex-col w-full">
      <label
        className="text-slate-900 font-medium sm:text-xl mb-1.5"
        {...labelProps}
      >
        {label}
      </label>
      <input
        className="w-full placehover-slate-300 text-slate-700 font-medium sm:text-xl focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent focus:ring-slate-500 focus:ring-offset-white  tracking-[-0.025em] m-0 p-1 rounded-md border"
        {...inputProps}
        ref={ref}
      />
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}

// export function Input2({
//   label,
//   type,
//   description,
//   errorMessage,
//   ...props
// }: MyTextFieldProps) {
//   return (
//     <TextField className="flex flex-col w-96" {...props}>
//       <Label className="text-slate-900 font-medium sm:text-xl mb-1.5">
//         {label}
//       </Label>
//       <Input className="w-full font-medium sm:text-xl focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent focus:ring-slate-500 focus:ring-offset-white  tracking-[-0.025em] m-0 p-1 rounded-md border" />
//       {description && (
//         <Text className="text-slate-500 text-sm" slot="description">
//           {description}
//         </Text>
//       )}
//       {errorMessage && (
//         <Text className="text-red-500 text-sm" slot="errorMessage">
//           {errorMessage}
//         </Text>
//       )}
//     </TextField>
//   );
// }

// interface MyNumberFieldProps extends NumberFieldProps {
//   label?: string;
//   description?: string;
//   errorMessage?: string;
// }

// export function NumericInput({
//   label,
//   description,
//   errorMessage,
//   ...props
// }: MyNumberFieldProps) {
//   return (
//     <NumberField {...props}>
//       <Label className="text-slate-900 font-medium sm:text-xl mb-1.5">
//         {label}
//       </Label>
//       <Input className="w-full font-medium sm:text-xl focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent focus:ring-slate-500 focus:ring-offset-white  tracking-[-0.025em] m-0 p-1 rounded-md border" />
//       {description && (
//         <Text className="text-slate-500 text-sm" slot="description">
//           {description}
//         </Text>
//       )}
//       {errorMessage && (
//         <Text className="text-red-500 text-sm" slot="errorMessage">
//           {errorMessage}
//         </Text>
//       )}
//     </NumberField>
//   );
// }

// export default Input;
