import { ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface iconProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: "edit"|"delete"|"user-more"|"close";
}

const colors = {
  edit: "bg-blue-500 hover:bg-blue-400",
  delete: "bg-red-500 hover:bg-red-400",
  "user-more": "bg-green-500 hover:bg-green-400",
  close: "bg-red-500 hover:bg-red-400"
}

export function Icon({name, className, ...props}: iconProps) {
  const style = "p-1 rounded cursor-pointer " + colors[name];
  return ( 
    <img 
      src={`/src/assets/icons/${name}.svg`} 
      alt={`Icon ${name}`}
      className={twMerge(style, className)}
      {...props}/>
  );
}
