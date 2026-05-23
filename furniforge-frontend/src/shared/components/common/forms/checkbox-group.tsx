
interface Props {
  label?: string;
  required?: boolean;

  options: string[];
  values: string[];
  onChange: (value: string) => void;

  error?: string;
}

export const CheckboxGroup = ({
  options,
  values,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = values.includes(option);

        return (
          <label
            key={option}
            className={`
              flex items-center gap-2 px-3 py-2
              rounded-xl border cursor-pointer
              transition-all text-sm font-sans
              ${
                active
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border hover:border-accent/50"
              }
            `}
          >
            <input
              type="checkbox"
              checked={active}
              onChange={() => onChange(option)}
              className="w-3.5 h-3.5 accent-accent"
            />

            {option}
          </label>
        );
      })}
    </div>
  );
};