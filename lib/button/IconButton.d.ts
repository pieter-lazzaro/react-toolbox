
import * as React from "react";

interface IconButtonProps {

//Default: false
accent?: boolean;
//Children to pass through the component.
children?: React.ReactNode;
//Additional class(es) for custom styling.
//Default: ''
className?: string;

disabled?: boolean;

href?: string;

icon?: string | React.Element;

inverse?: boolean;

//Default: true
neutral?: boolean;

onMouseLeave?: Function;

onMouseUp?: Function;

//Default: false
primary?: boolean;

type?: string;
}


//
declare const IconButton: React.ComponentClass<IconButtonProps>;

export default IconButton;
