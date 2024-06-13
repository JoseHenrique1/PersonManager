import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function FormInput({className, ...props}: InputHTMLAttributes<HTMLInputElement>) {
  return ( 
    <input 
      type="text"
      placeholder="Name"
      className={twMerge("rounded px-3 py-1 w-full", className)} 
      {...props}/>
  );
}


