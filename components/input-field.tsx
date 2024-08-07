"use client";

import { ChangeEvent } from "react";

interface IInputFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: IInputFieldProps) => {
  const { id, label, value, onChange } = props;

  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;
