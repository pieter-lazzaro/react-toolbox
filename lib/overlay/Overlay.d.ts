
import * as React from "react";

interface OverlayProps {

active?: boolean;
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
className?: string;

//Default: false
invisible?: boolean;

onClick?: Function;

onEscKeyDown?: Function;
}


//
declare const Overlay: React.ComponentClass<OverlayProps>;

export default Overlay;
