
import * as React from "react";

interface SnackbarProps extends React.DOMAttributes {
    action?: string,
    active?: boolean,
    className?: string,
    icon?: string | React.ReactElement,
    label: string,
    onClick?: (event: React.MouseEvent) => void,
    onTimeout?: () => void,
    timeout?: number,
    type?: string
  }


//
declare const Snackbar: React.ComponentClass<SnackbarProps>;

export default Snackbar;
