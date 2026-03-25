/**
 * Product: Fagom Professional Template
 * Author: Fagom
 * License: Single Use License (EULA)
 * Copyright (c) 2026 Fagom. All rights reserved.
 */

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  multiline?: false;
}

interface TextareaFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  multiline: true;
  rows?: number;
}

type Props = InputFieldProps | TextareaFieldProps;

const baseClass =
  "w-full border border-[#ddd8d2] rounded-lg px-3 py-2 text-sm text-[#3d3530] bg-[#faf8f6] focus:outline-none focus:ring-2 focus:ring-[#8fa68c] transition-colors placeholder:text-[#c0b8b0]";

export const Field = (props: Props) => {
  return (
    <div className="mb-4 last:mb-0">
      <label className="block text-xs font-medium text-[#7a6e5f] mb-1.5 tracking-wide uppercase">
        {props.label}
      </label>
      {props.multiline ? (
        <textarea
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder={props.placeholder}
          rows={(props as TextareaFieldProps).rows ?? 3}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          type="text"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder={props.placeholder}
          className={baseClass}
        />
      )}
    </div>
  );
};
