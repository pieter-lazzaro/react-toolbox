
import * as React from "react";

interface SidebarProps extends React.DOMAttributes {
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
pinned?: boolean;

//Default: false
scrollY?: boolean;

//Default: 5
width?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 25 | 33 | 50 | 66 | 75 | 100;
}


//
declare const Sidebar: React.ComponentClass<SidebarProps>;

export default Sidebar;
