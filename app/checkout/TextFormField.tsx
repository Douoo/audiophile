export default function TextFormField({
  className,
  inputFieldClassName,
  label,
  fieldFor,
  type,
  placeholder,
}: {
  className?: string;
  inputFieldClassName?: string;
  label: string;
  fieldFor: string;
  type: string;
  placeholder?: string;
}) {
  return (
    <div className={`${className} grid gap-2`}>
      <label className="font-semibold" htmlFor={fieldFor}>
        {label}
      </label>
      <input
        className={`${inputFieldClassName} border rounded-lg p-4`}
        name={fieldFor}
        id={fieldFor}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
