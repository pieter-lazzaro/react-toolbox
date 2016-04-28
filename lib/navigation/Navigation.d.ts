
import * as React from "react";

interface NavigationProps extends React.HTMLAttributes {

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
type?: 'vertical' | 'horizontal';
}


//
declare const Navigation: React.ComponentClass<NavigationProps>;

export default Navigation;
