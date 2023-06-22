import React, { ReactNode } from 'react';

export interface IEmptyLayoutProps {
  children: ReactNode;
}

export function EmptyLayout({ children }: IEmptyLayoutProps) {
  return <div>{children}</div>;
}
