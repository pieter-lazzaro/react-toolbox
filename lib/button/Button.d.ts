
import * as React from "react";

interface ButtonProps {

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

icon?: string | React.Element;

inverse?: boolean;

label?: string;

//Default: false
mini?: boolean;

//Default: true
neutral?: boolean;

onMouseLeave?: Function;

onMouseUp?: Function;

//Default: false
primary?: boolean;

//Default: false
raised?: boolean;

type?: string;
}


//
declare const Button: React.ComponentClass<ButtonProps>;

export default Button;
