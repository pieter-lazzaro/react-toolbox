
import * as React from "react";

interface OverlayProps extends React.DOMAttributes {

active?: boolean;
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
className?: string;

//Default: false
invisible?: boolean;

onClick?: (...args:any[]) => any;

onEscKeyDown?: (...args:any[]) => any;
}


//
declare const Overlay: React.ComponentClass<OverlayProps>;

export default Overlay;
