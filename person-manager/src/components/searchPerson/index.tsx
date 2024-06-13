import { InputHTMLAttributes } from "react";
interface searchPersonProps extends InputHTMLAttributes<HTMLInputElement> {};

export function SearchPerson({...props}: searchPersonProps ) {
  return (
      <input 
        className="flex-grow px-3 py-1 text-lg text-gray-700 rounded focus:outline-none"
        placeholder="Search person by name" 
        {...props}/>
  );
}
