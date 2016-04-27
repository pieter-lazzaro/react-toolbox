
import * as React from "react";

interface IconMenuProps {
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: 'more_vert'
icon?: string | React.Element;

//Default: true
iconRipple?: boolean;

//Default: true
menuRipple?: boolean;

onClick?: Function;

onHide?: Function;

onSelect?: Function;

onShow?: Function;

//Default: 'auto'
position?: string;

//Default: false
selectable?: boolean;

selected?: any;
}


//
declare const IconMenu: React.ComponentClass<IconMenuProps>;

export default IconMenu;
