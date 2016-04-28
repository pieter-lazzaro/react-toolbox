import * as React from "react";

interface DrawerProps {
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
  onOverlayClick?: (...args:any[]) => any;
  type?: 'left' | 'right';
}

declare const Drawer: React.ComponentClass<DrawerProps>;

export default Drawer;