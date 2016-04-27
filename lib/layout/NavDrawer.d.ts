
import * as React from "react";

interface NavDrawerProps {

//Default: false
active?: boolean;
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

onOverlayClick?: Function;

permanentAt?: [object Object] | [object Object] | [object Object] | [object Object] | [object Object] | [object Object];

pinned?: boolean;

//Default: false
scrollY?: boolean;

//Default: 'normal'
width?: [object Object] | [object Object];
}


//
declare const NavDrawer: React.ComponentClass<NavDrawerProps>;

export default NavDrawer;
