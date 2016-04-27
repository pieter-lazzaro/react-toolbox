
import * as React from "react";

interface LinkProps extends React.DOMAttributes {

//Default: false
active?: boolean;
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

count?: number;

icon?: string | React.ClassicElement<any>;

label?: string;
}


//
declare const Link: React.ComponentClass<LinkProps>;

export default Link;
