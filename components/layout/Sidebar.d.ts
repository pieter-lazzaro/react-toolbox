
import * as React from "react";

interface SidebarProps extends React.HTMLAttributes {
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
width?: number;
}


//
declare const Sidebar: React.ComponentClass<SidebarProps>;

export default Sidebar;
