import React from 'react';

import { Header } from '@ui/components/Header';

interface BaseLayoutProps {
  children?: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex items-center flex-col px-5 pb-9 bg-gray-50">
      <div className="w-full max-w-xl flex flex-col items-center">
        <Header />

        {children}
      </div>
    </div>
  );
};
