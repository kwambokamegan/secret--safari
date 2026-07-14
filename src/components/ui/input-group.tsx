import type { InputHTMLAttributes, ReactNode } from "react";

interface InputGroupProps
  extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function InputGroup({
  leftIcon,
  rightIcon,
  className = "",
  ...props
}: InputGroupProps) {
  return (
    <div
      className={`flex items-center border rounded-lg overflow-hidden bg-white ${className}`}
    >
      {leftIcon && (
        <div className="px-3 text-gray-500">
          {leftIcon}
        </div>
      )}

      <input
        className="flex-1 px-3 py-2 outline-none"
        {...props}
      />

      {rightIcon && (
        <div className="px-3 text-gray-500">
          {rightIcon}
        </div>
      )}
    </div>
  );
}