import { ChangeEvent, forwardRef, useId } from "react";

interface Props {
  label: string;
  type?: string;
  error?: string;
  name: string;
  placeholder?: string;
  className?: string;
  inputFieldClassName?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  active?: boolean;
  value: string;
}
const RadioTile = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      error,
      placeholder,
      type,
      name,
      className,
      inputFieldClassName,
      value,
      active,
      onChange,
      ...props
    },
    ref
  ) => {
    const id = useId();
    return (
      <div
        className={`group cursor-pointer p-4 rounded-lg border flex items-center hover:border-[var(--clr-primary-900)] ${
          active ? "border-[var(--clr-primary-900)]" : ""
        }`}
      >
        <input
          className="mr-4 "
          ref={ref}
          type="radio"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          {...props}
        />
        <label className="cursor-pointer" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
);
RadioTile.displayName = "RadioTile";

export default RadioTile;
