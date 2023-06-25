import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function ReasonsGrid({ children }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 text-white text-xl pb-32 mx-auto w-11/12">
      {children}
    </div>
  );
}

export default ReasonsGrid;