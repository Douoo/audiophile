export default function RadioTile({
  className,
  label,
  fieldFor,
  value,
  name,
}: {
  className?: string;
  label: string;
  fieldFor: string;
  value: string;
  name: string;
}) {
  return (
    <div className="p-4 rounded-lg border">
      <input
        className="mr-4"
        type="radio"
        id={fieldFor}
        name={name}
        value={value}
      />
      <label htmlFor={fieldFor}>{label}</label>
    </div>
  );
}
