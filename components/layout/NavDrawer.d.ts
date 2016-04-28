
import * as React from "react";

interface NavDrawerProps extends React.DOMAttributes {

//Default: false
active?: boolean;
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

onOverlayClick?: (...args:any[]) => any;

permanentAt?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

pinned?: boolean;

//Default: false
scrollY?: boolean;

//Default: 'normal'
width?: 'normal' | 'wide';
}


//
declare const NavDrawer: React.ComponentClass<NavDrawerProps>;

export default NavDrawer;
