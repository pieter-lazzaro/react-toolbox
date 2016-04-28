
import * as React from "react";

import {RippleProps} from '../ripple/Ripple';

interface IconButtonProps extends React.DOMAttributes, RippleProps {

//Default: false
accent?: boolean;
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

disabled?: boolean;

href?: string;

icon?: string | React.ClassicElement<any>;

inverse?: boolean;

//Default: true
neutral?: boolean;

onMouseLeave?: (...args:any[]) => any;

onMouseUp?: (...args:any[]) => any;

//Default: false
primary?: boolean;

type?: string;
}


//
declare const IconButton: React.ComponentClass<IconButtonProps>;

export default IconButton;
