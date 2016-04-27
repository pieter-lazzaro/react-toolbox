
import * as React from "react";

interface MenuProps {

//Default: false
active?: boolean;
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
className?: string;

onHide?: Function;

onSelect?: Function;

onShow?: Function;

//Default: true
outline?: boolean;

//Default: POSITION.STATIC
position?: string;

//Default: true
ripple?: boolean;

//Default: true
selectable?: boolean;

selected?: any;
}


//
declare const Menu: React.ComponentClass<MenuProps>;

export default Menu;
