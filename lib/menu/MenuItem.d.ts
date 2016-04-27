
import * as React from "react";

interface MenuItemProps {

caption: string;
//Children to pass through the component.
children?: any;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: false
disabled?: boolean;

icon?: string | React.Element;

onClick?: Function;

//Default: false
selected?: boolean;

shortcut?: string;
}


//
declare const MenuItem: React.ComponentClass<MenuItemProps>;

export default MenuItem;
