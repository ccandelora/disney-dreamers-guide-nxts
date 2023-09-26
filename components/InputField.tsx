import React from "react";

interface Props {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({
  label,
  name,
  type,
  value,
  onChange,
}) => {
  return (
    <div>
      <label>
        {label}:
        <input
          className="box-border p-3 border-1 border-gray-700 w-full"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default InputField;
