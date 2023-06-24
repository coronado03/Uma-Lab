import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function ProblemsGrid({ children }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-black bg-[#E6E6E6] text-xl">
      {children}
    </div>
  );
}

export default ProblemsGrid;