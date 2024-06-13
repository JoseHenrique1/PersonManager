import { ReactNode } from "react";

export function FormRow({children}: {children: ReactNode}) {
  return ( 
    <div className="flex gap-4">
      {children}
    </div>
   );
}
