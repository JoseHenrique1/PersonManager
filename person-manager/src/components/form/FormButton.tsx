import { ButtonHTMLAttributes } from "react";

export function FormButton({children, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-blue-500 rounded flex justify-center items-center w-24 h-9"
      {...props}>
      {children}
    </button>
  );
}
