import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function ReasonsGrid({ children }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-32 text-black text-xl bg-[#E6E6E6] pb-32 mx-auto w-11/12">
      {children}
    </div>
  );
}

export default ReasonsGrid;