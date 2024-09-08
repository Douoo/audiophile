import { useId, forwardRef } from "react";

interface Props {
  label: string;
  type?: string;
  error?: string;
  placeholder?: string;
  className?: string;
  inputFieldClassName?: string;
}
const TextFormField = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      error,
      placeholder,
      type,
      className,
      inputFieldClassName,
      ...props
    },
    ref
  ) => {
    const fieldFor = useId();
    return (
      <div className={`${className} grid gap-2`}>
        <div className="flex items-center justify-between">
          <label className="font-semibold" htmlFor={fieldFor}>
            {label}
          </label>
          {error && <span className="text-red-500 capitalize">{error}</span>}
        </div>

        <input
          className={`${inputFieldClassName} ${
            error ? "border-red-500" : ""
          } border-2 rounded-lg p-4 focus:outline-none focus:border-[var(--clr-primary-900)]`}
          type={type}
          id={fieldFor}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

TextFormField.displayName = "TextFormField";

export default TextFormField;
// export default function TextFormField({
//   className,
//   inputFieldClassName,
//   register,
//   label,
//   fieldFor,
//   type,
//   placeholder,
// }: {
//   className?: string;
//   inputFieldClassName?: string;
//   register?: unknown;
//   label: string;
//   fieldFor: string;
//   type: string;
//   placeholder?: string;
// }) {
//   return (
//     <div className={`${className} grid gap-2`}>
//       <label className="font-semibold" htmlFor={fieldFor}>
//         {label}
//       </label>
//       <input
//         className={`${inputFieldClassName} border rounded-lg p-4`}
//         type={type}
//         placeholder={placeholder}
//       />
//     </div>
//   );
// }
