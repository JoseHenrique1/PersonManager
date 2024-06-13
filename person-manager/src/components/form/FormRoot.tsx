import { FormHTMLAttributes, ReactNode } from "react";

interface formRootProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}
export function FormRoot({children, ...props}: formRootProps) {
  return ( 
    <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black/80 p-2">
      <form className="max-w-screen-md w-full flex flex-col items-start gap-4 rounded-2xl p-4
    bg-gradient-to-br from-slate-700 from-5% via-slate-900 to-slate-950"
      {...props}
      >
        {children}
      </form>
    </div>
  );
}
