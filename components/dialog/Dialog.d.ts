import * as React from "react";

interface DialogProps {
  actions?: any[],
  active?: boolean,
  children?: React.ReactNode,
  className?: string,
  onEscKeyDown?: (...args:any[]) => any,
  onOverlayClick?: (...args:any[]) => any,
  onOverlayMouseDown?: (...args:any[]) => any,
  onOverlayMouseMove?: (...args:any[]) => any,
  onOverlayMouseUp?: (...args:any[]) => any,
  title?: string,
  type?: string
}

declare const Dialog: React.ComponentClass<DialogProps>;

export default Dialog;