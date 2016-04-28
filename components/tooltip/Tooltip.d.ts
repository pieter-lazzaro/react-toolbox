import * as React from "react";

export interface TooltipProps {
    children?: any;
    className?: string;
    onClick?: (...args: any[]) => any;
    onMouseEnter?: (...args: any[]) => any;
    onMouseLeave?: (...args: any[]) => any;
    tooltip?: string;
    tooltipDelay?: number;
    tooltipHideOnClick?: boolean;
}

declare const Tooltip: <T>(component: React.ComponentClass<T> | React.SFC<T>) => React.ComponentClass<T & TooltipProps>; 

export default Tooltip;