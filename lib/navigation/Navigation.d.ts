
import * as React from "react";

interface NavigationProps extends React.DOMAttributes {

//Default: []
actions?: any[];
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

//Default: []
routes?: any[];

//Default: 'horizontal'
type?: [object Object] | [object Object];
}


//
declare const Navigation: React.ComponentClass<NavigationProps>;

export default Navigation;
