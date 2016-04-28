
import * as React from "react";

interface ButtonProps extends React.DOMAttributes {

//Default: false
accent?: boolean;
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

disabled?: boolean;

//Default: false
flat?: boolean;

//Default: false
floating?: boolean;

href?: string;

icon?: string | React.ClassicElement<any>;

inverse?: boolean;

label?: string;

//Default: false
mini?: boolean;

//Default: true
neutral?: boolean;

onMouseLeave?: (...args:any[]) => any;

onMouseUp?: (...args:any[]) => any;

//Default: false
primary?: boolean;

//Default: false
raised?: boolean;

type?: string;
}


//
declare const Button: React.ComponentClass<ButtonProps>;

export default Button;
