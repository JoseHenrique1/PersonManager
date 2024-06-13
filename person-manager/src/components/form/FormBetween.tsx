import { ReactNode } from "react";

export function FormBetween({children}: {children: ReactNode}) {
  return ( 
    <div className="w-full flex  justify-between gap-4">
      {children}
    </div>
   );
}
