import { useRef, useState } from "react";

interface InputOTPProps {
  length?: number;
  onComplete?: (otp: string) => void;
}

export default function InputOTP({
  length = 6,
  onComplete,
}: InputOTPProps) {
  const [values, setValues] = useState(
    Array(length).fill("")
  );

  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    value: string,
    index: number
  ) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...values];
    updated[index] = value;
    setValues(updated);

    if (value && index < length - 1) {
      refs.current[index + 1]?.focus();
    }

    const otp = updated.join("");

    if (otp.length === length && !otp.includes("")) {
      onComplete?.(otp);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !values[index] &&
      index > 0
    ) {
      refs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2">
      {values.map((value, index) => (
        <input
          key={index}
          ref={(el) => {
            refs.current[index] = el;
          }}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) =>
            handleChange(e.target.value, index)
          }
          onKeyDown={(e) =>
            handleKeyDown(e, index)
          }
          className="w-12 h-12 border rounded-lg text-center text-xl font-semibold outline-none focus:ring-2 focus:ring-green-500"
        />
      ))}
    </div>
  );
}