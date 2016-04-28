import * as React from "react";

export interface RippleProps {
    children?: any;
    disabled?: boolean;
    onRippleEnded?: () => void;
    ripple?: boolean;
    rippleCentered?: boolean;
    rippleClassName?: string;
    rippleSpread?: number;
}

interface RippleOptions {
    spread?: number;
    centered?: boolean;
    className?: string;
}

declare const Ripple: (options: RippleOptions) => <T>(component: React.ComponentClass<T> | React.StatelessComponent<T>) => React.ComponentClass<T & RippleProps>;

export default Ripple;