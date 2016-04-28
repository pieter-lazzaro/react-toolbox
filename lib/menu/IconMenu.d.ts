
import * as React from "react";

interface IconMenuProps extends React.HTMLAttributes {
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: 'more_vert'
icon?: string | React.ClassicElement<any>;

//Default: true
iconRipple?: boolean;

//Default: true
menuRipple?: boolean;

onClick?: (...args:any[]) => any;

onHide?: (...args:any[]) => any;

onSelect?: (...args:any[]) => any;

onShow?: (...args:any[]) => any;

//Default: 'auto'
position?: string;

//Default: false
selectable?: boolean;

selected?: any;
}


//
declare const IconMenu: React.ComponentClass<IconMenuProps>;

export default IconMenu;
