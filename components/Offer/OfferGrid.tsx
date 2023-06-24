import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function OfferGrid({ children }: Props) {
  return (
    <div className="flex flex-col gap-y-14 text-black text-xl py-6">
      {children}
    </div>
  );
}

export default OfferGrid;